angular.module('starter.services', [])
/*Se usan services para compartir variables entre controladores. Ddespues se manda de parametro a los controladores*/
.service('BillId', function () {
    var billId =0;

    return {
        getBill: function () {
            return billId;
        },
        setBill: function(value) {
            billId = value;
        }
    };
})

.factory('ProductsEndpoints', function($http){
    return {
        createBill: function(){
            return $http.get('https://apimesero.herokuapp.com/giff/bill', { 
                type : 'getSource',
                ID    : 'TP001'
            });
        },
        buyProduct: function(data){
            return $http.post('https://apimesero.herokuapp.com/create/order',{
                clientes: data.clientes,
                Product_id: data.Product_id,
                bill_id: data.bill_id 
            });
        },
        getEntradas: function() {
            return $http.get('https://apimesero.herokuapp.com/producto/entrada', { 
                type : 'getSource',
                ID    : 'TP001'
            });
        },

        getPlatos: function() {
            return $http.get('https://apimesero.herokuapp.com/producto/plato', { 
                type : 'getSource',
                ID    : 'TP001'
            });
        },

        getPostres: function() {
            return $http.get('https://apimesero.herokuapp.com/producto/postre', { 
                type : 'getSource',
                ID    : 'TP001'
            });
        },

        getBebidas: function() {
            return $http.get('https://apimesero.herokuapp.com/producto/bebida', { 
                type : 'getSource',
                ID    : 'TP001'
            });
        },

        getProduct: function(productId){
            return $http.get('https://apimesero.herokuapp.com/products/'+productId, { 
                type : 'getSource',
                ID    : 'TP001'
            });
        }
    };
});