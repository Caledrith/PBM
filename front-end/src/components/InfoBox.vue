<template>
    <div class="infobox">
        {{ msg }}
    </div>
</template>

<script>
export default {
  name: 'InfoBox',
  props: {
    msg: String
  }
}
</script>

<style src="../css/info-box.css"></style>