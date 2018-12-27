<template>
  <div class="dashboard">Dash</div>
  <!-- <Product/> -->
</template>

<script>
import Product from "./Product";

export default {
  name: "Product",
  components: {
    Product
  },
  data() {
    return {
      msg: "Product"
    };
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