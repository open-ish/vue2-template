<template>
  <div class="about">
    <h1>Async/Lazy import</h1>
    <AsyncLazyImport />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import AsyncLazyImport from "../components/AsyncLazyImport.vue";

export default Vue.extend({
  name: "AsyncLazyImportView",

  components: {
    AsyncLazyImport,
  },
});
</script>
