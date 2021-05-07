<template>
  <div class="flex flex-col h-screen w-screen overflow-x-hidden">
    <nav-bar></nav-bar>
    <modal-add-channel></modal-add-channel>
    <div class="flex-grow">
      <Nuxt />
    </div>

    <bottom-bar></bottom-bar>
  </div>
</template>
