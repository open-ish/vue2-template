<template>
  <v-app>
    <v-app-bar app color="primary" dark> </v-app-bar>
    <v-navigation-drawer app absolute clipped>
      <v-treeview activatable :items="items">
        <template v-slot:label="{ item }">
          <v-btn text @click="goTo(item)">
            {{ item.label }}
          </v-btn>
        </template>
      </v-treeview>
    </v-navigation-drawer>
    <v-main>
      <Header v-if="load" />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/Header.vue";

export default Vue.extend({
  name: "App",
  components: {
    Header,
  },
  data: () => ({
    load: false,

    items: [
      {
        id: 1,
        label: "Applications :",
        to: { name: "PetType", params: { type: "app" } },
        // children: [
        //   { id: 2, label: "Calendar : app",
        //     to: {
        //       label: 'PetBreed',
        //       params: {  }
        //     }
        //   },
        //   { id: 3, label: "Chrome : app" },
        //   { id: 4, label: "VS : app" },
        // ],
      },
      {
        id: 2,
        label: "Pets",
        to: null,
        children: [
          {
            id: 6,
            label: "Dogs",
            to: {
              name: "PetType",
              params: { type: "dogs" },
            },
          },
          {
            id: 10,
            label: "Cats",
            to: {
              name: "PetType",
              params: { type: "cats" },
            },
          },
        ],
      },
      {
        id: 3,
        label: "Pets2",
        to: null,
        children: [
          {
            id: 6,
            label: "Dogs",
            to: {
              name: "PetType2",
              params: { typeId: 123 },
              query: {
                typeId: "Dogs",
              },
            },
          },
          {
            id: 10,
            label: "Cats",
            to: {
              name: "PetType2",
              params: { typeId: 456 },
              query: {
                typeId: "Cats",
              },
            },
          },
        ],
      },
    ],
  }),
  methods: {
    goTo(item: any) {
      this.$router.replace({ ...item.to });
    },
  },
  mounted() {
    this.load = true;
  },
  beforeRouteUpdate() {
    this.load = false;
    this.load = true;
  },
});
</script>
