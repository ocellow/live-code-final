<template>
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
      v-model="name"
      label="Username"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      type=password
      label="Password"
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
</template>

<script>
  export default {
    data: () => ({
      errText: "",
      error: false,
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      password: '',
    }),

    methods: {
      login() {        
        this.$axios({
          url: '/users/login',
          method: "POST",
          data: {
            username: this.name,
            password: this.password
          }
        })
        .then(({data}) => {
          this.$store.dispatch('getToken', data.token)
          this.$router.push({path: '/main'})
        })
        .catch(({response}) => {
          console.log(response);
          this.errText = "Wrong username or Password"
          this.error = true
        })
      },
      reset () {
        this.password= ""
        this.name= ""
      },
    },
  }
</script>
<style scoped>

</style>