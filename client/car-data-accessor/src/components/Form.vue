<template>
  <div class="form-container">
    <h1>Form Component</h1>
    <h3>Enter Your Car's Data</h3>
    <input
      type="text"
      name="make"
      id="make"
      v-model="carMake"
      placeholder="Car Make"
      required
    />
    <input
      type="text"
      name="model"
      id="model"
      v-model="carModel"
      placeholder="Car Model"
      required
    />
    <input
      type="text"
      name="year"
      id="year"
      v-model="carYear"
      placeholder="Car Year"
      required
    />
    <input
      type="text"
      name="color"
      id="color"
      v-model="carColor"
      placeholder="Car Color"
      required
    />
    <button @click="addCar">Submit Car Info</button>
    <button @click="getAllCars">Get All Cars</button>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      carMake: "",
      carModel: "",
      carYear: "",
      carColor: "",
    };
  },
  methods: {
    addCar() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          make: this.carMake,
          model: this.carModel,
          year: this.carYear,
          color: this.carColor,
        }),
      };

      fetch("http://localhost:3000/cars", requestOptions);

      this.$emit("getData");
    },

    getAllCars() {
      this.$emit("getData");
      fetch("http://localhost:3000/cars")
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
  },
};
</script>

<style>
button {
  width: 200px;
}
input {
  display: block;
}
input {
  width: 60%;
  margin: 10px auto;
  padding: 10px;
}

.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
</style>
