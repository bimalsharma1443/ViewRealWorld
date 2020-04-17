<template>
  <div>
    <form @submit.prevent="formSubmit">
      <BaseSelect
        label="Select a category"
        v-model="event.category"
        :options="categories"
        class="field"
      />
      <h3>Name & describe your event</h3>
      <div class="field">
        <BaseInput
          label="Title"
          v-model="event.title"
          type="text"
          placeholder="Add an event title"
          class="field"
        />
      </div>
      <div class="field">
        <BaseInput
          label="Description"
          v-model="event.description"
          type="text"
          placeholder="Add a description"
          class="field"
        />
      </div>
      <h3>Where is your event?</h3>
      <div class="field">
        <BaseInput
          label="Location"
          v-model="event.location"
          type="text"
          placeholder="Add a location"
          class="field"
        />
      </div>
      <h3>When is your event?</h3>
      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date" />
      </div>
      <div class="field">
        <BaseSelect
          label="Select a time"
          v-model="event.time"
          :options="times"
          class="field"
        />
      </div>
      <BaseButton type="submit" buttonClass="-fill-gradient"
        >Submit
      </BaseButton>
      <!-- <input type="submit" class="button -fill-gradient" value="Submit" /> -->
    </form>
  </div>
</template>

<script>
import datepicker from "vuejs-datepicker";
import Nprogress from "nprogress";

export default {
  components: {
    datepicker
  },
  data() {
    var times = [];
    for (let i = 1; i <= 24; i++) {
      times.push(i + ":00");
    }
    return {
      times,
      event: this.createFreshEvent(),
      categories: this.$store.state.categories
    };
  },
  methods: {
    createFreshEvent() {
      const user = this.$store.state.user.user;
      const id = Math.floor(Math.random() * 1000000);
      return {
        id: id,
        category: "",
        organizer: user,
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
        attendees: []
      };
    },
    formSubmit() {
      Nprogress.start();
      this.$store
        .dispatch("event/createEvent", this.event)
        .then(() => {
          this.$router.push({
            name: "EventShow",
            params: { id: this.event.id }
          });
          this.event = this.createFreshEvent();
        })
        .catch(() => {
          Nprogress.done();
        });
    }
  }
};
</script>
