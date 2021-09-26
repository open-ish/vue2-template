<template>
  <div>
    <v-card class="mx-auto" max-width="344" outlined>
      <v-card-text>
        <Alert v-if="isFirstAsyncAlertOpened" dense type="info">
          Rendering my first component </Alert
        ><v-card-actions>
          <v-btn outlined rounded text @click="openFirstAsyncAlert()">
            First Button
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Loading from "./loading.vue";
import Erro from "./error.vue";

const Alert = () => ({
  component: import(/* webpackChunkName: "async-lazy-import" */ "./Alert.vue"),
  loading: Loading,
  error: Erro,
  timeout: 5000,
});

export default Vue.extend({
  name: "AsyncLazyImport",
  components: {
    Alert,
  },
  data() {
    return {
      isFirstAsyncAlertOpened: false,
    };
  },
  methods: {
    openFirstAsyncAlert() {
      this.isFirstAsyncAlertOpened = !this.isFirstAsyncAlertOpened;
    },
  },
});
</script>
