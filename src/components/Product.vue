<template>
  <div class="product">
    <!-- editing version of card. -->
    <v-card class="edit-form" height="250px" width="30vw" v-if="editing">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :rules="nameRules" :counter="10" label="Name" required></v-text-field>
        <v-text-field v-model="price" :rules="priceRules" label="Price" required></v-text-field>
        <v-text-field v-model="imageurl" :rules="imageRules" label="Image URL" required></v-text-field>
      </v-form>
      <v-card-actions>
        <v-btn @click="submit" :disabled="!valid" flat color="orange">Submit</v-btn>
        <v-btn @click="toggle" flat color="orange">Cancel</v-btn>
      </v-card-actions>
    </v-card>
    <!-- normal version -->
    <v-card height="250px" width="30vw" v-else>
      <v-img v-bind:src="info.img" aspect-ratio="2.75"></v-img>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{info.name}}</h3>
          <div>${{info.price}}</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn @click="toggle" flat color="orange">Edit</v-btn>
        <v-btn flat color="orange">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Product",
  props: ["info", "getProducts"],
  data: () => ({
    editing: false,
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
    imageRules: [v => !!v || "Image URL is required"]
  }),
  methods: {
    toggle() {
      this.editing = !this.editing;
    },
    submit() {
      if (this.$refs.form.validate()) {
        axios
          .put(`http://localhost:3001/api/product/${this.info.id}`, {
            name: this.name,
            price: this.price,
            imageurl: this.imageurl
          })
          .then(this.getProducts(), (this.editing = false));
      }
    }
  }
};
</script>

<style>
.product {
  margin: 2vw;
  align-self: center;
}

.edit-form {
  padding-left: 10px;
  padding-right: 10px;
}
</style>