<template>
  <div class="product">
    <v-card height="250px" width="30vw">
      <v-img v-bind:src="info.img" aspect-ratio="2.75"></v-img>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{info.name}}</h3>
          <div>${{info.price}}</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat color="orange">Edit</v-btn>
        <v-btn flat color="orange">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["info"],
  mounted() {
    console.log(this.info);
  },
  data() {
    return {
      card_text: "Product"
    };
  }
};
</script>

<style>
.product {
  margin: 2vw;
  align-self: center;
}
</style>