<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <ul>
      <li><router-link to="/meal">Meal Calories Table</router-link></li>
      <li><router-link to="/counter">Simple Counter</router-link></li>
      <li><router-link to="/calorie-calculator">Calorie Calculator</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'App list:'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
