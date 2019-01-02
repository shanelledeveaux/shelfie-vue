<template>
  <div class="dashboard">
    <div class="product-holder">
      <Product
        v-for="product in info"
        v-bind:info="product"
        v-bind:key="product.id"
        :getProducts="getProducts"
      ></Product>
    </div>
  </div>
</template>

<script>
import Product from "./Product";

export default {
  name: "Dashboard",
  components: {
    Product
  },
  props: ["info", "getProducts"]
  // mounted() {
  //   console.log(this.info);
  // }
};
</script>

<style>
.product-holder {
  height: 80vh;
  width: 100%;
  align-items: center;
  overflow: scroll;
}
</style>