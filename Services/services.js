// SERVICES


Monitor.service('tickerService',['commonFactory','tickerFactory', function(commonFactory,tickerFactory) {
    this.symbol={S:""};
    this.symbol.S = "TD.TO";

    this.period = commonFactory.getDefaultPeriod("3m");
    this.activeRecordFilter=commonFactory.getRecordFilter("10");

    this.sector = tickerFactory.getDefaultSector("TD");

}]);