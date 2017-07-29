var app = angular.module('petModule', ['ngRoute']);


app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', 
	{

		templateURL: 'cat.html'
	})
	.when('/view2',
	{
		controller: 'controlDog',
		templateURL: 'dog.html'
	}
	.otherwise(template: '<h1>No Pets Here</h1>');
	$locationProvider.hashPrefix('');
})

app.controller('controlDog', function($scope){
	
})

