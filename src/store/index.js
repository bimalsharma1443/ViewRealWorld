/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/services/index.js";
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
      "community"
    ],
    events: [],
    totalEvent : 0,
    event: []
  },
  mutations: {
    ADD_EVENT: (state, event) => {
      state.events.push(event);
    },
    SET_EVENTS: (state, events) => {
      state.events = events;
    },
    SET_TOTAL: (state, count) => {
      state.totalEvent = count;
    },
    SET_EVENT: (state,event) => {
      state.event = event;
    }
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event).then(() => {
        commit("ADD_EVENT", event);
      });
    },
    getEvents({ commit },{ perPage, page }) {
      EventService.getEvents(perPage, page)
        .then(response => {
          commit("SET_TOTAL",parseInt(response.headers['x-total-count']));
          commit("SET_EVENTS",response.data);
        })
        .catch(error => {
          console.log("error is here" + error);
        });
    },
    getEvent({ commit, getters }, id) {
      const event = getters.getEventId(id);

      if(event) {
        commit('SET_EVENT',event);
      }else {
        EventService.getEvent(id)
        .then(response => {
          commit('SET_EVENT',response.data);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        });
      }
    }
  },
  modules: {},
  getters: {
    getEventId: state => id => {
      return state.events.find(event => event.id === id);
    }
  }
});
