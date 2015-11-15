Monitor.factory("tickerFactory", function() {
    var favourites = [{Symbol: "RY.TO"}, {Symbol: "TD.TO"}];
    return {
        getTickers: function(){
            return tickers;
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
            return match.Sub_Sector;
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
