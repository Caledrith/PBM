<template>
    <div class="infobox">
        {{ message }}
    </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: 'InfoBox',
  props: {
    msg: String
  },
  setup(props) {
    const state = reactive({
        message: props.msg
      })
      return {state}
  }
}
</script>

<style src="../css/info-box.css"></style>