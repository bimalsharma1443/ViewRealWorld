<template>
  <div>
    <label :for="label" v-if="label"> {{ label }}</label>
    <select :value="value" @change="updateValue" v-bind="$attrs">
      <option
        :selected="option === value"
        v-for="option in options"
        :key="option"
        >{{ option }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    label: String,
    value: [String, Number],
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>
