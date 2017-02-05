angular.module('app', ['ui.router']).config(function($urlRouterProvider, $stateProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    templateUrl: './views/home.html',
    url: './'
  })
  .state('shop', {
    templateUrl: './views/shop.html',
    url: '/shop',
    controller: 'mainCtrl'
  })
  .state('blog', {
    templateUrl: './views/blog.html',
    url: '/blog'
  })
  .state('about', {
    templateUrl: './views/about.html',
    url: '/about'
  })
  .state('details', {
    templateUrl: './views/product-details.html',
    url: '/details/:id',
    controller: 'mainCtrl'
  })
})
