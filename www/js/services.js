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
        getBills: function(billId){
            return $http.get('https://apimesero.herokuapp.com/bills/'+billId, { 
                type : 'getSource',
                ID    : 'TP001'
            });
        },
        getClientBill: function(data){
            var req = {
                method: 'POST',
                url: 'https://apimesero.herokuapp.com/cliente/bill',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept':'application/json'
                },
                data:{
                   bill_id: data.bill_id,
                   client_id: data.client_id
                }   
                
            };
        
            return $http(req);
        },
        buyProduct: function(data){
            var req = {
                method: 'POST',
                url: 'https://apimesero.herokuapp.com/create/order',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept':'application/json'
                },
                data:{
                   clientes: data.clientes,
                   Product_id: data.Product_id,
                   bill_id: data.bill_id
                }   
                
            };
        
            return $http(req);
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