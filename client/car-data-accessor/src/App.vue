<template>
  <div class="container">
    <Table :carData="carData" />
    <Form v-on:getData="getData" />
  </div>
</template>

<script>
import Table from "./components/Table.vue";
import Form from "./components/Form.vue";

export default {
  name: "App",
  components: {
    Table,
    Form,
  },
  data() {
    return {
      carData: this.getData(),
    };
  },
  methods: {
    async getData() {
      console.log("testing");
      return await fetch("http://localhost:3000/cars/")
        .then((response) => response.json())
        .then((data) => (this.carData = data));
    },
  },

  created() {
    const data = fetch("http://localhost:3000/cars/")
      .then((response) => response.json())
      .then((responseData) => (this.carData = responseData));

    this.carData = data;
    console.log(this.carData);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
