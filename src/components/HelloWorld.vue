<template>
  <v-container>
    <h1>HelloWorld Component</h1>
    <br />

    <div v-once>
      Using data smartly 🎉:<strong> {{ userName }} </strong>
    </div>
    <br />
    <div v-once>
      Using data unsmartly: <strong> {{ unsmartUserName }} </strong>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",
  computed: {
    userName() {
      return this.$store.getters.userName;
    },
    unsmartUserName() {
      return this.$store.getters.unsmartUserName;
    },
  },
  created() {
    console.debug(
      "Data is also here! - HelloWorld component - 😱!",
      this.userName
    );
    console.log(
      "Data is not here! - HelloWorld component",
      this.unsmartUserName
    );
  },
});
</script>
