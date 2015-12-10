//CONTROLLERS
"use strict";
Monitor.controller('stocksController', ['$scope','$log','$routeParams','$sce','tickerService','tickerFactory','commonFactory','afterHRSFactory', function($scope,$log,$routeParams,$sce, tickerService, tickerFactory,commonFactory,afterHRSFactory) {
    $scope.symbol={S:"",ADVFN:"",s:""};
    $scope.symbol.S =  $routeParams.symbol || tickerService.symbol.S;
    $scope.symbol.S = $scope.symbol.S.toUpperCase();
    if($scope.symbol.S.indexOf(".")){
        $scope.symbol.usS = tickerFactory.getUSTicker($scope.symbol.S);
    }
    else{
        $scope.symbol.usS = $scope.symbol.S;
    }

    $scope.fltr =  tickerService.fltr;

//    $scope.symbol.s=$scope.convertToBigChart($scope.symbol.S);
    $scope.fltrRealTime={isVisible:"0"};
    $scope.advfn={};
    $scope.hideAdvfn=false;
    $scope.hideRT=false;
    $scope.hideRT1=false;
    if( $routeParams.directSite){
        $scope.myImg=commonFactory.getSiteUrl("BLANK");
       $scope.myImg[0].url = $sce.trustAsResourceUrl($routeParams.directSite);
    }
    if ( $routeParams.site ){
        $scope.myImg= commonFactory.getSiteUrl($routeParams.site);
        var USS=tickerFactory.getUSTicker($scope.symbol.S);
        var CADS=tickerFactory.getCADTicker($scope.symbol.S);
        console.log("CAD Symbol" + CADS);
        console.log("Here is the URL: "+    $scope.myImg[0].url);

        $scope.myImg[0].url=commonFactory.injectSymbols($scope.myImg[0],$scope.symbol.S,USS,CADS);

        console.log("Here is the URL: "+    $scope.myImg[0].url);
        //$scope.myImg[0].url = $sce.trustAsResourceUrl($scope.myImg[0].url);
    }
    if ( $routeParams.indexCountry ) {
        $scope.indexCountry = commonFactory.getIndexes($routeParams.indexCountry || "AU");
    }
    $scope.tickers = tickerFactory.getTickers();
    $scope.list = commonFactory.getUSBanks();

    $scope.periods = commonFactory.getPeriods();
    if ( !$routeParams.duration ){
        $scope.period =  tickerService.period || commonFactory.getDefaultPeriod("5d");
    }
    else{
          $scope.period =  commonFactory.getPeriod($routeParams.duration);
    }
    $scope.$watch('period',function () {
       // $scope.tickersBySector = tickerFactory.getTickersBySector($scope.activeSector);
        tickerService.period=$scope.period;
    });

    $scope.$watch('fltr',function () {
        // $scope.tickersBySector = tickerFactory.getTickersBySector($scope.activeSector);
        tickerService.fltr=$scope.fltr;
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


    $scope.$watch('symbol.S', function () {
        tickerService.symbol = $scope.symbol;
        $scope.advfn.symbol = $scope.formatAdvfn($scope.symbol.S);
        $scope.symbol.ADVFN = $scope.formatAdvfn($scope.symbol.S);
        $scope.symbol.s = $scope.convertToBigChart($scope.symbol.S);
        $scope.cProfile=tickerFactory.getCompanyDetails($scope.extractJustSymbol($scope.symbol.S.toUpperCase())  );
        $scope.s= $scope.symbol.S;
            //$scope.s= $scope.convertToBigChart($scope.symbol.S);

            if($scope.symbol.S.indexOf(".")){
            $scope.symbol.usS = tickerFactory.getUSTicker($scope.symbol.S);
        }
        else{
            $scope.symbol.usS = $scope.symbol.S;
        }
            tickerService.symbol = $scope.symbol;
            $scope.afterHRSData = afterHRSFactory.getAfterHrsQuote(tickerService.symbol.usS);
        }

    );
    
    //$scope.s= $scope.symbol.S;
    

    //$scope.s= $scope.symbol.S;
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

     $scope.convertToBigChart = function(s){
         var convertedS;
         var pos = s.indexOf(".");
         if (pos <0){
             convertedS=s;
         }
         else{
             convertedS= "CA:" + s.slice(0,pos);
         }
         return convertedS;
     }

    $scope.convertToUS = function(s){
        var l2S=s;
        var pos = s.indexOf(".");
        if (pos >0){
            l2S = s.slice(0,pos);
        }
        return l2S;
    }

}]);


  Monitor.filter('trustUrl', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });

Monitor.controller('dataController', ['$scope', '$resource', '$routeParams', 'symbolService', function($scope, $resource, $routeParams, symbolService) {
  
    
}]);


Monitor.controller('marketsController', ['$scope', '$resource', '$routeParams', 'symbolService', function($scope, $resource, $routeParams, symbolService) {


}]);




Monitor.controller('afterHRSController', ['$scope', '$resource', '$routeParams', 'afterHRSFactory','tickerService','tickerFactory', function($scope, $resource, $routeParams, afterHRSFactory,tickerService,tickerFactory) {
    console.log(tickerService.symbol.S);
    $scope.afterHRSData = afterHRSFactory.getAfterHrsQuote(tickerService.symbol.usS);
    console.log($scope.afterHRSData);
    $scope.symbol=tickerService.symbol;

    $scope.convertToUS = function(s) {
        var l2S = s;
        var pos = s.indexOf(".");
        if (pos > 0) {
            l2S = s.slice(0, pos);
            l2S = tickerFactory.getUSTicker(l2S);
        }
        return l2S;
    }

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

Monitor.controller("newsCTRLJSONP", ['$scope', '$resource','tickerService', function ($scope, $resource,tickerService) {
    $scope.newsUrl = 'http://www.cnbc.com/franchise/20991458?&mode=breaking_news';
    $scope.newsAPI = $resource($scope.newsUrl, {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

    $scope.news = $scope.newsAPI.get({});
    tickerService.newsURL=$scope.news.url;
    $scope.receivedDate = '';
}]);
Monitor.controller('chartController', ['$scope', '$resource', '$routeParams', 'symbolService', function($scope, $resource, $routeParams, symbolService) {
    $scope.symbol = symbolService.symbol;
    $scope.symbol = $routeParams.symbol || 'td.to';
       

}]);

//http://jsfiddle.net/sonicblis/5tcQa/3/
Monitor.controller("news", function($scope, UrlCaller, $q, $timeout){
    $scope.LoadStatus = "Pending";
    $scope.JSONPayload = '';
    $scope.CallUrl = function(){
        UrlCaller.Url.get({hi: 'howdy'}).$promise.then(function(value){
            console.log(value);
            //console.log(httpresponse);
        });
    };
    $scope.loadContent = function(){
        $scope.AsyncLoad().then(
            function(){
                $scope.LoadStatus = "Done!";
            },
            function(){
                $scope.LoadStatus = "Failed!";
            }
        )
    };
    $scope.AsyncLoad = function(){
        var d = $q.defer();
        var hi = $timeout(function(){1/0}, 2000);
        hi.then(d.resolve, d.reject);
        return d.promise;
    };
});


Monitor.factory('NewsService', function($http) {
    var newsUrl = 'http://www.cnbc.com/franchise/20991458?&mode=breaking_news';
    return {
        getNews: function (id) {
            return $http.get(newsUrl).then(function (response) {
                return response.data;
            });
        }
    }
});

Monitor.controller('newsController', ['$scope', '$resource', '$routeParams','NewsService', function($scope, $resource, $routeParams,NewsService) {
    $scope.news = NewsService.getNews(0);

}]);

