<script setup lang="ts">
const user = useSupabaseUser()

watch(user, () => {
  console.log(user.value)
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