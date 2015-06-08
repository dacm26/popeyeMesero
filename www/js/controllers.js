angular.module('starter.controllers', [])

.controller('EntradaCtrl', function($scope,$http) {
   $http.get("https://apimesero.herokuapp.com/producto/entrada").success(function(data, status, headers, config) {
   		$scope.datas= data;
    	console.log(data);
    // For JSON responses, resp.data contains the result
   }).error(function(data, status, headers, config) {
    	console.error('ERR\n', data);
    	$scope.data= undefined;
    	// err.status will contain the status code
  })
})

.controller('PrincipalCtrl', function($scope,$http) {
  $http.get("https://apimesero.herokuapp.com/producto/plato").success(function(data, status, headers, config) {
   		$scope.datas= data;
    	console.log(data);
    // For JSON responses, resp.data contains the result
   }).error(function(data, status, headers, config) {
    	console.error('ERR\n', data);
    	$scope.data= undefined;
    	// err.status will contain the status code
  })
})

.controller('PostreCtrl', function($scope,$http) {
  $http.get("https://apimesero.herokuapp.com/producto/postre").success(function(data, status, headers, config) {
   		$scope.datas= data;
    	console.log(data);
    // For JSON responses, resp.data contains the result
   }).error(function(data, status, headers, config) {
    	console.error('ERR\n', data);
    	$scope.data= undefined;
    	// err.status will contain the status code
  })
})

.controller('BebidaCtrl', function($scope,$http) {
  $http.get("https://apimesero.herokuapp.com/producto/bebida").success(function(data, status, headers, config) {
   		$scope.datas= data;
    	console.log(data);
    // For JSON responses, resp.data contains the result
   }).error(function(data, status, headers, config) {
    	console.error('ERR\n', data);
    	$scope.data= undefined;
    	// err.status will contain the status code
  })
})


.controller('FacturaCtrl', function($scope) {
});
