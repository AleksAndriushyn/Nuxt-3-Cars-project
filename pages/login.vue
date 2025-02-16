<script setup>
import EmailForm from "~/components/auth/EmailForm.vue";
import SocialButtons from "~/components/auth/SocialButtons.vue";

definePageMeta({
  middleware: 'guest', // 🔥 Запрещаем заходить авторизованным пользователям
});

const commonError = ref('')

const updateError = (value = "") => commonError.value = value;

provide("loginData", { updateError, commonError });
</script>

<template>
  <div class="flex flex-col p-6 gap-8">
    <email-form />
    <social-buttons />
  </div>
</template>

<style scoped>

</style>