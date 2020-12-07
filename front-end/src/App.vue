<template>
<div id="yeet">
  <NavBar @clicked="changeRoute"/>
  <Window v-if="route == 'home'"/>
  <Presidents v-if="route == 'pres'"/>
  <Businesses v-if="route == 'business'"/>
  <Souls v-if="route == 'souls'"/>
  <Stories v-if="route == 'stories'"/>
  <Footer/>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Window from './components/Window.vue'
import Presidents from './components/Presidents.vue'
import Businesses from './components/Businesses.vue'
import Souls from './components/Souls.vue'
import Stories from './components/Stories.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Window,
    Presidents,
    Businesses,
    Souls,
    Stories,
    Footer
  },
  data: function() {
    return {
      route: "home"
    }
  },
  methods: {
    changeRoute: function(route) {
      this.route = route
    }
  }
}
</script>

<style>
#yeet {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0 !important;
}
</style>
