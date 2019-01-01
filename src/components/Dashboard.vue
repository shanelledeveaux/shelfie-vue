<template>
  <div class="dashboard">
    <Product v-for="product in info" v-bind:info="product" v-bind:key="product.id"></Product>
  </div>
</template>

<script>
import Product from "./Product";

export default {
  name: "Dashboard",
  components: {
    Product
  },
  props: ["info"]
  // mounted() {
  //   console.log(this.info);
  // }
};
</script>

<style>
</style>