<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});

const user = useSupabaseUser()

watch(user, () => {
  if (user.value) {
    navigateTo('/profile')
  }
}, { immediate: true })
</script>

<template>
  <div class="text-center">
    <p>Signing in...</p>
  </div>
</template>