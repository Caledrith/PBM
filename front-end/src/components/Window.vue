<template>
    <div class="component">
        <div class="tagline">
            Wherefore, by their fruits ye shall know them
            Matthew 7:20
        </div>
        <div class="container">
            <InfoBoxContainer @clicked="change"/>
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

export default {
  name: 'Window',
  components: {
      InfoBoxContainer,
      Vision,
      Purpose,
      Resources
  },
  props: {
    msg: String
  },
  methods: {
      change: function (number1) {
          this.number = number1;
      }
  },
  data: function () {
      return {
        number:  1
      }
  }

}
</script>

<style src="../css/window.css"></style>
