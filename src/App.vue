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
      <Breadcrumb />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Breadcrumb from "./components/Breadcrumb.vue";

export default Vue.extend({
  name: "App",
  components: {
    Breadcrumb,
  },
  data: () => ({
    items: [
      {
        id: 1,
        label: "About",
        to: {
          name: "AboutRoute",
        },
      },
      //  Using finders - approach 1
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
    ],
  }),
  methods: {
    goTo(item: any) {
      this.$router.replace({ ...item.to });
    },
  },
});
</script>
