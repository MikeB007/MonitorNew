Monitor.factory("commonFactory", function() {
    return {
        getPeriods: function(){
            return _periods;
        },
        getDefaultPeriod: function(){
            return _periods[0];
        },
        getSizes: function(){
            return _sizes;
        },
        getDefaultSize: function(){
            return _sizes[0];
        }
    }
});


Monitor.factory("afterHRSFactory", ['$resource', function($resource) {
    return {
        getAfterHrsQuote: function(ticker){
            var api = $resource("http://markets.money.cnn.com/services/api/quotehover/?symb=TD", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});    
            return api.get();
    
            //$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });        
    }
}}]);

