import EventService from "@/services/index.js";

export const namespaced = true;

export const state = {
  events: [],
  totalEvent: 0,
  event: [],
  perPage: 2
};

export const mutations = {
  ADD_EVENT: (state, event) => {
    state.events.push(event);
  },
  SET_EVENTS: (state, events) => {
    state.events = events;
  },
  SET_TOTAL: (state, count) => {
    state.totalEvent = count;
  },
  SET_EVENT: (state, event) => {
    state.event = event;
  }
};

export const actions = {
  createEvent({ commit }, event) {
    return EventService.postEvent(event).then(() => {
      commit("ADD_EVENT", event);
    });
  },
  getEvents({ commit, dispatch, rootState, state }, { page }) {
    console.log("user event is " + rootState.user.user.name);
    dispatch("user/actionCall", null, { root: true });
    return EventService.getEvents(state.perPage, page)
      .then(response => {
        commit("SET_TOTAL", parseInt(response.headers["x-total-count"]));
        commit("SET_EVENTS", response.data);
      })
      .catch(error => {
        const notification = {
          type: "error",
          message: "error in featched events " + error.message
        };
        dispatch("notification/add", notification, { root: true });
      });
  },
  getEvent({ commit, getters }, id) {
    const event = getters.getEventId(id);

    if (event) {
      commit("SET_EVENT", event);
      return event;
    } else {
      return EventService.getEvent(id).then(response => {
        commit("SET_EVENT", response.data);
        return response.data;
      });
    }
  }
};

export const getters = {
  getEventId: state => id => {
    return state.events.find(event => event.id === id);
  }
};
