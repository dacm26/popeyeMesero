angular.module('starter.services', [])


.factory('ProductsEndpoints', function($http){
    return {
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