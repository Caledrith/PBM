<template>
    <div class="component1">
        <div @click="set( 'home' )" class="title">
           Philippines Bacolod Mission
        </div>
        <div class="links">
            <div @click="set( 'presidents' )" class="link">
                Presidents
            </div>
            <div @click="set( 'business' )" class="link">
                Mission Businesses
            </div>
            <div @click="set( 'souls' )" class="link">
                Souls  
            </div>
            <div @click="set( 'stories' )" class="link">
                Stories 
            </div>
        </div>
        <div class="login">
            Login
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  },
  methods: {
    set: function (route) {
        this.$emit('clicked', route);
    }
  }
}
</script>

<style src="../css/nav-bar.css"></style>