angular.module('app').controller('mainCtrl', function($scope, mainService){
  mainService.getProducts().then(function(res){
    $scope.products = res;
  })
})
