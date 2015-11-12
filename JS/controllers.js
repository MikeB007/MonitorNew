//CONTROLLERS
"use strict"
Monitor.controller('stocksController', ['$scope','$log','$routeParams', 'tickerService','tickerFactory','commonFactory','afterHRSFactory', function($scope,$log,$routeParams, tickerService, tickerFactory,commonFactory,afterHRSFactory) {
    $scope.symbol={S:"",ADVFN:""};
    $scope.symbol.S =  $routeParams.symbol || tickerService.symbol.S;
    $scope.advfn={};
    $scope.howMany={};
    $scope.howMany.cnt = 10;
    $scope.tickers = tickerFactory.getTickers();

    $scope.USBanks = commonFactory.getUSBanks();

    $scope.periods = commonFactory.getPeriods();
    $scope.period = tickerService.period;
        //$scope.period || commonFactory.getDefaultPeriod();

    $scope.selected = {};
    $scope.selected.Symbol = tickerFactory.getFavourites()[0];
    $scope.favourites = tickerFactory.getFavourites();
    
    $scope.sizes = commonFactory.getSizes();
    $scope.size= commonFactory.getDefaultSize();

    $scope.tickersBySector = tickerFactory.getTickersSectorBySymbol("TD");

    $scope.sectors = tickerFactory.getSectors();
    $scope.activeSector = tickerFactory.getSector("TD");
//    $scope.subSectors  = tickerFactory.getSubSectors($scope.activeSector);
    $scope.$watch('symbol', function () {
        tickerService.symbol = $scope.symbol;
        $scope.afterHRSData = afterHRSFactory.getAfterHrsQuote(tickerService.symbol.S);
        $scope.advfn.symbol = $scope.formatADVFN($scope.symbol.S);
        $scope.symbol.ADVFN= $scope.formatADVFN($scope.symbol.S);

    });

    $scope.cWidth = 800;
    $scope.$watch('activeSector',function () {
    $scope.tickersBySector = tickerFactory.getTickersBySector($scope.activeSector);
    });

    $scope.$watch('period',function () {
        $scope.tickersBySector = tickerFactory.getTickersBySector($scope.activeSector);
        tickerService.period=$scope.period;
    });

    $scope.formatADVFN = function (s) {
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
        
    }
    
    $scope.convertToDate = function(dt) { 
      
        return new Date(dt * 1000);
        
    };
    
}]);
Monitor.controller('chartController', ['$scope', '$resource', '$routeParams', 'symbolService', function($scope, $resource, $routeParams, symbolService) {
    $scope.symbol = symbolService.symbol;
    $scope.symbol = $routeParams.symbol || 'td.to';
       

}]);
