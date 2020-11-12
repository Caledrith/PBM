<template>
    <div class="busicomponent">
        <Collapsible class="example-collapsible">
            <!-- eslint-disable -->
            <div slot="trigger">
            <div class="customTrigger">
                <h2>Custom open trigger element</h2>
            </div>
            </div>
        
            <div slot="closedTrigger">
            <div class="customTrigger">
                <h2>Custom closed trigger element</h2>
            </div>
            </div>
        
            <div id="example2">
            <p>
                Lorem ipsum dolor sit ...
            </p>
            </div>
        </Collapsible>
        <div>
        {{ text1 }}
        </div>
        
    </div>
    
</template>

<script>
import mbl1 from '!raw-loader!../assets/mb_lopez_1.txt';
import Collapsible from 'vue-collapsible-component';

export default {
  name: 'Businesses',
  components: {
      Collapsible
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