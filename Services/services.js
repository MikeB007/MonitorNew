// SERVICES


Monitor.service('tickerService',['commonFactory','tickerFactory', function(commonFactory,tickerFactory) {
    this.img={Url:"www.google.ca"};
    this.symbol={S:"VRX.to",usS:"VRX"};
    this.fltr={isVisible:1};
    this.period = commonFactory.getDefaultPeriod("1d");
    this.activeRecordFilter=commonFactory.getRecordFilter("10");
    this.sector = tickerFactory.getDefaultSector("TD");
    this.newsURL="";
}]);

app.service('UrlCaller', function($resource){
    this.Url = $resource(
        "/echo/:format/", // :* to make a token to replace
        {},              // format:'json' results in echo/json
                         // hi:'foo' results in echo/json?hi=foo
                         // fomat:@foo looks in the payload for an property called foo to replace format with
        {
            get: {
                method: 'GET',
                params: {format: 'json', delay: '2'}
            }
            //'get':    {method:'GET'},
            //'save':   {method:'POST'},
            //'query':  {method:'GET', isArray:true},
            //'remove': {method:'DELETE'},
            //'delete': {method:'DELETE'}
        }
    );
});