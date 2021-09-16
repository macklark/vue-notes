<template>
  <form
    class="container mx-auto mt-20 bg-gray-200 md:w-1/4 w-11/12"
    @submit.prevent="goHandler"
  >
    <div class="px-10 py-5">
      <label>Email</label>
      <!-- v-model is a directive which is used for two way data binding -->
      <input
        type="email"
        required
        class="block border-2 border-black w-full"
        v-model="email"
      />
    </div>

    <div class="px-10 py-5">
      <label>Password</label>
      <input
        type="passowrd"
        required
        class="block border-2 border-black w-full"
        v-model="password"
      />
    </div>

    <div class="px-10 py-5">
      <label>Role</label>
      <select class="block border-2 border-black w-full" v-model="role">
        <option value="webDeveloper">Web Developer</option>
        <option value="webDesigner">Web Designer</option>
      </select>
    </div>

    <div class="flex px-10 py-5 items-center">
      <input type="checkbox" required class="mr-3" v-model="conditions" />
      <label>Agree, to terms and conditions</label>
    </div>
    <button class="bg-red-500 p-5">Go</button>
    <p>{{ email }}</p>
    <p>{{ password }}</p>
    <!-- <p>{{ role }}</p>
    <p>{{ conditions }}</p> -->
  </form>
</template>

<script>
export default {
  name: "SignupForm",
  data() {
    return {
      email: "",
      password: "",
      role: "webDeveloper",
      conditions: false,
    };
  },
  methods: {
    goHandler() {
      console.log(this.email, this.password);
    },
  },
};
</script>
