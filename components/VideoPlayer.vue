<template>
  <div
    class="w-full h-60 bg-green-500 relative animate__animated animate__bounceIn"
    @mouseleave="showCloseButton = false"
    @mouseenter="showCloseButton = true"
  >
    <div
      v-show="showCloseButton"
      class="w-full h-10 bg-twitch absolute z-auto right-0 flex flex-row items-center justify-center"
    >
      <span class="text-white font-semibold"> {{ channel }} </span>

      <svg
        style="width: 24px; height: 24px"
        class="fill-current text-white cursor-pointer"
        viewBox="0 0 24 24"
        title="remover canal"
        @click="$emit('remove')"
      >
        <path
          fill="currentColor"
          d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
        />
      </svg>
    </div>
    <vue-twitch-player
      :channel="channel"
      :muted="muted"
      width="100%"
      heigth="100%"
    ></vue-twitch-player>
  </div>
</template>

<script>
export default {
  props: {
    channel: {
      type: String,
      required: true,
    },
    muted: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showCloseButton: false,
    }
  },
}
</script>

<style></style>
