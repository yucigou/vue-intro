<template>
    <div></div>
</template>

<script>
let countries = require("country-data").countries;

export default {
  mounted() {
    let sortedCountries = countries.all
      .sort((c1, c2) => c1.name.localeCompare(c2.name))
      .map(country => {
        return {
          name: country.name,
          alpha3: country.alpha3
        };
      });

    console.log("sortedCountries: ", sortedCountries);
  }
};
</script>

<style scoped>

</style>
