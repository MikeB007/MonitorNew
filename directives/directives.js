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
        link: function (scope, element, attrs) {
            element.addClass('ng-hide="true"');
            console.log("Linking:" + attrs);
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

Monitor.directive("advfnChart", function () {
    return {
        restrict: 'AEC', templateUrl: "directives/advfn-chart.html",
        scope: {
            passSymbol: "@"
        },
        replace: true
    }
});

