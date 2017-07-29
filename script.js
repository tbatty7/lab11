var app = angular.module('petModule', ['ngRoute']);


app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', 
	{
		templateUrl: 'main.html'
	})
	.when('/cat', 
	{
		controller: 'catController',
		templateUrl: 'cat.html'
	})
	.when('/dog',
	{
		controller: 'dogController',
		templateUrl: 'dog.html'
	})
	.when('/tiger', 
	{
		controller: 'noController',
		templateUrl: 'tiger.html'
	})
	.when('/pdog',
	{
		controller: 'familyController',
		templateUrl: 'pdog.html'
	})
	.otherwise({template: '<h1>404</h1>'});
	$locationProvider.hashPrefix('');
});

app.controller('catController', function($scope){
	console.log('cat');
});

app.controller('dogController', function($scope){
	console.log('dog');
});

