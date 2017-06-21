angular.module('myApp')

.controller('ShoppingListController', ['$scope', 'ShoppingListItems', function($scope, ShoppingListItems){
	var shoplist = $scope;

	shoplist.items = ShoppingListItems.getList();
	
	shoplist.addItem = function(newItem){
		shoplist.items.push({
			name: shoplist.newItem.name,
			qty: shoplist.newItem.qty,
			priority: shoplist.newItem.priority
			})
	};

	shoplist.removeItem = function(item){
		//returns the first index at which a given element can be found in the array, or -1 if it is not present
		var removedItem = shoplist.items.indexOf(item);
		//the splice() method changes the contents of an array by removing existing elements and/or adding new elements
		shoplist.items.splice(removedItem, 1)
	};

	shoplist.removeAll = function(){
		shoplist.items =[];
		ShoppingListItems.removeAll();
	};
}]);