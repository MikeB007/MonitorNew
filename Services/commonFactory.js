Monitor.factory("commonFactory", function() {
    return {
        getPeriods: function(){
            return _periods;
        },
        getDefaultPeriod: function(){
            return this.getPeriod("5d");
        },
        getPeriod: function(d){
            var i  =_.where(_periods, {duration: d} );
            return (_periods[_.where(_periods, {duration: d})[0].id-1]);
        },
        getSizes: function(){
            return _sizes;
        },
        getDefaultSize: function(){
            return _sizes[2];
        },
        getUSBanks: function(){
            return _USBanks;
        },
        getIndexes: function(indx){
        return _.where(_INDEXES, {id:indx });
    }

};
});


Monitor.factory("afterHRSFactory", ['$resource', function($resource) {
    return {
        getAfterHrsQuote: function(ticker){
            var url = "http://markets.money.cnn.com/services/api/quotehover/?symb=" + ticker;
            var api = $resource(url, { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});    
           return api.get();

            //$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });        
    }
}}]);

