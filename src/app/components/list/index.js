import angular from "angular";

import ListComponent from "./list.component";

const ListModule = angular.module("app.list", []);

ListModule.component("list", ListComponent);

export default ListModule;
