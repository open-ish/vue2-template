import Pets2 from "../views/Pets/Pets2.vue";
import { bread } from "./model";

const initialData: bread[] = [{ label: "Início", name: "Home" }];

export const PETS2 = {
  name: "PetType2",
  path: "/pets2/:typeId",
  component: Pets2,
  meta: {
    breadcrumb2: {
      state: initialData,
      set setState(customBread: bread[]) {
        this.state = [...initialData, ...customBread];
      },
    },
  },
  children: [
    {
      name: "PetBreed2",
      path: "/pets2/:typeId/breed/:breed",
      component: Pets2,
      meta: {
        breadcrumb2: {
          state: initialData,
          set setState(customBread: bread[]) {
            this.state = [...initialData, ...customBread];
          },
        },
      },
      props: true,
    },
  ],
  props: true,
};
