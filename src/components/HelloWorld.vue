<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <ul>
      <li><router-link to="/meal">Meal Calories Table</router-link></li>
      <li><router-link to="/counter">Simple Counter</router-link></li>
      <li><router-link to="/calorie-calculator">Calorie Calculator</router-link></li>
      <li><router-link to="/firebase-calorie-calculator">Firebase Calorie Calculator</router-link></li>
      <li><router-link to="/auth">Login</router-link></li>
      <li><router-link to="/success">Welcome</router-link></li>
      <li><router-link to="/xslt">XSLT</router-link></li>
      <li><router-link to="/popup-parent">Popup Window</router-link></li>
      <li><router-link to="/country-data">Country Data</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "App list:"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
