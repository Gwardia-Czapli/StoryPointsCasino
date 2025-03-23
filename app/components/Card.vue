<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="bg-black/40 border-2 rounded-lg text-center max-w-125 p-8">
    <h1 class="text-2xl font-bold text-green-600">
      {{ title }}
    </h1>
    <p class="text-base mt-3">
      <slot />
    </p>
  </div>
</template>
