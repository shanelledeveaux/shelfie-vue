<template>
  <div class="product">
    <v-layout>
      <v-card>
        <v-img v-bind:src="info.img" aspect-ratio="2.75"></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{info.name}}</h3>
            <div>{{info.price}}</div>
          </div>
        </v-card-title>
      </v-card>
    </v-layout>
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
</style>