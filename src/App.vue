<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div>Vue Template</div>
    </v-app-bar>
    {{ user }}
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  created() {
    console.log(
      "Data is already here! - App component - 😱!",
      this.user.results[0].name
    );
  },
});
</script>
