angular.module('starter.controllers', [])

.controller('EntradaCtrl', function(ProductsEndpoints,$scope) {
  $scope.datas = [];

  var handleSuccess = function(data, status) {
        $scope.datas = data;
        console.log($scope.datas);
  };

    ProductsEndpoints.getEntradas().success(handleSuccess);
})

.controller('DetailCtrl',function($scope,$stateParams,ProductsEndpoints){
  $scope.product = [];

  var handleSuccess = function(data, status) {
        $scope.product = data;
        console.log($scope.product);
  };

    ProductsEndpoints.getProduct($stateParams.productId).success(handleSuccess);
})

.controller('PrincipalCtrl', function($scope, ProductsEndpoints) {
  $scope.datas = [];

  var handleSuccess = function(data, status) {
        $scope.datas = data;
        console.log($scope.datas);
  };

    ProductsEndpoints.getPlatos().success(handleSuccess);
})

.controller('PostreCtrl', function($scope, ProductsEndpoints) {
  $scope.datas = [];

  var handleSuccess = function(data, status) {
        $scope.datas = data;
        console.log($scope.datas);
  };

    ProductsEndpoints.getPostres().success(handleSuccess);
})

.controller('BebidaCtrl', function($scope, ProductsEndpoints) {
  $scope.datas = [];

  var handleSuccess = function(data, status) {
        $scope.datas = data;
        console.log($scope.datas);
  };

    ProductsEndpoints.getBebidas().success(handleSuccess);
})


.controller('FacturaCtrl', function($scope) {
});
