<template>
  <div class="form">
    Form
    <input v-model="name" placeholder="Name">
    <input v-model="price" placeholder="Price">
    <input v-model="imageurl" placeholder="Image URL">
    <button v-on:click="submit">Submit</button>
    <button v-on:click="cancel">Cancel</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Form",
  data() {
    return {
      name: "",
      price: "",
      imageurl: ""
    };
  },
  methods: {
    cancel: function(event) {
      (this.name = ""), (this.price = ""), (this.imageurl = "");
    },
    submit: function(event) {
      axios.post("/api/product", {
        name: this.name,
        price: this.price,
        imageurl: this.imageurl
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>