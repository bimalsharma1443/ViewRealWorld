<template>
  <div>
    <h1>Event List for {{ user.user.name }}</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />
    <template v-if="page > 1">
      <router-link
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
      >
        Prev Page
      </router-link>
      |
    </template>
    <template v-if="page * 2 < event.totalEvent">
      <router-link
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
      >
        Next Page
      </router-link>
    </template>
  </div>
</template>
<script>
import EventCard from "@/components/EventCard.vue";
import { mapState } from "vuex";
import Store from "@/store/";

function getPageEvent(toRoute, next) {
  const currentPage = parseInt(toRoute.query.page) || 1;
  Store.dispatch("event/getEvents", {
    page: currentPage
  }).then(() => {
    toRoute.params.page = currentPage;
    next();
  });
}

export default {
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    EventCard
  },
  beforeRouteEnter(toRoute, fromRoute, next) {
    getPageEvent(toRoute, next);
  },
  beforeRouteUpdate(toRoute, fromRoute, next) {
    getPageEvent(toRoute, next);
  },
  created() {},
  computed: {
    // page() {
    //   return parseInt(this.$route.query.page) || 1;
    // },
    ...mapState(["event", "user"])
  }
};
</script>
