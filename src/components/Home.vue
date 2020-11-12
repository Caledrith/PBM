<template>
    <div class="component">
        <div class="tagline">
            Wherefore, by their fruits ye shall know them
            <br/>Matthew 7:20
        </div>
        <div class="container">
            <InfoBoxContainer />
        </div>
        <div class="content">
            <Vision v-if="number == 1"/>
            <Purpose v-if="number == 2"/>
            <Resources v-if="number == 3"/>
        </div>
    </div>
    
</template>

<script>
import InfoBoxContainer from './InfoBoxContainer';
import Vision from './Vision';
import Purpose from './Purpose';
import Resources from './Resources';
import { reactive } from 'vue';

export default {
  name: 'Home',
  components: {
      InfoBoxContainer,
      Vision,
      Purpose,
      Resources
  },
  props: {
  },
  setup () {
    const state = reactive({
      number: 1
    });
    function change (number1) {
          state.number = number1;
      }
    return { state, change }
  }
}
</script>

<style src="../css/home.css"></style>