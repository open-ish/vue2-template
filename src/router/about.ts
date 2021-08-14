import About from "@/views/About/About.vue";

import { bread } from "./model";

const initial: bread[] = [
  { label: "Home", name: "Home" },
  { label: "About", name: "AboutRoute" },
];

export const ABOUT = {
  name: "AboutRoute",
  path: "/about",
  component: About,
  meta: {
    breadcrumb: {
      initialState: initial,
    },
  },
};
