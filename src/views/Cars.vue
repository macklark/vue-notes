<template>
  <h1>Cars</h1>
  <div v-for="car in cars" :key="car.id">
    <div class="car">
      <h2>{{ car.make }}</h2>
      <router-link :to="{ name: 'Details', params: { model: car.model } }">
        <p>{{ car.model }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cars",
  data() {
    return {
      cars: [
        { id: 0, make: "Toyota", model: "Camry" },
        { id: 1, make: "Ford", model: "Fusion" },
        { id: 2, make: "Honda", model: "Accord" },
        { id: 3, make: "Honda", model: "Civic" },
        { id: 4, make: "Honda", model: "CR-V" },
        { id: 5, make: "Honda", model: "Insight" },
      ],
    };
  },
};
</script>

<style scoped>
.car {
  margin-top: 50px;
}
</style>
