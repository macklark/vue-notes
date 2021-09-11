<template>
  <div class="container">
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "Hello, world!!",
    };
  },
};
</script>

<style>
.container {
  text-align: center;
}
</style>
