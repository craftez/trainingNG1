import angular from "angular";
import uiRouter from "angular-ui-router";

import { appConfig } from "./app.config";
import AppComponent from "./app.component";
import ListModule from "./list";

// setter necesita name, dependencies
const AppModule = angular.module("app", [uiRouter, ListModule.name]);

AppModule.config(function($stateProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$stateProvider.state({
		name: "list",
		url: "/list",
		component: "list"
	});
});
AppModule.component("app", AppComponent);
