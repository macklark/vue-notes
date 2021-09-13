<template>
  <div class="container">
    <!-- Text interpolation -->
    <p>{{ title }}</p>

    <!-- events -->
    <button @click="count += 1">Count : {{ count }}</button>
    <!-- Inline javascript function -->

    <button @click="clickHandler">Count : {{ count0 }}</button>
    <!-- methods function trigger onClick -->

    <!-- Conditional rendering -->
    <!-- Completely removes the element from DOM and then injects according to condition -->
    <p v-if="didShow">Now you can see !</p>
    <p v-else>You are missing a secret !</p>

    <!-- Uses CSS properties to hide the element from DOM -->
    <p v-show="didShow">
      v-show demonstration --> Check the element in Inspect console
    </p>

    <!-- Click events to change the state -->
    <button @click="didShow = false" v-if="didShow">Hide</button>
    <button @click="didShow = true" v-else>Show</button>

    <!-- Other mouse events -->
    <!-- To pass a custom arguement we should explicitly mention the event object as $event -->
    <div class="box1" @mouseenter="eventHandler($event, 5)"></div>
    <div class="box2" @mouseleave="eventHandler"></div>
    <div class="box3" @dblclick="eventHandler"></div>
    <div class="box4" @mousemove="eventHandler"></div>

    <!-- List rendering using v-for -->
    <ul>
      <li
        v-for="car in cars"
        :class="{ owner: car.isOwner }"
        @click="ownerToggler(car.id)"
      >
        {{ car.name }} - {{ car.model }}
      </li>
    </ul>

    <ul>
      <li v-for="car in filteredCars" class="filter">
        {{ car.name }} - {{ car.model }}
      </li>
    </ul>

    <!-- Attribute binding -->
    <a :href="link">Google</a>
  </div>
</template>

<script>
// export object
export default {
  name: "App",
  data() {
    return {
      title: "Hello, world!!",
      count: 0,
      count0: 0,
      didShow: false,
      cars: [
        { id: 0, name: "BMW", model: "M4", isOwner: true },
        { id: 1, name: "Audi", model: "Q7", isOwner: false },
        { id: 2, name: "Mercedes", model: "C300", isOwner: true },
      ],
      link: "https://www.google.com",
    };
  },
  methods: {
    clickHandler() {
      this.count0 += 1;
    },

    eventHandler(e, number) {
      // console.log("event fiered ", e);
      // console.log(number);
    },

    ownerToggler(carID) {
      this.cars[carID].isOwner = !this.cars[carID].isOwner;
    },
  },

  // Computed properties
  computed: {
    // Computed properties can be used to create derived data
    filteredCars() {
      return this.cars.filter((car) => car.isOwner);
    },
  },
};
</script>

<style>
.container {
  text-align: center;
}

.box1 {
  padding: 50px;
  background-color: red;
  margin-top: 20px;
}

.box2 {
  padding: 50px;
  background-color: green;
}

.box3 {
  padding: 50px;
  background-color: blue;
}

.box4 {
  padding: 50px;
  background-color: yellow;
}

.owner {
  background-color: blue;
  padding: 20px;
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
}

li {
  cursor: pointer;
  list-style: none;
}
</style>
