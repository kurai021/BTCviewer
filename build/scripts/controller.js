angular.module('BTCviewer', [])
 .controller('BTC-Ctrl',['$scope', function($scope){
   var show = false;

   $scope.showbuttons = function(){
     show = true;
   }

   $scope.hidebuttons = function(){
     show = false;
   }

   $scope.showbutton = function(){
     return show;
   }
}]);