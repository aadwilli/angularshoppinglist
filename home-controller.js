angular.module('myApp')

//Dependency Injection
//function is a callback
.controller('HomeController',['$scope', 'ShoppingListItems', function($scope, ShoppingListItems){
	var home = $scope;
	home.items = ShoppingListItems.getList();
}]);