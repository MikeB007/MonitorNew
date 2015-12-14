Monitor.factory("commonFactory", function() {
    return {
        getPeriods: function(){
            return _periods;
        },
        getDefaultPeriod: function(i){
            return this.getPeriod(i);
        },
        getPeriod: function(i){
            return (_periods[_.where(_periods, {duration: i})[0].id-1]);
        },
        getSizes: function(){
            return _sizes;
        },
        getSize: function(i){
            var s =(_sizes[_.where(_sizes, {size: i})[0].id-1]);
            return s;
        },
        getDefaultSize: function(){
            return _sizes[0];
        },
        getUSBanks: function(){
            return _USBanks;
        },
        getIndexes: function(i) {
            return _.where(_INDEXES, {id: i});
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
                source=  source.slice(0,pos) + replaceWith + source.slice(pos+ findWhat.length)
            }
            return source;
        },
        stripExchange: function (s){
            var l2S=s;
            var pos = s.indexOf(".");
            if (pos >0){
                l2S = s.slice(0,pos);
            }
            return l2S;
        },
        injectSymbols: function (url,s,usSymbol,caSymbol){
            var pos = s.indexOf('.');
            var s1;
            if (pos>0){
                s1 = s
                if (usSymbol !="")
                    s1 =s1 + "," + usSymbol;
            }
            else{
                s1 = s
                if (caSymbol !="")
                    s1 =s1 + "," + caSymbol
            }
           var s2 = this.replaceWith(url.url,"[]",s1);
               s2 = this.replaceWith(s2,"<-->",caSymbol);
               s2 = this.replaceWith(s2,"<>",this.stripExchange(s));
            return  s2;
        },
        getLinks: function(){
            return _LINKS;
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

