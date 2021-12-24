<template>
  <div class="table-container">
    <h1>Vehicle Info</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>MAKE</th>
          <th>MODEL</th>
          <th>YEAR</th>
          <th>COLOR</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="car in carData" :key="car.id">
          <td>{{ car.id }}</td>
          <td>{{ car.make }}</td>
          <td>{{ car.model }}</td>
          <td>{{ car.year }}</td>
          <td>{{ car.color }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {};
  },
  props: {
    carData: Object,
  },
  methods: {
    getAllCars() {},
    
  },
};
</script>

<style>
.table-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

table,
th,
td {
  border: 1px solid black;
}

th {
  background-color: gray;
}
td {
  background-color: lightgoldenrodyellow;
}
</style>
