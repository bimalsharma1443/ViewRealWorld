import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {id:'1',name:'Bimal Sharma'},
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community']
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {

  }
});
