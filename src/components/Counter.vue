<template>
    <div>
      <div class="mv2">Count: {{counter}}</div>
      <button class="pv1 ph2 mr2" @click="counter++">+</button>
      <button class="pv1 ph2" @click="counter--">-</button>
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      counter: 0
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
