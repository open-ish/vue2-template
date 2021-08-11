<template>
  <div class="pets-view">
    <h1>This is a Pets page</h1>
    <Show :pets="pets" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Route } from "vue-router";

import Show from "./components/Show/Show.vue";
import { fakePets } from "./database2";
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
    this.updateBread(this.$route);
    this.changeContext(this.$route);
  },
  methods: {
    changeContext(route: Route) {
      const { query } = route;
      this.pets = query.typeId === "Dogs" ? fakePets.dogs : fakePets.cats;
    },
    updateBread(route: Route) {
      const newBreadcrumb = [];
      const { query, params } = route;

      newBreadcrumb.push({
        query: { typeId: query.typeId },
        params: { typeId: params.typeId },
        name: "PetType2",
        label: query.typeId,
      });
      if ("breed" in params) {
        newBreadcrumb.push({
          query: { breed: query.breed },
          params: { breed: params.breed },
          name: "PetBreed2",
          label: query.breed,
        });
      }
      this.$route?.meta?.breadcrumb2 &&
        (this.$route.meta.breadcrumb2.setState = newBreadcrumb);
    },
  },
  watch: {
    $route(newValue) {
      this.updateBread(newValue);
      this.changeContext(this.$route);
    },
  },
});
</script>
