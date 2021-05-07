<template>
  <main
    v-if="players.length > 0"
    class="grid grid-cols-1 lg:grid-cols-3 gap-2 p-2 h-full"
  >
    <video-player
      v-for="player in players"
      :key="player.channel"
      :channel="player.channel"
      :muted="player.muted"
      @remove="() => removePlayer(player)"
    ></video-player>
  </main>
  <main v-else class="w-full h-full flex flex-col items-center justify-center">
    <img class="w-1/4" src="nowatch.svg" />
    <span class=""
      >Adicione canais para você assistir,
      <span
        class="text-twitch font-semibold cursor-pointer"
        @click="() => showModalAdd(true)"
      >
        Clique aqui
      </span></span
    >
  </main>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters('watch', ['players']),
  },
  methods: {
    ...mapMutations('watch', ['removePlayer', 'showModalAdd']),
  },
}
</script>
