<template>
  <div class="pets-view">
    <div>
      <h2>{{ pets.label }}</h2>
      <div v-for="pet in pets" :key="pet.label">
        <v-btn
          :color="
            currentPet !== {} && currentPet.label === pet.label ? 'primary' : ''
          "
          text
          @click="setCurrent(pet)"
          >{{ pet.label }}</v-btn
        >
      </div>
      <div v-if="currentPet !== {}">
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
import Vue, { PropType } from "vue";
import { Route } from "vue-router";
import { Pet } from "../../model";

export default Vue.extend({
  name: "PetsShow",
  props: {
    pets: { default: [], type: Array as PropType<Pet[]> },
  },
  data: () => ({
    currentPet: {} as Pet,
  }),
  mounted() {
    const { breed } = this.$route.query;

    if (breed && this.pets.length) {
      this.currentPet = this.pets.find((pet) => pet.label === breed) as Pet;
    }
  },
  methods: {
    setCurrent(pet: Pet) {
      this.currentPet = pet;
      this.changeRoute(pet.to as Route);
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
  watch: {
    $route(newValue) {
      const { query } = newValue;
      !query.breed && (this.currentPet = {} as Pet);
    },
  },
});
</script>
