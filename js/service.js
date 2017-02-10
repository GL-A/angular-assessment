angular.module('app').service('service', function($http){

  this.getProducts = function(){
    return $http.get('http://practiceapi.devmounta.in/products').then(function(res){
      console.log(res.data);
      return res.data;
    })
  }


  this.getOne = function(id){
    return $http.get('http://practiceapi.devmounta.in/products/' + id).then(function(res){
      console.log(res.data);
      return res.data;
    })
  }
})
