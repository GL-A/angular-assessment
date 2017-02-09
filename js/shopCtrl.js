angular.module('app').controller('shopCtrl', function($scope, service){
  service.getProducts().then(function(res){
    $scope.products = res;
  })
})
