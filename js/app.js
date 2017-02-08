angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html'
  })
  .state('shop', {
    url: '/shop',
    templateUrl: 'views/shop.html',
    controller: 'shopCtrl'
  })
  .state('blog', {
    url: '/blog',
    templateUrl: 'views/blog.html'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html'
  })
  // .state('details', {
  //   url: '/details',
  //   templateUrl: 'views/product-details.html'
  // })



})
