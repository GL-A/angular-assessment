angular.module('app').service('mainService', function($http){
  this.getProducts = function(){
    return $http.get('http://practiceapi.devmounta.in/products').then(function(res){
      console.log(res.data);
      return res.data;
    })





  }
})
