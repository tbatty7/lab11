var app = angular.module('myModule', ['ngRoute']);


app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', 
	{
		controller: 'SimpleController',
		templateURL: 'file path to html doc1'
	})
	.when('/view2',
	{
		controller: 'SimpleController',
		templateURL: 'second view - html doc2'
	}
	.otherwise({redirectTo: '/'});
	$locationProvider.hashPrefix('');
})

app.controller('myController', function($scope){
	$scope.toDo = [{item: "mow lawn", completed: true}, {item: "feed cat", completed: false}, 
	{item: "walk dog", completed: false}, {item: "do dishes", completed: false}];

	$scope.addNewItem = function() {
		$scope.toDo.push({item: $scope.newItem, completed: false});
		$scope.newItem = "";
	}

	$scope.removeListItem = function() {
		$scope.toDo.pop();
		}
})

