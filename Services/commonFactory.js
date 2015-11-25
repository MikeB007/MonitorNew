Monitor.factory("commonFactory", function() {
    return {
        getPeriods: function(){
            return _periods;
        },
        getDefaultPeriod: function(p){
            return this.getPeriod(p);
        },
        getPeriod: function(p){
            return (_periods[_.where(_periods, {duration: p})[0].id-1]);
        },
        getSizes: function(){
            return _sizes;
        },
        getDefaultSize: function(){
            return _sizes[0];
        },
        getUSBanks: function(){
            return _USBanks;
        },
        getIndexes: function(indx) {
            return _.where(_INDEXES, {id: indx});
        },
        getRecordFilters: function(){
            return _RECROD_FILTERS;
        },
        getDefaultRecordFilter: function(f){
            return this.getRecordFilter(f);
        },
        getRecordFilter: function(i){
            return (_RECROD_FILTERS[_.where(_RECROD_FILTERS, {cnt: i})[0].id-1])
        },
        getSiteUrl: function(i){
            var site=angular.copy (_.where(_URLS, {id: i}));
            return (site);
        },
        replaceWith: function(source,findWhat,replaceWith){
            var pos = source.indexOf(findWhat);
            if (pos >0){
                source=  source.slice(0,pos) + replaceWith + source.slice(pos+2)
            }
            return source;
        },
        injectSymbols: function (url,s){
            var pos = s.indexOf('.');
            if (pos>0){
                s = s + "," + s.slice(0,pos-1)
            }
            else{
                s = s + "," + s + ".TO"
            }

            return  this.replaceWith(url.url,"[]",s);
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

