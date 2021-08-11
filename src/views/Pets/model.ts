import { Route } from "vue-router";
type petItems = {
  label: string;
  image: string;
};

type petRoute = {
  name: string;
  params: Route["params"];
  query: Route["query"];
};
export interface Pet {
  label: string;
  to: petRoute;
  children: petItems[];
}
