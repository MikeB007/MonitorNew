Monitor.factory("tickerFactory", function() {
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
        }


    }
});
