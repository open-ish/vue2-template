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
    items: [
      //  Using finder - approach 1

      {
        id: 2,
        label: "Pets - approach 1",
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

      // Using state at breadcrumb - approach 2

      {
        id: 3,
        label: "Pets2 - approach 2",
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
    isShowHeader: false, //  Needed only to state at breadcrumb - approach 2
  }),
  methods: {
    goTo(item: any) {
      this.$router.replace({ ...item.to });
    },
  },
  mounted() {
    this.isShowHeader = true; //  Needed only to state at breadcrumb - approach 2
  },
  beforeRouteUpdate() {
    // Needed only to state at breadcrumb - approach 2
    this.isShowHeader = false;
    this.isShowHeader = true;
  },
});
</script>
