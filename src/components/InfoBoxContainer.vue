<template>
    <div class="infoboxcontainer">
        <InfoBox v-on:click="set(1)" msg="Our Vision" key="1"/>
        <InfoBox v-on:click="set(2)" msg="This Website's Purpose" key="2"/>
        <InfoBox v-on:click="set(3)" msg="Resources" key="3"/>
    </div>
</template>

<script>
import InfoBox from './InfoBox';
export default {
  name: 'InfoBoxContainer',
  components: {InfoBox},
  props: {
  },
  methods: {
    set: function (number) {
        this.$emit('clicked', number);
    }
  }
}
</script>

<style src="../css/info-box-container.css"></style>