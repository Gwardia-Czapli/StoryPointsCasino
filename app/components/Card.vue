<script setup lang="ts">
defineProps<{
  title: string
  content: string
}>()
</script>

<template>
  <div class="bg-black/40 border-2 rounded-lg text-center max-w-125 p-8">
    <p class="text-2xl font-bold text-[#32BE42]">
      {{ title }}
    </p>
    <p class="text-base mt-3">
      {{ content }}
    </p>
  </div>
</template>
