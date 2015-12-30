Monitor.factory("tickerFactory", function() {
    var _leadsCAN=['cxr.to','fru.to','crh.to'];
    var _leadsUS=['aapl','AMGN','VRTX','rrc','nrg','DVN','APC','EQT','R','WDC','BHI','NAVI','WRK'];
    var _favourites = [{Symbol: "MG.TO"},{Symbol: "MTY.TO"},{Symbol: "IPL.TO"},{Symbol: "CGX.TO"},{Symbol: "AEZ.TO"},{Symbol: "CPH.TO"},{Symbol: "TH.TO"},{Symbol: "vrx.TO"},{Symbol: "cxr.TO"},{Symbol: "RY.TO"}, {Symbol: "TD.TO"},{Symbol: "CM.TO"},{Symbol: "TD.TO"},{Symbol: "BNS.TO"}];
       var _gainers = [{Symbol: "KXS.TO"},{Symbol: "NFI.TO"},{Symbol: "DDC.TO"}, {Symbol: "NSU.TO"},{Symbol: "PEY.TO"},{Symbol: "CXR.TO"},{Symbol: "ESI.TO"},{Symbol: "HSE.TO"},{Symbol: "LIF.TO"},{Symbol: "SW.TO"}, {Symbol: "YRI.TO"},{Symbol: "BAM.A.TO"},{Symbol: "BPY.UN.TO"},{Symbol: "MRU.TO"},{Symbol: "SAP.TO"},{Symbol: "DOL.TO"},{Symbol: "ARD.B.TO"}, {Symbol: "CSU.TO"},{Symbol: "FNV.TO"},{Symbol: "IPL.TO"},{Symbol: "AGU.TO"}, {Symbol: "ARX.TO"},{Symbol: "ECA.TO"},{Symbol: "YRI.TO"}];
       var _loosers = [{Symbol: "BNK.TO"},{Symbol: "NAL.TO"},{Symbol: "PRE.TO"}, {Symbol: "PPY.TO"},{Symbol: "HMY.TO"},{Symbol: "RMX.TO"},{Symbol: "ACI.TO"},{Symbol: "CENX.TO"},{Symbol: "CLD.TO"},{Symbol: "HMY.TO"}, {Symbol: "HCLP.TO"},{Symbol: "ZINC.TO"},{Symbol: "NRP.TO"},{Symbol: "BTU.TO"},{Symbol: "RMX.TO"},{Symbol: "S.TO"},{Symbol: "HSE.TO"}, {Symbol: "PGF.TO"},{Symbol: "TDG.TO"},{Symbol: "AVO.TO"},{Symbol: "NAL.TO"}, {Symbol: "ZINC.TO"},{Symbol: "NRP.TO"},{Symbol: "BTU.TO"},{Symbol: "RMX.TO"},{Symbol: "S.TO"},{Symbol: "HSE.TO"}, {Symbol: "ABX.TO"},{Symbol: "BBD.B.TO"},{Symbol: "GIL.TO"},{Symbol: "MG.TO"}, {Symbol: "HSE.TO"},{Symbol: "NAL.TO"},{Symbol: "PWT.TO"}];
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
            var t;
            if (thisSymbol.indexOf(".")>0){
                t= _.where(tickers, {Symbol: this.stripExchange(thisSymbol)});
            }
            else {
                t = _.where(tickers, {USSymbol: this.stripExchange(thisSymbol)});
            }
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
            return _favourites;
        },
        getFavouritesGainers: function(){
            return _gainers;
        },
        getFavouritesLoosers: function(){
            return _loosers;
        },

        getCompanyDetails: function(s){
            return _.where(tickers, {Symbol: s});
        },
        getDefaultSector: function(s){
            return this.getSector(s);
        },
        filterCompanies: function(n){
            return _.where(tickers, {Name: n});
        },
        getLeads: function(){
            var leads=[];
            for( i in _leadsCAN)
            {
                var t = {Symbol: _leadsCAN[i],Market: 'CAN'}

                leads.push(t);
            }
            for( i in _leadsUS)
            {
                var t = {Symbol: _leadsUS[i],Market: 'US'}

                leads.push(t);
            }

            return leads;
        }


    }
});

