<template>
  <div>
    <div>
      <input type="text" name="" v-model="value" id="" @keydown.enter="didi" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value: "",
    };
  },
  methods: {
    didi() {
      let arr = this.value;
      if( isNaN(arr)){
          alert("强填写数字")
      }
    },
  },
  mounted() {
      
  },
  watch: {},
  computed: {},
  filters: {},
};
</script>

<style scoped lang='scss'>
</style>