<script setup lang="ts">
const { loggedIn } = useUserSession()
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 h-screen">
    <UButton
      v-if="!loggedIn"
      to="/api/auth/github"
      icon="i-simple-icons-github"
      label="Login with GitHub"
      size="xs"
      external
    />

    <div v-else>
      <h2>You are logged in!</h2>
      <NuxtLink to="/panel" class="underline">
        Open panel here
      </NuxtLink>
    </div>

    <h1 class="font-bold text-2xl text-(--ui-primary)">
      Nuxt UI v3
    </h1>

    <div class="flex items-center gap-2">
      <UButton
        label="Documentation"
        icon="i-lucide-square-play"
        to="https://ui3.nuxt.dev/getting-started/installation/nuxt"
        target="_blank"
      />

      <UButton
        label="GitHub"
        color="neutral"
        variant="outline"
        icon="i-simple-icons-github"
        to="https://github.com/nuxt/ui"
        target="_blank"
      />
    </div>
  </div>
</template>
