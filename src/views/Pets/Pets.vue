<template>
  <div class="pets-view">
    <h1>This is a Pets page - Using finder - approach 1</h1>
    <Show :pets="pets" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Route } from "vue-router";

import Show from "./components/Show/Show.vue";
import { fakePets } from "./database";
import { Pet } from "./model";

export default Vue.extend({
  name: "Pets",
  components: {
    Show,
  },
  data: () => ({
    pets: [] as Pet[],
  }),
  created() {
    this.changeContext(this.$route);
  },
  methods: {
    changeContext(route: Route) {
      const { query } = route;
      this.pets = query.typeId === "Dogs" ? fakePets.dogs : fakePets.cats;
    },
  },
  watch: {
    $route() {
      this.changeContext(this.$route);
    },
  },
});
</script>
