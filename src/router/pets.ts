import Pets from "../views/Pets/Pets.vue";

type bread = {
  name: string;
  path: string;
};

const initial: bread[] = [
  { name: "Home", path: "/" },
  { name: "Pets", path: "/pets" },
];

export const PETS = {
  name: "PetType",
  path: "/pets/:type",
  component: Pets,
  meta: {
    breadcrumb: {
      isDynamic: true,
      state: initial,
      set setState(customBread: bread[]) {
        console.log("customBread", customBread);
        this.state = [...initial, ...customBread];
      },
    },
  },
  children: [
    {
      name: "PetBreed",
      path: "/:breed",
      component: Pets,
      meta: {
        breadcrumb: {
          isDynamic: true,
          state: initial,
          set setState(customBread: bread[]) {
            console.log("customBread", customBread);
            this.state = [...initial, ...customBread];
          },
        },
      },
      props: true,
    },
  ],
  props: true,
};

// export const PETS = {
//   name: "Pets",
//   path: "/pets",
//   component: Pets,
//   meta: {
//     // breadcrumb: {
//     //   isDynamic: true,
//     //   state: initial,
//     //   set setState(customBread: bread[]) {
//     //     console.log("customBread", customBread);
//     //     this.state = [...initial, ...customBread];
//     //   },
//     // },
//   },
//   children: [
//     {
//       name: "PetType",
//       path: "/:type",
//       component: Pets,
//       meta: {
//         breadcrumb: {
//           isDynamic: true,
//           state: initial,
//           set setState(customBread: bread[]) {
//             console.log("customBread", customBread);
//             this.state = [...initial, ...customBread];
//           },
//         },
//       },
//       props: true,
//     },
//     // {
//     //   name: "PetBreed",
//     //   path: "/:breed",
//     //   component: Pets,
//     //   meta: {
//     //     breadcrumb: {
//     //       isDynamic: true,
//     //       state: initial,
//     //       set setState(customBread: bread[]) {
//     //         console.log("customBread", customBread);
//     //         this.state = [...initial, ...customBread];
//     //       },
//     //     },
//     //   },
//     //   props: true,
//     // },
//   ],
//   props: true,
// };
