<template>
  <h1 @click="toggleHandler">{{ message }}</h1>
  <h1>{{ carrier }}</h1>
  <p>{{ object.id }}</p>
  <p>{{ object.name }}</p>
  <p>{{ object.title }}</p>

  <slot></slot>
  <!-- Slots are used to pass template rather than just data from one component to another component -->
</template>

<script>
export default {
  name: "Firstcomponent",

  // Mentioning what data to be used in the component from prop.
  props: ["carrier", "object"],
  data() {
    return {
      message: "Component from another file",
    };
  },

  // creating a custom event to pass data to the parent component.
  methods: {
    toggleHandler() {
      this.$emit("close");
    },
  },
};
</script>

<!-- scoped option let's us concentrate particular styles to particular component. -->
<style scoped>
h1 {
  color: blueviolet;
}
</style>
