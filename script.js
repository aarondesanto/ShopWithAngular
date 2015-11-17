var shopApp = angular.module('shopModule', []);
shopApp.controller('mainController', function($scope) {
  $scope.list = [
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
  $scope.thebutton = function(name, price) {
    if ((name && price) !== (undefined)) { // If user passes data
      $scope.list.push({
        name: name,
        price: price
      });
    } else { // If user submites with either field blank
      alert("Oops, looks like you left something blank.")
    }
    return this;
  };
});
