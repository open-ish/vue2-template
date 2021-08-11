import Pets from "../views/Pets/Pets.vue";

type bread = {
  name: string;
  label: string;
};

const initialData: bread[] = [{ label: "Início", name: "Home" }];

export const PETS2 = {
  name: "PetType2",
  path: "/pets2/:typeId",
  component: Pets,
  meta: {
    breadcrumb: {
      isDynamic: true,
      state: initialData,
      set setState(customBread: bread[]) {
        console.log("customBread", customBread[0].name);
        this.state = [...initialData, ...customBread];
      },
    },
  },
  children: [
    {
      name: "PetBreed2",
      path: "/pets2/:typeId/breed/:breed",
      component: Pets,
      meta: {
        breadcrumb: {
          isDynamic: true,
          state: initialData,
          set setState(customBread: bread[]) {
            console.log("customBread - PetBreed2", customBread);
            this.state = [...initialData, ...customBread];
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
