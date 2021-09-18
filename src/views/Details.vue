<template>
  <h2>Details</h2>
  <h1>{{ model }}</h1>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      model: this.$route.params.model,
    };
  },
};
</script>
