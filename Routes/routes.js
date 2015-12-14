// ROUTES
Monitor.config(function ($routeProvider) {
console.log($routeProvider);
    $routeProvider

        .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'stocksController'
        })
        .when('/chart/:symbol', {
        templateUrl: 'pages/home.htm',
        controller: 'stocksController'
        })
        .when('/chart/:symbol/:duration', {
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
        .when('/CADBanks', {
            templateUrl: 'pages/CADBanks.htm',
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
        .when('/tickerRT', {
        templateUrl: 'pages/tickerRT.html',
        controller: 'stocksController'
        }) 
        .when('/bankDetails1', {
        templateUrl: 'pages/bankDetails1.htm',
        controller: 'stocksController'
        })
        .when('/bankDetails1/:size', {
            templateUrl: 'pages/bankDetails1.htm',
            controller: 'stocksController'
        })
        .when('/indx/:indexCountry', {
            templateUrl: 'pages/showIndex.htm',
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
        .when('/L2', {
            templateUrl: 'pages/L2.html',
            controller: 'stocksController'
        })
        .when('/News', {
            templateUrl: 'pages/News.html',
            controller: 'newsCTRLJSONP'
        })
        .when('/external/:site', {
            templateUrl: 'pages/external.htm',
            controller: 'stocksController'
        })
        .when('/external2/:directSite', {
            templateUrl: 'pages/external.htm',
            controller: 'stocksController'
        })
        .when('/list/:showList', {
            templateUrl: 'pages/showList.htm',
            controller: 'stocksController'
        })
        .when('/links/:link', {
            templateUrl: 'pages/showLinks.htm',
            controller: 'stocksController'
        })

        .when('/commodities/:com', {
            templateUrl: 'pages/commodities.htm',
            controller: 'stocksController'
        })
        .otherwise({
            template: "BAD URL"
        })

});