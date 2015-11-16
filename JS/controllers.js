//CONTROLLERS
"use strict";
Monitor.controller('stocksController', ['$scope','$log','$routeParams', 'tickerService','tickerFactory','commonFactory','afterHRSFactory', function($scope,$log,$routeParams, tickerService, tickerFactory,commonFactory,afterHRSFactory) {
    $scope.symbol={S:"",ADVFN:""};
    $scope.symbol.S =  $routeParams.symbol || tickerService.symbol.S;
    $scope.advfn={};

    $scope.indexCountry= commonFactory.getIndexes($routeParams.indexCountry || "AU");
    $scope.tickers = tickerFactory.getTickers();
    $scope.list = commonFactory.getUSBanks();

    $scope.periods = commonFactory.getPeriods();
    if ( !$routeParams.duration ){
        $scope.period =  $scope.period || commonFactory.getDefaultPeriod("5d");
    }
    else{
          $scope.period =  commonFactory.getPeriod($routeParams.duration);
    }

    $scope.$watch('period',function () {
        $scope.tickersBySector = tickerFactory.getTickersBySector($scope.activeSector);
        tickerService.period=$scope.period;
    });

    $scope.selected = {};
    $scope.selected.Symbol = tickerFactory.getFavourites()[0];
    $scope.favourites = tickerFactory.getFavourites();
    
    $scope.sizes = commonFactory.getSizes();
    $scope.size= tickerService.size ||commonFactory.getDefaultSize();
    $scope.$watch('size',function () {
        tickerService.size=$scope.size;
    });

    $scope.tickersBySector = tickerFactory.getTickersSectorBySymbol("TD");

    $scope.sectors = tickerFactory.getSectors();
    $scope.activeSector = tickerService.activeSector || tickerFactory.getSector("TD");
    $scope.$watch('activeSector',function () {
        $scope.tickersBySector = tickerFactory.getTickersBySector($scope.activeSector);
        tickerService.activeSector = $scope.activeSector;
    });


    $scope.$watch('symbol', function () {
        tickerService.symbol = $scope.symbol;
        $scope.afterHRSData = afterHRSFactory.getAfterHrsQuote(tickerService.symbol.S);
        $scope.advfn.symbol = $scope.formatAdvfn($scope.symbol.S);
        $scope.symbol.ADVFN = $scope.formatAdvfn($scope.symbol.S);

    });

    $scope.recordFilters=commonFactory.getRecordFilters();
    $scope.activeRecordFilter=tickerService.activeRecordFilter || commonFactory.getRecordFilter(10);
    $scope.$watch('activeRecordFilter',function () {
        tickerService.activeRecordFilter = $scope.activeRecordFilter;
    });


    $scope.cWidth = 400;


    $scope.formatAdvfn = function (s) {
        var sADVFN = {};
        var pos = s.indexOf(".");
        if (pos <0){
            sADVFN=s;
        }
        else{
            sADVFN=s.slice(pos+1,pos+2) + "^" + s.slice(0,pos);
        }
        return sADVFN;
    };
    $scope.extractJustSymbol = function (s) {
        var tmp = {};
        var pos = s.indexOf(".");
        if (pos <0){
            tmp=s;
        }
        else{
            tmp= s.slice(0,pos);
        }
        return tmp;
    };

    $scope.cProfile=tickerFactory.getCompanyDetails($scope.extractJustSymbol($scope.symbol.S)  );

}]);


Monitor.controller('dataController', ['$scope', '$resource', '$routeParams', 'symbolService', function($scope, $resource, $routeParams, symbolService) {
  
    
}]);


Monitor.controller('marketsController', ['$scope', '$resource', '$routeParams', 'symbolService', function($scope, $resource, $routeParams, symbolService) {


}]);




Monitor.controller('afterHRSController', ['$scope', '$resource', '$routeParams', 'afterHRSFactory','tickerService', function($scope, $resource, $routeParams, afterHRSFactory,tickerService) {
    console.log(tickerService.symbol.S);
    $scope.afterHRSData = afterHRSFactory.getAfterHrsQuote(tickerService.symbol.S);
    console.log($scope.afterHRSData);
    }
]);



Monitor.controller('indexController', ['$scope', '$resource', '$routeParams', 'symbolService', function($scope, $resource, $routeParams, symbolService) {
    $scope.symbol = symbolService.symbol;
    $scope.symbol = $routeParams.symbol || 'RY.to';
       

}]);


Monitor.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });
    
    $scope.convertToFahrenheit = function(degK) {
        
        return Math.round((1.8 * (degK - 273)) + 32);
        
    };
    
    $scope.convertToDate = function(dt) { 
      
        return new Date(dt * 1000);
        
    };

}]);

Monitor.controller("newsCTRLJSONP", ['$scope', '$resource', function ($scope, $resource) {
    $scope.newsUrl = 'http://www.cnbc.com/franchise/20991458?&mode=breaking_news';
    $scope.newsAPI = $resource($scope.newsUrl, {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
    $scope.news = $scope.newsAPI.get({});
    $scope.receivedDate = '';
}]);
Monitor.controller('chartController', ['$scope', '$resource', '$routeParams', 'symbolService', function($scope, $resource, $routeParams, symbolService) {
    $scope.symbol = symbolService.symbol;
    $scope.symbol = $routeParams.symbol || 'td.to';
       

}]);
