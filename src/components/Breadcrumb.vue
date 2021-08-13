<template>
  <div class="breadcrum-wrapper">
    <div>
      <!-- Using finders - approach 1 -->
      <v-breadcrumbs :items="breadcrumb" divider=">">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item @click="goTo(item)" style="cursor: pointer">
            {{ item.label }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
      <v-spacer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { finder } from "@/router/model";
import { RawLocation } from "vue-router";

export default Vue.extend({
  computed: {
    //  Using finders - approach 1
    breadcrumb() {
      const breadcrumbFromRoute = this.$route.meta?.breadcrumb;
      if (!breadcrumbFromRoute) return;

      const { finders, initialState } = breadcrumbFromRoute;

      const bread = finders?.length
        ? (finders.map((finder: finder) => {
            //finders array added at router config

            const { query } = this.$route;
            const getLastLabel = finder.query[finder.query.length - 1];
            return {
              name: finder.name, //(e.g. PetType)
              label: query[getLastLabel],
              ...this.createParamsAndQuery(finder),
            };
          }) as finder[])
        : [];

      bread.unshift(...initialState);

      return bread;
    },
  },
  methods: {
    goTo(item: RawLocation) {
      this.$router.push(item);
    },

    //  Using finders - approach 1
    createParamsAndQuery(finder: finder) {
      const { params, query } = this.$route;

      const arrayParams = finder.params.map((queryString) => {
        //(e.g. 'typeId')
        return { [queryString]: params[queryString] }; //{typeId: '123' | '456'}
      });
      const arrayQuery = finder.query.map((queryString) => {
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
