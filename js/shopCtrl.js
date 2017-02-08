angular.module('app').controller('shopCtrl', function($scope, mainService){
  mainService.getProducts().then(function(res){
    $scope.allProducts = res;
  })
})
