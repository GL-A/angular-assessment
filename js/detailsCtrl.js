angular.module('app').controller('detailsCtrl', function($scope, service, $stateParams){

  service.getOne($stateParams.id).then(function(res){
    $scope.one = res;
    console.log($scope.one);
  })

})
