angular.module('app').controller('detailsCtrl', function($scope, $stateParams, $http){

  var ID = $stateParams.id;

  console.log(ID);

  $scope.one = function(){
    return $http.get('https://practiceapi.devmounta.in/products/' + ID).then(function(res){
      console.log(res.data, 'hola');
      $scope.product = res.data;
    })
  }

  $scope.one();
})
