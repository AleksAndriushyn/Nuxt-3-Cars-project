<template>
  <nav class="container mx-auto p-4 flex justify-between uppercase">
    <NuxtLink class="flex gap-4" to="/">
      <MdiIcon class="text-black text-4xl" icon="mdiCarSide"/>
      <span class="text-2xl">Cars</span>
    </NuxtLink>
    <ul class="flex gap-4 uppercase">
      <li>
        <NuxtLink v-if="!userInfo" to="/login">Login</NuxtLink>
        <NuxtLink class="flex gap-2 items-center" v-else to="/profile">
          {{ userInfo.name }}
          <NuxtImg width="30" height="30" alt="user_image" :src="userInfo.image" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const user = useSupabaseUser()

const userInfo = computed(() => user.value ? {
    id: user.value.id,
    name: user.value.name ?? user.value.user_metadata.name,
    email: user.value.email,
    image: user.value.user_metadata.avatar_url,
  } : null
)
</script>

<style scoped>
  .router-link-exact-active {
    color: #05ea61;
    font-weight: bold;
  }
</style>