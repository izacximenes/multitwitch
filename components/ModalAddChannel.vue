<template>
  <div>
    <div
      v-if="showModal"
      class="animate__animated animate__fadeIn overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
      @click.self="toggleModal"
    >
      <div class="relative w-auto my-6 mx-auto max-w-3xl">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-96 bg-white outline-none focus:outline-none"
        >
          <!--header-->
          <div
            class="flex items-center justify-between p-4 border-b border-solid border-blueGray-200 rounded-t bg-twitch"
          >
            <h3 class="text-2xl font-semibold text-white">Adicionar Canal</h3>
            <button
              class="p-1 ml-auto bg-transparent text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              @click="toggleModal()"
            >
              <span
                class="bg-transparent text-white text-2xl block outline-none focus:outline-none"
              >
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative px-4 py-8 flex-col w-full">
            <input
              v-model="channel"
              type="text"
              autofocus
              placeholder="username ou url do canal"
              class="px-3 py-3 placeholder-gray-400 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              @keydown.enter="addChannel"
              @input="() => (error = null)"
            />
            <span v-if="error" class="text-red-400 pt-2 text-xs">{{
              error
            }}</span>
          </div>
          <!--footer-->
          <div
            class="flex items-center justify-center p-3 border-t border-solid rounded-b bg-twitch cursor-pointer"
            @click="addChannel()"
          >
            <button
              class="text-white font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showModal"
      class="opacity-25 fixed inset-0 z-40 bg-indigo-600"
    ></div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      error: null,
      channel: '',
    }
  },
  computed: {
    ...mapGetters('watch', {
      showModal: 'showModalAdd',
      hasChannel: 'hasChannel',
    }),
  },
  methods: {
    ...mapMutations('watch', ['showModalAdd', 'addPlayer']),
    toggleModal() {
      this.channel = ''
      this.showModalAdd(!this.showModal)
    },
    addChannel() {
      const regex = /^(?:@|(?:https?:\/\/)?(?:www\.)?twit(?:\.ch|ch\.tv)\/)?(\w+)\/?$/
      const regexGroup = regex.exec(this.channel)
      if (!regexGroup) {
        this.error = 'username ou url inválida'
        return
      }
      this.error = null
      const username = regexGroup[1]

      if (this.hasChannel(username)) {
        this.error = 'Canal já está adicionado'
        return
      }
      this.addPlayer({
        channel: username,
        muted: true,
      })
      this.toggleModal()
    },
  },
}
</script>

<style></style>
