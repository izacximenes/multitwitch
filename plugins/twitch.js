import LoadScript from 'vue-plugin-load-script'
import Vue from 'vue'
import VueTwitchPlayer from 'vue-twitch-player'
Vue.use(LoadScript)
Vue.component('VueTwitchPlayer', VueTwitchPlayer)
