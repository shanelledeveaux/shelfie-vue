<template>
  <div class="dashboard">Dash
    <Product/>
  </div>
</template>

<script>
import Product from "./Product";

export default {
  name: "Dashboard",
  components: {
    Product
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