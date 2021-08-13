import Apps from "@/views/Apps/Apps.vue";

import { bread } from "./model";

const initial: bread[] = [
  { label: "Home", name: "Home" },
  { label: "Apps", name: "AppsRoute" },
];

export const APPS = {
  name: "AppsRoute",
  path: "/apps",
  component: Apps,
  meta: {
    breadcrumb: {
      initialState: initial,
    },
  },
};
