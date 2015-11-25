Monitor.directive("afterHrs", function () {
    return {
        restrict: 'E',
        templateUrl: 'Directives/after-Hrs.html',
        replace: true
    }
});

Monitor.directive("dirShowFilter", function () {
    return {
        restrict: 'E', templateUrl: "directives/show-filter.html",
        replace: true,
            scope: {
                fltrSectors: "=",
                activeSector: "=",
                  fltrSymbol: "=",
                 fltrPeriods: "=",
                activePeriod: "=",
                   fltrSizes: "=",
                  activeSize: "=",
                 fltrRecords: "=",
                activeRecord: "=",
                  hideSector:"=",
                  hideSymbol:"=",
                  hidePeriod:"=",
                   hideSize:"=",
                hideRecords:"="
            }
    }
});

Monitor.directive("dirShowImage", function () {
    return {
        restrict: 'AEC', templateUrl: "directives/show-image.html",
        replace: true,
        scope: {
              imgList: "=",
              imgSize: "=",
            imgPeriod: "="
        }
    }
});

Monitor.directive("dirShowIndex", function () {
    return {
        restrict: 'AEC', templateUrl: "directives/show-index.html",
        replace: true
    }
});

Monitor.directive("dirShowAdvfn", function () {
    return {
        restrict: 'AEC', templateUrl: "directives/show-advfn.html",
        scope: {
            dirTickersBySector: "=",
                   activeRecord: "=",
                 fnFormatAdvfn:"&",
                    hideAdvfn:"="
        },
        replace: true
    }
});

Monitor.directive("dirShowExternalUrl", function () {
    return {
        restrict: 'AEC', templateUrl: "directives/show-external-url.html",
        replace: true,
        scope: {
            url: "="
        }
    }
});