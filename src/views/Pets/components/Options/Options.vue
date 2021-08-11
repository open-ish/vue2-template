<template>
  <div class="pets-view">
    <h2>{{ currentPet }}</h2>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { NavigationGuardNext, Route } from "vue-router";

export default Vue.extend({
  name: "PetsShow",
  data: () => ({
    currentPet: "",
  }),
  created() {
    const { query } = this.$route;
    this.setPet(query.t as string);
  },
  beforeRouteUpdate(to: Route, from: Route, next: NavigationGuardNext) {
    const { query, params } = to;
    this.setPet(query.t as string);

    this.$route?.meta?.breadcrumb &&
      (this.$route.meta.breadcrumb.setState = [{ query, params }]);
    next();
  },
  methods: {
    setPet(title: string) {
      this.currentPet = title;
    },
  },
});
</script>
