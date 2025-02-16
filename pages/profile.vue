<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});

const supabase = useSupabaseClient()
const user = useSupabaseUser();

const userInfo = computed(() => user.value ? {
      id: user.value.id,
      name: user.value.name ?? user.value.user_metadata.name,
      email: user.value.email,
      image: user.value.user_metadata.avatar_url,
    } : null
)

const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Ошибка при выходе:", error.message);
  } else {
    navigateTo("/login");
  }
}
</script>

<template>
  <div class="profileWrapper">
    <NuxtImg width="100" height="100" :src="userInfo.image"/>
    <div class="flex flex-col gap-4">
      <span><b>Name:</b> {{ userInfo.name }}</span>
      <span><b>Email:</b> {{ userInfo.email }}</span>
    </div>
    <custom-button
        class="flex gap-2 justify-center"
        @click="signOut"
        icon-name="Logout"
        icon-color="red">
      Leave
    </custom-button>
  </div>
</template>

<style scoped>
  .profileWrapper {
    @apply flex flex-col items-center gap-12 justify-center
  }
</style>