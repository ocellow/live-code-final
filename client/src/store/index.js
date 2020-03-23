import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

let axios = Axios.create({
  baseURL: 'http://localhost:3000'
})


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseURL: 'http://localhost:3000',
    isLogin: localStorage.getItem("token"),
    countries: [],
    reports: []
  },
  mutations: {
    setToken(state, data) {
      console.log(data, "settoken");
      state.isLogin = data
    },
    setCountries(state, data) {
      // console.log(data, " masukkk mutation?");
      state.countries = data
    },
    getReports(state, data) {
      state.reports = data
    }
  },
  actions: {
    allCountries(context) {
      axios({
        url: '/countries',
        method: "GET",
        headers: ({ token: localStorage.getItem('token') })
      })
        .then(({ data }) => {
          context.commit("setCountries", data)
          // console.log(data, '');
        })
    },
    getToken(state, data) {
      console.log(data);
      localStorage.setItem('token', data)
      state.commit('setToken', data)
    }
  },
  allReports(context) {
    axios({
      url: '/reports',
      method: "get",
      headers: ({ token: localStorage.getItem("token") })
    })
      .then(({ data }) => {
        context.commit("getReports", data)
      })
      .catch(({ response }) => {
        console.log(response);

      })
  },
  modules: {
  }
})
