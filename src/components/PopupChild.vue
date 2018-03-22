<template>
    <div>
      <p>Hello, I'm a popup :-)</p>
      <a @click="close" href="javascript:void(0)">Close me</a>
    </div>
</template>

<script>
export default {
  methods: {
    close() {
      console.log("Close me");
      window.opener.postMessage("Hello Parent.", "http://localhost");
      window.close();
    }
  }
};
</script>

<style scoped>

</style>
