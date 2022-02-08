import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characterList: [],
    currentPage: 1,
    maxPages: 0,
  },
  mutations: {
    saveCharacters(state, fetchedData){
      state.characterList = fetchedData
    }
  },
  actions: {
    async fetchCharacters(context){
      const response = await fetch('https://swapi.dev/api/people')
      const data = await response.json()
      context.commit('saveCharacters', data.results)
      console.log(data.results);
    }
    
  },
  modules: {
  }
})
