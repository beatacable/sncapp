let app = angular.module('sncApp', []);

app.controller('mainCtrl', function($scope) {
  $scope.name = 'World';

        $scope.exportAction = function (option) {
          switch (option) {
              case 'pdf': $scope.$broadcast('export-pdf', {});
                  break;

          }
      }

      $scope.reportData = [
                     {
                         "EmployeeID": "1234567",
                         "LastName": "Lastname",
                         "FirstName": "First name",
                         "Salary": 1000
                     },
                     {
                         "EmployeeID": "11111111",
                         "LastName": "Lastname 1",
                         "FirstName": "First name 1",
                         "Salary": 2000
                     },
                     {
                         "EmployeeID": "222222222",
                         "LastName": "Lastname 2",
                         "FirstName": "First name 2",
                         "Salary": 3000
                     },
                     {
                         "EmployeeID": "333333333",
                         "LastName": "Lastname 3",
                         "FirstName": "First name 3",
                         "Salary": 4000
                     }
            ];


});

app.directive('exportTable', function(){
          var link = function ($scope, elm, attr) {
            $scope.$on('export-pdf', function (e, d) {
                elm.tableExport({ type: 'pdf', escape: false });
            });

        }
        return {
            restrict: 'C',
            link: link
        }
});
