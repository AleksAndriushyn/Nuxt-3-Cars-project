<script setup lang="ts">
import {baseUrl} from "~/utils/vars";

const supabase = useSupabaseClient()
const redirectUrl = baseUrl + '/confirm';

const { updateError, commonError } = inject('loginData');

const signInWithSocial = async (provider) => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: redirectUrl,
    }
  })
  if (error) updateError(error.message);
}
</script>

<template>
  <div class="socialBtnWrapper">
    <custom-button
        class="socialBtn"
        type="button"
        @click="signInWithSocial('google')"
        icon-name="Google"
        icon-color="red"
    >
      oogle
    </custom-button>
  </div>
</template>

<style scoped>
  .socialBtnWrapper {
    @apply flex gap-4 justify-center;

    .socialBtn {
      @apply flex items-center justify-center;
    }
  }
</style>