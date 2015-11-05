// DIRECTIVES
Monitor.directive("weatherReport", function() {
   return {
       restrict: 'E',
       templateUrl: '../directives/weatherReport.html',
       replace: true,
       scope: {
           weatherDay: "=",
           convertToStandard: "&",
           convertToDate: "&",
           dateFormat: "@"
       }
   }
});



Monitor.directive("afterHRS", function() {
   return {
       restrict: 'E',
       templateUrl: '../directives/DIRafterHRS.html',
       replace: true,
       scope: {
           data: "=",
           convertToStandard: "&",
           convertToDate: "&",
           dateFormat: "@"
       }
   }
});