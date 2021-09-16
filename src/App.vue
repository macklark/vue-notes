<template>
  <h1 class="container" ref="head">CLI basics</h1>
  <!-- ref attribute should be defined for a element to get handle on it -->
  <button class="container" @click="clickHandler">Click me</button>

  <!-- Self closing component without children -->
  <!-- We can pass data from one component to another using props -->
  <!-- Here carrier is a prop which takes the string 'message from parent to child !' and passes it to Firstcomponent -->
  <div v-if="toggleState">
    <!-- <Firstcomponent
      carrier="message from parent to child !"
      :object="{ id: 0, name: 'ralph', title: 'student' }"
      @close="toggleHandler"
    /> -->
    <Firstcomponent
      carrier="message from parent to child !"
      :object="{ id: 0, name: 'ralph', title: 'student' }"
      @close="toggleHandler"
    >
      <p>This is a child component</p>
      <p>This is another child component</p>
    </Firstcomponent>
    <!-- Getting the custom event and passing toggleHandler function -->
  </div>
  <button @click="toggleHandler">Click</button>

  <!-- Teleport is a component provided by vue to transfer template from one component to another or something out of vue instance scope. -->
  <teleport to=".content">
    <h1>I am from vue instance</h1>
    <p>teleporting...</p>
  </teleport>
</template>

<script>
// refs are object method used to get a handle on a DOM element.

// Importing component
import Firstcomponent from "./components/Firstcomponent.vue";
export default {
  name: "App",

  // Need to mention the component to be used in the template inside components object.
  components: {
    Firstcomponent,
  },
  data() {
    return {
      message: "Hello Vite CLI",
      toggleState: false,
    };
  },
  methods: {
    clickHandler() {
      // Then we can use normal javascript functionalities of DOM manipulation.
      // Such as adding className, removing className, changing text, etc.
      console.log(this.$refs.head);
      this.$refs.head.classList.add("active");
    },

    toggleHandler() {
      this.toggleState = !this.toggleState;
    },
  },
};
</script>

<style>
h1 {
  text-align: center;
  color: aqua;
}

.active {
  color: red;
}
</style>
