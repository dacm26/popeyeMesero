angular.module('starter.controllers', [])

.controller('EntradaCtrl', function(ProductsEndpoints,$scope,BillId) {
  if (BillId.getBill() === 0) {
    var billSuccess = function(data, status) {
        BillId.setBill(data.id);
    };
    ProductsEndpoints.createBill().success(billSuccess);
  }
  console.log("BillId:\n");
  console.log(BillId.getBill());
  $scope.datas = [];

  var handleSuccess = function(data, status) {
        $scope.datas = data;
        console.log($scope.datas);
  };

  ProductsEndpoints.getEntradas().success(handleSuccess);
})

.controller('DetailCtrl',function($scope,$stateParams,ProductsEndpoints,BillId,$ionicPopup, $timeout){
  $scope.product = [];

  var handleSuccess = function(data, status) {
        $scope.product = data;
        console.log($scope.product);
  };
  console.log("BillId:\n");
  console.log(BillId.getBill());
  ProductsEndpoints.getProduct($stateParams.productId).success(handleSuccess);
  // Triggered on a button click, or some other target
  $scope.showPopup = function() {
  $scope.data = {}

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="text" ng-model="data.names">',
    title: 'Ingrese los nombres de los clientes separados por coma: ',
    subTitle: 'Ej: Daniel, Samuel, Ricardo, Joel',
    scope: $scope,
    buttons: [
      { text: 'Cancelar' },
      {
        text: '<b>Confirmar</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.names) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.data.names;
          }
        }
      }
    ]
  });
  myPopup.then(function(res) {
    if (res !== undefined) {
      var request ={};
      request.clientes = res.split(",");
      request.Product_id = $scope.product.id;
      request.bill_id = BillId.getBill();
      console.log(request);
      var successFunction = function(data,status){
        console.log("Buy Product\n");
        console.log(data);
      };
      var errorFunction = function(data,status){
        console.log("Error\n");
        console.log(data);
      };
      ProductsEndpoints.buyProduct(request).success(successFunction).error(errorFunction);
    }
  
  });
  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 60000);
 };
})

.controller('PrincipalCtrl', function($scope, ProductsEndpoints,BillId) {
  $scope.datas = [];

  var handleSuccess = function(data, status) {
        $scope.datas = data;
        console.log($scope.datas);
  };
  console.log("BillId:\n");
  console.log(BillId.getBill());
  ProductsEndpoints.getPlatos().success(handleSuccess);
})

.controller('PostreCtrl', function($scope, ProductsEndpoints,BillId) {
  $scope.datas = [];

  var handleSuccess = function(data, status) {
        $scope.datas = data;
        console.log($scope.datas);
  };
  console.log("BillId:\n");
  console.log(BillId.getBill());
  ProductsEndpoints.getPostres().success(handleSuccess);
})

.controller('BebidaCtrl', function($scope, ProductsEndpoints,BillId) {
  $scope.datas = [];

  var handleSuccess = function(data, status) {
        $scope.datas = data;
        console.log($scope.datas);
  };
  console.log("BillId:\n");
  console.log(BillId.getBill());
  ProductsEndpoints.getBebidas().success(handleSuccess);
})


.controller('FacturaCtrl', function($scope,BillId) {
  console.log("BillId:\n");
  console.log(BillId.getBill());
});