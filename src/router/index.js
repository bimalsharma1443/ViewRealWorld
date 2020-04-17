import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import EventCreate from "../views/EventCreate.vue";
import Nprogress from "nprogress";
import Store from "@/store/";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
    props: true
  },
  {
    path: "/event/:id",
    name: "EventShow",
    component: EventShow,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      Store.dispatch("event/getEvent", routeTo.params.id).then(event => {
        routeTo.params.event = event; // set the event we recieved and set props
        next();
      });
    }
  },
  {
    path: "/event/create",
    name: "EventCreate",
    component: EventCreate
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((routeTo, routeFrom, next) => {
  Nprogress.start();
  next();
});

router.afterEach((routeTo, routeFrom, next) => {
  Nprogress.done();
  next();
});

export default router;
