import Pets from "../views/Pets/Pets.vue";
import { bread, finder } from "./model";

//  Using finder - approach 1
const initial: bread[] = [{ label: "Início", name: "Home" }];

const TYPE_FINDER = {
  name: "PetType",
  query: ["typeId"],
  params: ["typeId"],
};

const BREED_FINDER = {
  name: "PetBreed",
  query: ["typeId", "breed"],
  params: ["typeId", "breed"],
};

export const PETS = {
  name: "PetType",
  path: "/pets/:typeId",
  component: Pets,
  meta: {
    breadcrumb: {
      initialState: initial,
      finder: [TYPE_FINDER] as finder[],
    },
  },
  props: true,
  children: [
    {
      name: "PetBreed",
      path: "/pets/:typeId/breed/:breed",
      component: Pets,
      meta: {
        breadcrumb: {
          initialState: initial,
          finder: [TYPE_FINDER, BREED_FINDER] as finder[],
        },
      },
      props: true,
    },
  ],
};
