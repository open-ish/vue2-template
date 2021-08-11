<template>
  <header class="header">
    <div>
      <!-- Using finder -->
      <v-breadcrumbs :items="breadcrumb" divider="-">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item @click="goTo(item)">
            {{ item.label }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
      <v-spacer />

      <!-- Using state at breadcrumb -->
      <v-breadcrumbs :items="breadcrumb2" divider="-">
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
import { finder } from "@/router/model";
import { RawLocation } from "vue-router";

export default Vue.extend({
  computed: {
    breadcrumb2() {
      if (!this.$route.meta?.breadcrumb2) return;

      return this.$route.meta?.breadcrumb2?.state;
    },
    breadcrumb() {
      if (!this.$route.meta?.breadcrumb) return;
      const bread = [...this.$route.meta?.breadcrumb?.initialState];
      this.$route.meta?.breadcrumb?.finder.forEach((element: finder) => {
        const { query } = this.$route;
        bread.push({
          query: this.createQuery(element),
          params: this.createParams(element),
          name: element.name,
          label: query[element.query[element.query.length - 1]],
        });
      });
      return bread;
    },
  },
  methods: {
    goTo(item: RawLocation) {
      this.$router.push(item);
    },
    createQuery(element: finder) {
      const { query } = this.$route;

      const arrayQuey = element.query.map((queryString) => {
        return { [queryString]: query[queryString] };
      });

      return Object.assign({}, ...arrayQuey);
    },
    createParams(element: finder) {
      const { params } = this.$route;

      const arrayParams = element.params.map((queryString) => {
        return { [queryString]: params[queryString] };
      });
      return Object.assign({}, ...arrayParams);
    },
  },
});
</script>
