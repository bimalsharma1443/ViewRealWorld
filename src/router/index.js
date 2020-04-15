import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import EventCreate from "../views/EventCreate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList
  },
  {
    path: "/event",
    name: "EventShow",
    component: EventShow
  },
  {
    path: "/event/create",
    name: "EventCreate",
    component: EventCreate
  }
];

const router = new VueRouter({
  routes
});

export default router;
