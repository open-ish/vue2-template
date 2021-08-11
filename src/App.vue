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
      <Header v-if="isShowHeader" />
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
    isShowHeader: false,

    items: [
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
              name: "PetType",
              params: { typeId: 456 },
              query: {
                typeId: "Cats",
              },
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
    this.isShowHeader = true;
  },
  beforeRouteUpdate() {
    this.isShowHeader = false;
    this.isShowHeader = true;
  },
});
</script>
