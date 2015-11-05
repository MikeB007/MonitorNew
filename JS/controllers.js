//CONTROLLERS
"use strict"
Monitor.controller('stocksController', ['$scope','$log','$routeParams', 'tickerService','tickerFactory','commonFactory', function($scope,$log,$routeParams, tickerService, tickerFactory,commonFactory) {
    $scope.symbol =  $routeParams.symbol || 'TD.TO' ; 
    $scope.advfn={};
    $scope.tickers = tickerFactory.getTickers();

    $scope.periods = commonFactory.getPeriods();
    $scope.period= commonFactory.getDefaultPeriod();

    $scope.sizes = commonFactory.getSizes();
    $scope.size= commonFactory.getDefaultSize();

    $scope.tickersBySector = tickerFactory.getTickersSectorBySymbol("TD");

    $scope.sectors = tickerFactory.getSectors();
    $scope.activeSector = tickerFactory.getSector("TD");
//    $scope.subSectors  = tickerFactory.getSubSectors($scope.activeSector);
//    $scope.symbol = tickerService.symbol;
    $scope.$watch('symbol', function () {
        tickerService.symbol = $scope.symbol;
    var pos = $scope.symbol.indexOf(".");
        console.log(pos);
        if (pos <0){ 
        $scope.advfn.symbol=$scope.symbol;
        }
        else{
            $scope.advfn.symbol=$scope.symbol.slice(pos+1,pos+2) + "^" + $scope.symbol.slice(0,pos);
        }
console.log($scope.advfn.symbol);
    });

    $scope.cWidth = 800;
    $scope.$watch('activeSector',function () {
    $scope.tickersBySector = tickerFactory.getTickersBySector($scope.activeSector);
    });

    $scope.$watch('period',function () {
        $scope.tickersBySector = tickerFactory.getTickersBySector($scope.activeSector);

    });

    
}]);


Monitor.controller('dataController', ['$scope', '$resource', '$routeParams', 'symbolService', function($scope, $resource, $routeParams, symbolService) {
  
    
}]);


Monitor.controller('marketsController', ['$scope', '$resource', '$routeParams', 'symbolService', function($scope, $resource, $routeParams, symbolService) {


}]);




Monitor.controller('afterHRSController', ['$scope', '$resource', '$routeParams', 'afterHRSFactory', function($scope, $resource, $routeParams, afterHRSFactory) {
    $scope.afterHRS = afterHRSFactory.getAfterHrsQuote("TD");
    console.log($scope.afterHRS);
    }
]);



Monitor.controller('indexController', ['$scope', '$resource', '$routeParams', 'symbolService', function($scope, $resource, $routeParams, symbolService) {
    $scope.symbol = symbolService.symbol;
    $scope.symbol = $routeParams.symbol || 'td.to';
       

}]);


Monitor.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });
    
    $scope.convertToFahrenheit = function(degK) {
        
        return Math.round((1.8 * (degK - 273)) + 32);
        
    }
    
    $scope.convertToDate = function(dt) { 
      
        return new Date(dt * 1000);
        
    };
    
}]);
Monitor.controller('chartController', ['$scope', '$resource', '$routeParams', 'symbolService', function($scope, $resource, $routeParams, symbolService) {
    $scope.symbol = symbolService.symbol;
    $scope.symbol = $routeParams.symbol || 'td.to';
       

}]);
