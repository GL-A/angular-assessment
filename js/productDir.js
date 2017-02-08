angular.module('app').directive('productDir', function(){

  return {
    restrict: 'E',
    templateUrl: 'views/product-tmpl.html',
    controller:{
      scope: {
        products: '='
      }
    }

  }
})
