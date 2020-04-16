import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/services/index.js"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "1", name: "Bimal Sharma" },
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food", 
      "community"],
    events:[]
  },
  mutations: {
    ADD_EVENT: (state, event) => {
      state.events.push(event);
    }
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event).then(() => {
        commit("ADD_EVENT", event);
      });
    }
  },
  modules: {},
  getters: {
    catLength: state => {
      return state.categories.length;
    },
    doneTodo: state => {
      return state.todo.filter(todo => todo.done)
    },
    notActiveTodoCount: (state, getters) => {
      return state.todo.length - getters.doneTodo.length;
    },
    getTodoById: state => id => {
      return state.todo.find(todo => todo.id === id)
    } 
  }
});
