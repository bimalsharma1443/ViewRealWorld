<template>
  <div class="notification-bar">
    <p>{{ notification.message }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      timeout: null
    };
  },
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.timeout = setTimeout(() => this.delete(this.notification), 5000);
  },
  methods: mapActions("notification", ["delete"])
};
</script>

<style>
.notification-bar {
  margin: 1em 0 1em;
}
</style>
