var shopApp = angular.module('shopModule', []);
shopApp.controller('mainController', function($scope) {
  $scope.itemList = [
    {
      name: 'Eggs Grade C',
      price: 1.99
    },
    {
      name: 'Eggs Grade B',
      price: 2.99
    },
    {
      name: 'Eggs Grade A',
      price: 3.99
    },
  ];
  $scope.getTotal = function() {
    total = 0;
    $scope.itemList.forEach(function(listed) {
      total += parseFloat(listed.price);
      $scope.total = total;
    });
  };
  $scope.getTotal();
  $scope.addItem = function() {
    if ((nameIn && priceIn) !== (undefined)) { // If user passes data
      $scope.itemList.push({
        name: $scope.nameIn,
        price: $scope.priceIn
      });
      $scope.getTotal();
    } else { // If user submites with either field blank
      alert("Oops, looks like you left something blank.")
    }
  };
});
