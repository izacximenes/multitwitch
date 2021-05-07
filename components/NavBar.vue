<template>
  <header
    class="w-screen py-2 bg-twitch text-white flex flex-row items-center px-6 justify-between"
  >
    <div class="flex flex-row items-center space-x-1">
      <img src="twitch.png" class="h-8 w-8" />
      <span class="cursor-pointer font-semibold"> MultiTwitch </span>
    </div>

    <div
      class="cursor-pointer rounded-full"
      title="Adicionar Canal"
      @click="() => showModalAdd(true)"
    >
      <div class="flex flex-row">
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z"
          />
        </svg>
        <span class="text-white font-bold">CANAL</span>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations('watch', ['showModalAdd']),
  },
}
</script>

<style></style>
