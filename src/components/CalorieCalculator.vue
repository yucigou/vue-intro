<template>
  <div>
    <div class="w-100 mw5 center">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>
      <button class="mv3" v-show="!showForm" @click="showAddForm">Add Meal</button>
      <div v-show="showForm">
        <form @submit.prevent>
          <label for="meal">Meal:</label>
          <input class="db mv1" type="text" name="meal" id="meal" v-model.trim="meal">
          <label for="calories">Calories:</label>
          <input class="db mv1" type="number" min="1" name="calories" id="calories" v-model.number="calories">
          <button class="mv2" @click="save">Save</button>
          <button class="mv2" @click="errors = []; showForm = false">Cancel</button>
        </form>
      </div>
    </div>
    <table class="w-100 mw5 center collapse">
      <thead>
        <tr>
          <th class="pa2 tl">Meal</th>
          <th class="pa2 tr">Calories</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr class="stripe-dark" v-for="meal in meals" :key="meal.description">
          <td class="pa2">{{meal.description}}</td>
          <td class="pa2 tr">{{meal.calories}}</td>
          <td class="pa2 tr">
            <span @click="deleteMeal(meal.description)"><i class="far fa-trash-alt ph2 pointer"></i></span>
            <span @click="editMeal(meal.description)"><i class="fas fa-pencil-alt pointer"></i></span>
          </td>
        </tr>
        <tr class="bt b">
          <td class="pa2 tr"> Total</td>
          <td class="pa2 tr">{{total}}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Meal",
  data () {
    return {
      showForm: false,
      meal: "",
      calories: 1,
      errors: [],
      mode: null,
      meals: [
        { description: "Breakfast", calories: 460 },
        { description: "Snack", calories: 180 },
        { description: "Lunch", calories: 600 }
      ]
    };
  },
  created () {
    this.CONSTANTS = {
      MODE: {
        ADD: 'Add',
        EDIT: 'Edit'
      }
    };
    Object.defineProperty(this, "CONSTANTS", { configurable: false, writable: false });
    this.mode = this.CONSTANTS.MODE.ADD;
  },
  computed: {
    total: function () {
      return this.meals
        .map(meal => meal.calories)
        .reduce((acc, calories) => acc + calories, 0)
    }
  },
  methods: {
    showAddForm: function () {
      this.errors = [];
      this.mode = this.CONSTANTS.MODE.ADD;
      this.showForm = true;
    },
    save: function () {
      if (!this.checkForm()) {
        return;
      }

      this.showForm = false;

      switch (this.mode) {
        case this.CONSTANTS.MODE.EDIT:
          this.meals = this.meals.map(meal => {
            if (meal.description.toUpperCase() === this.meal.toUpperCase()) {
              return {description: this.meal, calories: this.calories};
            } else {
              return meal;
            }
          });
          break;

        default:
          let duplicated = this.meals.some(meal => meal.description.toUpperCase() === this.meal.toUpperCase());
          if (duplicated) {
            this.errors = [`Meal ${this.meal} already exists`];
          } else {
            this.meals.push({ description: this.meal, calories: this.calories })
          }
      }
    },
    checkForm: function () {
      this.errors = []
      if (this.meal && this.calories) {
        return true
      }
      if (!this.meal) {
        this.errors.push('Meal required.')
      }
      if (!this.calories) {
        this.errors.push('Calories required.')
      }
    },
    deleteMeal: function (description) {
      console.log(description);
      this.meals = this.meals.filter(meal => meal.description !== description);
    },
    editMeal: function (description) {
      const theMeal = this.meals.filter(meal => meal.description === description);
      this.meal = theMeal[0].description;
      this.calories = theMeal[0].calories;
      this.showForm = true;
      this.mode = this.CONSTANTS.MODE.EDIT;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
