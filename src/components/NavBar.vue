<template>
  <v-app-bar app color="primary" dark>
    <div>Vue Template - NavBar</div>
    <v-spacer></v-spacer>

    <div>
      Unsmart data, but it works here: <strong>{{ unsmartUserName }} </strong>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavBar",
  computed: {
    unsmartUserName() {
      return this.$store.getters.unsmartUserName;
    },
  },
  async created() {
    await this.$store.dispatch("getUserDataUnsmatly");
  },
});
</script>
