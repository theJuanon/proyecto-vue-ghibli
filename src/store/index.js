import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    movie: {},
    loading: false
  },
  mutations: {
    SET_MOVIES(state, data){
      state.movies = data;
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_MOVIE(state, data) {
      state.movie = data;
    }
  },
  actions: {
    getMovies({commit}) {
      commit('SET_LOADING', true);
      axios.get('https://ghibliapi.herokuapp.com/films')
      .then(response => {
        commit('SET_MOVIES', response.data);
      })
      .catch(error => console.log(error))
      .finally(() => commit('SET_LOADING', false));
    },
    getMovie({commit}, id) {
      axios.get(`https://ghibliapi.herokuapp.com/films/${id}`)
      .then(response => commit('SET_MOVIE', response.data))
      .catch(error => console.log(error))
    }
  },
  modules: {
  }
})
