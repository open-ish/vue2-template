<template>
  <header class="header">
    <div>
      <!-- Using finder - approach 1 -->
      <v-breadcrumbs :items="breadcrumb" divider=">">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item @click="goTo(item)">
            {{ item.label }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
      <v-spacer />

      <!-- Using state at breadcrumb - approach 2 - It's not working very well yet :/ -->

      <!-- <v-breadcrumbs :items="breadcrumb2" divider="-">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item @click="goTo(item)">
            {{ item.label }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs> -->
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
        //finder array added at router config

        const { query } = this.$route;
        const getLastLabel = element.query[element.query.length - 1];
        bread.push({
          name: element.name, //(e.g. PetType)
          label: query[getLastLabel],
          ...this.createParamsAndQuery(element),
        });
      });
      return bread;
    },

    // Using state at breadcrumb - approach 2 - It's not working very well yet :/

    // breadcrumb2() {
    //   if (!this.$route.meta?.breadcrumb2) return;

    //   return this.$route.meta?.breadcrumb2?.state;
    // },
  },
  methods: {
    goTo(item: RawLocation) {
      this.$router.push(item);
    },

    //  Using finder - approach 1
    createParamsAndQuery(element: finder) {
      const { params, query } = this.$route;

      const arrayParams = element.params.map((queryString) => {
        //(e.g. 'typeId')
        return { [queryString]: params[queryString] }; //{typeId: '123' | '456'}
      });
      const arrayQuery = element.query.map((queryString) => {
        //(e.g. 'typeId')
        return { [queryString]: query[queryString] }; //{typeId: 'Dogs' | 'Cats'}
      });
      return {
        params: Object.assign({}, ...arrayParams), // (e.g. params: {typeId: '123'})
        query: Object.assign({}, ...arrayQuery), // (e.g. query: {typeId: 'Dogs'})
      };
    },
  },
});
</script>
