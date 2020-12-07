<template>
    <div class="prescomponent">
        {{ msg }}
    </div>
</template>

<script>
export default {
  name: 'Presidents',
  props: {
    msg: String
  }
}
</script>

<style src="../css/presidents.css"></style>