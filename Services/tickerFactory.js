Monitor.factory("tickerFactory", function() {
    var favourites = [{Symbol: "vrx.TO"},{Symbol: "cxr.TO"},{Symbol: "RY.TO"}, {Symbol: "TD.TO"},{Symbol: "CM.TO"},{Symbol: "TD.TO"},{Symbol: "BNS.TO"}];
    return {
        stripExchange: function (s){
            var l2S=s;
            var pos = s.indexOf(".");
            if (pos >0){
                l2S = s.slice(0,pos);
            }
            return l2S;
        },
        getTickers: function(){
            return tickers;
        },
        getCADTicker: function(thisSymbol){
            var t = _.where(tickers, {USSymbol: this.stripExchange(thisSymbol)});
            if (t.length>0) {
              return t[0].Symbol+"." + t[0].Market;
            }
        },
        getUSTicker: function(thisSymbol){
            var t = _.where(tickers, {Symbol: this.stripExchange(thisSymbol)});
            if (t.length>0) {
               return t[0].USSymbol;
            }
        },
        getTickersSectorBySymbol: function(thisSymbol){
           return _.where(tickers, {Sector: this.getSector(thisSymbol)});
        },
        getTickersBySector: function(thisSector){
            return _.where(tickers, {Sector: thisSector});
        },
        getSector: function(thisSymbol){
           var match = _.findWhere(tickers, {Symbol: thisSymbol});
            return match.Sector;
        },
        getSectors: function(){
            return _.uniq(_.pluck(_.flatten(tickers), "Sector"));
        },

        getSubSector: function(thisSymbol){
            var match = _.findWhere(this.getTickersSectorBySymbol(thisSymbol), {Symbol: thisSymbol});
            return match[0].Sub_Sector;
        },
        getSubSectors: function(thisSector){
            return _.uniq(_.pluck(_.flatten(this.getTickersBySector(thisSector)), "Sub_Sec"));
        },

        getFavourites: function(){
            return favourites;
        },
        getCompanyDetails: function(s){
            return _.where(tickers, {Symbol: s});
        },
        getDefaultSector: function(s){
            return this.getSector(s);
        },
        filterCompanies: function(n){
            return _.where(tickers, {Name: n});
        }

        
    }
});
