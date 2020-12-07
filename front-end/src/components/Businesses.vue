<template>
    <div class="busicomponent">
        <div>
        {{ text1 }}
        </div>
        
    </div>
    
</template>

<script>
import mbl1 from '!raw-loader!../assets/mb_lopez_1.txt';

export default {
  name: 'Businesses',
  components: {
  },
  props: {
    msg: String
  }, 
  data: function (){
      return {
          text1: mbl1
      }
  }
}
</script>

<style src="../css/businesses.css">
</style>