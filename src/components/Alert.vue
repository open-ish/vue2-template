<template>
  <v-alert dense type="info">
    <slot />
  </v-alert>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Alert",
});
</script>
