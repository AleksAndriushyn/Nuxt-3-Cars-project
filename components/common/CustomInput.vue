<script setup>
 defineProps(["error", "value", "type", "errors", "id", "label"])
 const emit = defineEmits(["update:value"]);
</script>

<template>
  <div class="iWr">
    <label :for="id">{{ label }}</label>
    <input class="i" :value="value" :type="type" @input="emit('update:value', $event.target.value)"/>
    <span
        class="error"
        v-for="error in errors"
        :key="error.$message"
    >
    {{ error.$message }}
  </span>
    <span class="error">{{ error }}</span>
  </div>
</template>

<style scoped>
  .iWr {
    @apply flex flex-col gap-3;
    label {
      @apply text-gray-600 font-bold;
    }
  }
  .i {
    @apply rounded-2xl p-3 bg-gray-200 transition-colors duration-500 ease-in-out;
    &:hover {
      @apply bg-gray-300 cursor-pointer;
    }
    &:focus {
      @apply outline-none bg-gray-600 text-white cursor-auto;
    }
  }
  .error {
    @apply text-red-700;
  }
</style>