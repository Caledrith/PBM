<template>
    <div>
        History of Philippines Bacolod Mission
    </div>
</template>

<script>
export default {
  name: 'History',
  props: {
    msg: String
  },
  methods: {
    set: function (number) {
        this.$emit('clicked', number);
    }
  }
}
</script>

<style src="../css/history.css"></style>