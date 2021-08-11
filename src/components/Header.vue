<template>
  <header class="header">
    <div>
      <v-breadcrumbs :items="breadcrumb" divider="-">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item @click="goTo(item)">
            {{ item.label }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    load: false,
  }),
  computed: {
    breadcrumb() {
      return this.$route.meta?.breadcrumb?.state;
    },
  },
  mounted() {
    this.load = true;
  },
  methods: {
    goTo(item: any) {
      this.$router.push(item);
    },
  },
});
</script>
