angular.module('app').controller('detailsCtrl', function($scope, service, $stateParams){


  // var getOne = function() {
  //   $scope.one = service.getOne($stateParams.id);
  //   console.log($scope.one , 'hello')
  // }
  // getOne();

  service.getOne($stateParams.id).then(function(res){
    $scope.one = res;
  })
})
