<template>
  <div>
    <p>Click to popup a child windown.</p>
    <a @click="popup" href="javascript:void(0)">Popup a window</a>
  </div>
</template>

<script>
export default {
  methods: {
    popup() {
      // let route = this.$router.resolve({name: 'popupChild'});
      let route = this.$router.resolve('/popup-child');
      console.log(`route: ${route}`);
      console.log(`route.href: ${route.href}`);
      window.open(route.href, '_blank', 'width=600, height=400');
      window.addEventListener("message", this.receiveMessage, false);
    },
    receiveMessage(event) {
      console.log(`event.origin: ${event.origin}`);
      console.log(`event.data: ${event.data}`);
    }
  }
};
</script>

<style scoped>

</style>
