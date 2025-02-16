<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import CustomInput from "~/components/common/CustomInput.vue";
import { emailValid } from "~/utils/validations";

const supabase = useSupabaseClient()
const redirectUrl = process.env.BASE_URL + 'confirm' || 'http://localhost:3000/confirm';

const { updateError, commonError } = inject('loginData');

const email = ref('')

const rules = computed(() => ({
  email: {
    required,
    emailValid,
  },
}))

watch(email, () => {
  updateError();
})

const v$ = useVuelidate(rules, { email })

const signInWithEmail = async () => {
  v$.value.$touch();

  if (!v$.value.$invalid) {
    const { error } = await supabase.auth.signInWithOtp({
      email: v$.value.email.$model,
      options: {
        emailRedirectTo: redirectUrl,
      }
    })
    if (error) updateError(error.message);
  }
}
</script>

<template>
<form class="flex flex-col gap-2" @submit.prevent="signInWithEmail">
  <custom-input
      id="email_input"
      label="Email"
      type="email"
      v-model:value.trim="v$.email.$model"
      placeholder="Enter Email"
      :errors="v$.email.$errors"
      :error="commonError"
  />
  <div class="flex justify-end">
    <custom-button
        class="flex gap-2 justify-center"
        type="submit"
        icon-color="orange"
        icon-name="Email"
    >
      E-Mail
    </custom-button>
  </div>
</form>
</template>