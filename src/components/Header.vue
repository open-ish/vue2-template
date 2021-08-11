<template>
  <header class="header">
    <div>
      <!-- Using finder - approach 1 -->
      <v-breadcrumbs :items="breadcrumb" divider="-">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item @click="goTo(item)">
            {{ item.label }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
      <v-spacer />

      <!-- Using state at breadcrumb - approach 2 -->
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
    //  Using finder - approach 1
    breadcrumb() {
      if (!this.$route.meta?.breadcrumb) return;

      const bread = [...this.$route.meta?.breadcrumb?.initialState];
      this.$route.meta?.breadcrumb?.finder.forEach((element: finder) => {
        const { query } = this.$route;
        const getLastLabel = element.query[element.query.length - 1];
        bread.push({
          ...this.createParamsAndQuery(element),
          name: element.name,
          label: query[getLastLabel],
        });
      });
      return bread;
    },

    // Using state at breadcrumb - approach 2
    breadcrumb2() {
      if (!this.$route.meta?.breadcrumb2) return;

      return this.$route.meta?.breadcrumb2?.state;
    },
  },
  methods: {
    goTo(item: RawLocation) {
      this.$router.push(item);
    },

    //  Using finder - approach 1
    createParamsAndQuery(element: finder) {
      const { params, query } = this.$route;

      const arrayParams = element.params.map((queryString) => {
        return { [queryString]: params[queryString] };
      });
      const arrayQuery = element.query.map((queryString) => {
        return { [queryString]: query[queryString] };
      });
      return {
        params: Object.assign({}, ...arrayParams),
        query: Object.assign({}, ...arrayQuery),
      };
    },
  },
});
</script>
