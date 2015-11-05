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
        .when('/afterHRS', {
            templateUrl: 'pages/afterHRS.htm',
            controller: 'afterHRSController'
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