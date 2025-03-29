<script setup lang="ts">
const { loggedIn } = useUserSession()
const img = useImage()
const backgroundImage = img('/img/casino-chips-bg.webp')
</script>

<template>
  <div class="relative h-screen">
    <div
      class="absolute inset-0 xl:[background-image:var(--bg-image)] xl:before:bg-black/50 bg-cover bg-center before:absolute before:inset-0"
      :style="{ '--bg-image': `url('${backgroundImage}')` }"
    />
    <div class="relative z-10 flex flex-col items-center justify-center">
      <div class="mt-30 text-center">
        <p class="text-5xl md:text-7xl font-bold">
          Story Point <br><span class="text-green-600">
            Casino
          </span>
        </p>
        <p class="text-3xl md:text-5xl mt-10">
          Let's <span class="font-bold">gamble</span> your contributions
        </p>
      </div>
      <div class="mt-10 text-center">
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
      </div>
      <div class="flex max-xl:flex-col gap-15 justify-center items-center mt-15 ">
        <Card
          class="max-xl:m-5"
          title="Contribute and earn!"
        >
          Earn story points by contributing to projects on GitHub.
          Commit your code, open issues, make pull requests,
          insult people in code reviews, and much more.
          For every action on GitHub, you will earn story points based on your impact.
          Start coding right now and gain the most valuable currency in the world.
        </Card>
        <Card
          class="max-xl:m-5"
          title="Gamble and multiply!"
        >
          Use your story points to gamble in our casino by playing exciting games!
          Can you truly live life to the fullest if you're too scared to be a real hustler?
          Don't be afraid of the potential to multiply your wealth.
          Remember, you can only lose 100% of your assets, but you could gain up to 2000% or even more!
        </Card>
      </div>
    </div>
  </div>
</template>
