<template>
  <v-app>
    <NavBar />
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "./components/NavBar.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default Vue.extend({
  name: "App",
  components: {
    NavBar,
    HelloWorld,
  },
  computed: {
    userName() {
      return this.$store.getters.userName;
    },
    unsmartUserName() {
      return this.$store.getters.unsmartUserName;
    },
  },
  created() {
    console.debug("Data is already here! - App component - 😱!", this.userName); //blue
    console.log("Data is not here! - App component", this.unsmartUserName); //white
  },
});
</script>
