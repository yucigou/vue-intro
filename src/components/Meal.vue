<template>
  <div>
    <table class="w-100 mw5 center collapse">
      <thead>
        <tr>
          <th class="pa2 tl">Meal</th>
          <th class="pa2 tr">Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr class="stripe-dark" v-for="meal in meals" :key="meal.description">
          <td class="pa2">{{meal.description}}</td>
          <td class="pa2 tr">{{meal.calories}}</td>
        </tr>
        <tr class="bt b">
          <td class="pa2 tr"> Total</td>
          <td class="pa2 tr">{{total}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Meal',
  data () {
    return {
      meals: [
        { description: 'Breakfast', calories: 460 },
        { description: 'Snack', calories: 180 },
        { description: 'Lunch', calories: 600 }
      ]
    }
  },
  computed: {
    total: function () {
      return this.meals.map(meal => meal.calories)
        .reduce((acc, calories) => acc + calories, 0)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
