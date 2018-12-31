<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="name" :rules="nameRules" :counter="10" label="Name" required></v-text-field>
    <v-text-field v-model="price" :rules="priceRules" label="Price" required></v-text-field>
    <v-text-field v-model="imageurl" :rules="imageRules" label="Image URL" required></v-text-field>
    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Add to Inventory"
      required
    ></v-checkbox>
    <v-btn :disabled="!valid" @click="submit">Submit</v-btn>
    <v-btn @click="clear">Clear</v-btn>
  </v-form>
</template>

<script>
import Vue from "vue";
import axios from "axios";

export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    price: "",
    priceRules: [
      v => !!v || "Price is required",
      v => /^[0-9]*$/.test(v) || "Price must be valid"
    ],
    imageurl: "",
    imageRules: [v => !!v || "Image URL is required"],
    checkbox: false
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        axios
          .post("http://localhost:3001/api/product", {
            name: this.name,
            price: this.price,
            imageurl: this.imageurl
          })
          .then(res => console.log(res));
      }
      this.clear();
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style>
</style>