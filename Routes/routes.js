// ROUTES
Monitor.config(function ($routeProvider) {
   
    $routeProvider
    
        .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'stocksController'
        })
        .when('/chart/:symbol', {
        templateUrl: 'pages/home.htm',
        controller: 'stocksController'
        })
        .when('/charts', {
        templateUrl: 'pages/charts.htm',
        controller: 'stocksController'
        })
        .when('/usBanks', {
        templateUrl: 'pages/usBanks.htm',
        controller: 'stocksController'
        })
        .when('/afterHRS', {
        templateUrl: 'pages/afterHRS.htm',
        controller: 'afterHRSController'
        })

        .when('/banksRT', {
        templateUrl: 'pages/CADBanksRT.html',
        controller: 'stocksController'
        })    
        .when('/bankDetails1', {
        templateUrl: 'pages/bankDetails1.htm',
        controller: 'stocksController'
        })    
        .when('/bankDetails2', {
        templateUrl: 'pages/bankDetails2.htm',
        controller: 'stocksController'
        })    
        .when('/indexes', {
        templateUrl: 'pages/indexes.htm',
        controller: ''
        })
        .when('/markets/AU', {
        templateUrl: 'markets/Australia.htm',
        controller: 'marketsController as MC'
        })


});