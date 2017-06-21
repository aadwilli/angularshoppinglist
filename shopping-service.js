angular.module('myApp')

.factory('ShoppingListItems', function(){
	var items = [];
	function getList(){
		return items;
	};
	function removeAll(){
		return items = [];
	}

	return {
		getList: getList,
		removeAll: removeAll
	}
})