// SERVICES


Monitor.service('tickerService',['commonFactory','tickerFactory', function(commonFactory,tickerFactory) {
    this.symbol={S:""};
    this.symbol.S = "TD.TO";
    this.period = commonFactory.getDefaultPeriod("3m");
    this.sector = tickerFactory.getDefaultSector("TD")
}]);