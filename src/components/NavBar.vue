<template>
    <div class="component1">
        <div class="title">
            <router-link to="/">
           Philippines Bacolod Mission
            </router-link>
        </div>
        <div class="links">
            <div class="link">
                <router-link to="/history">
                    History
                </router-link>
            </div>
            <div class="link">
                <router-link to="/vision">
                    Vision
                </router-link> 
            </div>
            <div class="link">
                Souls  
            </div>
            <div class="link">
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
  }
}
</script>

<style src="../css/nav-bar.css"></style>