<script setup lang="ts">
defineProps(["iconName", "iconColor", "iconClass"])
</script>

<template>
  <button class="defaultBtn">
    <MdiIcon
      v-if="iconName"
      class="text-2xl"
      :class="iconClass"
      :color="iconColor"
      :icon="`mdi${iconName}`"
    />
    <slot/>
  </button>
</template>

<style scoped>
  .defaultBtn {
    @apply p-2 bg-gray-200 rounded-2xl w-48 transition-colors duration-500 ease-in-out font-bold;
    &:hover {
      @apply bg-gray-600 text-white;
    }
  }
</style>