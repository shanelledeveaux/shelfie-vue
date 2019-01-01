<template>
  <div class="form-container">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="name" :rules="nameRules" :counter="10" label="Name" required></v-text-field>
      <v-text-field v-model="price" :rules="priceRules" label="Price" required></v-text-field>
      <v-text-field v-model="imageurl" :rules="imageRules" label="Image URL" required></v-text-field>
      <div class="container">
        <img class="image-upload" v-if="imageurl.length > 10" v-bind:src="imageurl">
        <img
          class="image-upload"
          v-else
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKZ3Fo6lvvr9t9hi1hs_dG6MnQRmaNh5qO-jdPeWAj8eiGW6mO"
        >
      </div>
      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Add to Inventory"
        required
      ></v-checkbox>
      <div class="container">
        <v-btn :disabled="!valid" @click="submit">Submit</v-btn>
        <v-btn @click="clear">Clear</v-btn>
      </div>
    </v-form>
  </div>
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
.form-container {
  width: 40vw;
  box-shadow: 1px 1px 20px 3px rgba(143, 143, 143, 0.281);
  padding: 2vw;
}
.container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.image-upload {
  width: auto;
  height: 20vh;
  margin: 3vw;
}
</style>