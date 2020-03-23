 <template>
  <div>
 <v-form
  class="container"
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <v-alert type="error" v-if="error">
    {{errText}}
  </v-alert>
  <h1>LOGIN!</h1>
    <v-text-field
      v-model="CountryId"
      label="Country"
      required
    ></v-text-field>

    <v-text-field
      v-model="cases"
      label="cases"
      required
    ></v-text-field>

    <v-btn
      color="success"
      class="mr-4"
      @click.prevent="login"
    >
      Login
    </v-btn>

    <v-btn
      color="warning"
      @click="reset"
    >
      Reset
    </v-btn>
  </v-form>
<div>
  <div v-for="report in reports" :key="report.id">
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
    style="margin-top: 20px;"

  >
    <v-list-item three-line >
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">{{report.name}}</v-list-item-title>
        <v-list-item-subtitle>Cases: {{report.cases}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <!-- <v-btn text @click="addReport(country.id)" >Button</v-btn> -->
    </v-card-actions>
  </v-card>
  </div>
  </div>
  </div>
</template>

<script>
 export default {
  name: "Main",
    computed: {
      reports() {
        return this.$store.state.reports
      }
    },
  created() {
    this.$store.dispatch("allReports", this.$router.params.id)
  },
  methods: {
    // addReport(id) {
    // }
  }
}
</script>
<style scoped>

</style>