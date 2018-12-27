<template>
  <div id="app">
    <Header/>
    <Dashboard/>
    <Form/>
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Dashboard,
    Form,
    Header
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
