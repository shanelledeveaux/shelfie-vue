<template>
  <div id="app">
    <Header/>
    <div class="body">
      <Form/>
      <Dashboard :info="info"/>
    </div>
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
import Header from "./components/Header";
import axios from "axios";

export default {
  name: "App",
  components: {
    Dashboard,
    Form,
    Header
  },
  info: {},
  data: () => ({
    info: {}
  }),
  mounted() {
    axios
      .get("http://localhost:3001/api/product")
      .then(response => (this.info = response.data));
    console.log(this.info);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}

.body {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  justify-items: center;
}
</style>
