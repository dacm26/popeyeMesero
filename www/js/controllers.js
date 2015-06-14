angular.module('starter.controllers', [])

.controller('EntradaCtrl', function(ProductsEndpoints,$scope,BillId,TableId) {
  if (BillId.getBill() === 0) {
    var billSuccess = function(data, status) {
        BillId.setBill(data.id);
    };
    ProductsEndpoints.createBill(TableId.getTable()).success(billSuccess);
  }
  $scope.datas = [];

  var handleSuccess = function(data, status) {
        $scope.datas = data;
        console.log($scope.datas);
  };
  console.log("BillId:\n",BillId.getBill());
  console.log("TableId:\n",TableId.getTable());
  ProductsEndpoints.getEntradas().success(handleSuccess);
})

.controller('DetailCtrl',function($scope,$stateParams,ProductsEndpoints,BillId,TableId,$ionicPopup, $timeout){
  $scope.product = [];
  console.log("BillId:\n",BillId.getBill());
  console.log("TableId:\n",TableId.getTable());
  var handleSuccess = function(data, status) {
        $scope.product = data;
        console.log($scope.product);
  };
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

.controller('PrincipalCtrl', function($scope, ProductsEndpoints,BillId,TableId) {
  $scope.datas = [];
  console.log("BillId:\n",BillId.getBill());
  console.log("TableId:\n",TableId.getTable());
  var handleSuccess = function(data, status) {
        $scope.datas = data;
        console.log($scope.datas);
  };
  ProductsEndpoints.getPlatos().success(handleSuccess);
})

.controller('PostreCtrl', function($scope, ProductsEndpoints,BillId,TableId) {
  $scope.datas = [];
  console.log("BillId:\n",BillId.getBill());
  console.log("TableId:\n",TableId.getTable());
  var handleSuccess = function(data, status) {
        $scope.datas = data;
        console.log($scope.datas);
  };
  ProductsEndpoints.getPostres().success(handleSuccess);
})

.controller('BebidaCtrl', function($scope, ProductsEndpoints,BillId,TableId) {
  $scope.datas = [];
  console.log("BillId:\n",BillId.getBill());
  console.log("TableId:\n",TableId.getTable());
  var handleSuccess = function(data, status) {
        $scope.datas = data;
        console.log($scope.datas);
  };
  ProductsEndpoints.getBebidas().success(handleSuccess);
})


.controller('FacturaCtrl', function($scope,BillId,ProductsEndpoints,TableId) {
  $scope.datas = [];
  console.log("BillId:\n",BillId.getBill());
  console.log("TableId:\n",TableId.getTable());
  var handleSuccess = function(data, status) {
        $scope.datas = data;
        console.log($scope.datas);
  };
  var handleError = function(data, status){
      console.log("Error\n");
      console.log(data);
      console.log(status);
  };
  ProductsEndpoints.getBills(BillId.getBill()).success(handleSuccess).error(handleError);
})

.controller('FacturaDetailCtrl', function($scope,$stateParams,BillId,ProductsEndpoints,TableId) {
  console.log("BillId:\n",BillId.getBill());
  console.log("TableId:\n",TableId.getTable());
  $scope.bill = [];
  var handleSuccess = function(data, status) {
        $scope.bill = data;
        console.log($scope.bill);
  };
  var params={
    bill_id: BillId.getBill(),
    client_id: $stateParams.clientId
  };
  ProductsEndpoints.getClientBill(params).success(handleSuccess);
})

.controller('TableCtrl', function($scope,$stateParams,ProductsEndpoints,TableId,BillId) {
  console.log("BillId:\n",BillId.getBill());
  console.log("TableId:\n",TableId.getTable());
    $scope.datas=[];
    var handleSuccess = function(data, status) {
        $scope.datas = data;
    };
    ProductsEndpoints.getTables().success(handleSuccess);
})

.controller('SetTableCtrl', function($scope,$stateParams,$state,TableId,BillId) {
  console.log("BillId:\n",BillId.getBill());
  console.log("TableId:\n",TableId.getTable());
  var id = parseInt($stateParams.tableId);
  TableId.setTable(id);
  $state.go('tab.entradas');  
})

.controller('PayTableCtrl', function($scope,$stateParams,$state,TableId,BillId,ProductsEndpoints) {
  console.log("asbvdsabvdsabbdasdbasdbsajdbajsabdsadda\n");
  var handleSuccess = function(data, status) {
        console.log("Pagando Factura:\n");
        console.log("BillId:\n",BillId.getBill());
        console.log("TableId:\n",TableId.getTable());
        $state.go('table');
  };
    ProductsEndpoints.payTable(TableId.getTable(),BillId.getBill()).success(handleSuccess);
})

;