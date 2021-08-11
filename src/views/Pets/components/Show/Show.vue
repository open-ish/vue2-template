<template>
  <div class="pets-view">
    <div>
      <h2>{{ pets.label }}</h2>
      <div v-for="pet in pets" :key="pet.label">
        <v-btn
          :color="currentPet.label === pet.label ? 'primary' : ''"
          text
          @click="setCurrent(pet)"
          >{{ pet.label }}</v-btn
        >
      </div>
      <div>
        <v-card
          class="mx-auto my-12"
          max-width="374"
          v-for="current in currentPet.children"
          :key="current.label"
        >
          <v-img height="250" :src="current.image"></v-img>
          <v-card-text>
            {{ current.label }}
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Route } from "vue-router";

export default Vue.extend({
  name: "PetsShow",
  props: {
    pets: { default: [] },
  },
  data: () => ({
    currentPet: "",
  }),
  created() {
    const { breed } = this.$route.query;

    if (breed && this.pets.length) {
      this.currentPet = this.pets.find((pet: any) => (pet.label = breed));
    }
  },
  methods: {
    setCurrent(pet) {
      this.currentPet = pet;
      this.changeRoute(pet.to);
    },
    changeRoute(route: Route) {
      const query = Object.assign(this.$route.query, route.query);
      const params = Object.assign(this.$route.params, route.params);

      this.$router.replace({
        name: route.name as string | undefined,
        query,
        params,
      });
    },
  },
  // watch: {
  //   $route(newValue) {
  //     const { query } = newValue;
  //     !query.breed && (this.currentPet = null);
  //   },
  // },
});
</script>
