<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const { user, clear } = useUserSession()

function logout() {
  clear()
  navigateTo('/')
}
</script>

<template>
  <div>
    <h1>Welcome {{ user?.login }}!</h1>
    <span>{{ user }}</span>
    <img :src="user?.avatar_url" alt="User profile picture" class="rounded-full">
    <UButton @click="logout">
      Logout
    </UButton>
  </div>
</template>
