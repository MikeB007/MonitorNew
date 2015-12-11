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
                fltrRealTime:"=",
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

Monitor.directive("dirShowImageList", function () {
    return {
        restrict: 'AEC', templateUrl: "directives/show-image-list.html",
        replace: true,
        scope: {
              imgList: "=",
              imgSize: "=",
            imgPeriod: "="
        }
    }
});

Monitor.directive("dirShowFancyChart", function () {
    return {
        restrict: 'AEC', templateUrl: "directives/show-fancy-chart.html",
        replace: true,
        scope: {
            imgDetails: "=",
            imgSize: "=",
            imgPeriod: "=",
            fnFormatAdvfn:"&",
            fnConvertToBigChart:"&",
            hideAdvfn:"=",
            fltrRealTime: "="
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

Monitor.directive("dirShowExternalGenericImg", function () {
    return {
        restrict: 'AEC', templateUrl: "directives/show-external-generic-img.html",
        replace: true,
        scope: {
            img: "=",
            imgSize: "=",
            imgPeriod: "="
        }
    }
});

Monitor.directive("dirShowExternalGenericImgCurrency", function () {
    return {
        restrict: 'AEC', templateUrl: "directives/show-external-generic-img-currency.html",
        replace: true,
        scope: {
            img: "=",
            imgSize: "=",
            imgPeriod: "="
        }
    }
});
