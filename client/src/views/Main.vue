<template>
  <div>
  <div v-for="country in countries" :key="country.id">
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
    style="margin-top: 20px;"

  >
    <v-list-item three-line >
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">{{country.name}}</v-list-item-title>
        <v-list-item-subtitle>Cases: {{country.cases}}</v-list-item-subtitle>
        <v-list-item-subtitle>Deaths: {{country.deaths}}</v-list-item-subtitle>
        <v-list-item-subtitle>Recovered: {{country.recovered}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn text @click="addReport(country.id)" >Button</v-btn>
    </v-card-actions>
  </v-card>
  </div>
  </div>
</template>
<script>

export default {
  name: "Main",
    computed: {
      countries() {
        console.log(this.$store.state.countries, "countries")
        return this.$store.state.countries
      }
    },
  created() {
    this.$store.dispatch("allCountries")
  },
  methods: {
    addReport(id) {
      this.$router.push({path: `/add/${id}`})
    }
  }
}
</script>

<style>

</style>