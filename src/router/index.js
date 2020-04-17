import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import EventCreate from "../views/EventCreate.vue";
import Nprogress from "nprogress";
import Store from "@/store/";
import NotFound from "../views/NotFound.vue";
import NetwokIssue from "../views/NetwokIssue.vue";

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
      Store.dispatch("event/getEvent", routeTo.params.id)
        .then(event => {
          routeTo.params.event = event; // set the event we recieved and set props
          next();
        })
        .catch(error => {
          if (error.response && error.response.status === 404) {
            next({ name: "404" });
          } else {
            next({ name: "networkissue" });
          }
        });
    }
  },
  {
    path: "/event/create",
    name: "EventCreate",
    component: EventCreate
  },
  {
    path: "/404",
    name: "404",
    component: NotFound
  },
  {
    path: "/network-issue",
    name: "networkissue",
    component: NetwokIssue
  },
  {
    path: "*",
    redirect: { name: "404" }
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
  next;
});

export default router;
