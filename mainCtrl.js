angular.module('app').controller("mainCtrl", function($scope, mainService, $stateParams, $http){
  mainService.getProducts().then(function(res){
    $scope.products = res;
  })

  var ID = $stateParams.id;

  $scope.getProduct = function(){
    return $http.get('http://practiceapi.devmounta.in/products/'+ ID).then(function(res){
      console.log(res.data,'this is it');
      $scope.oneProduct = res.data;
    })
  }

  $scope.getProduct();
})
