var app = angular.module('examExercise', ['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "table.html",
                controller: "examController"
            })
            .when("/details/:id", {
                templateUrl: "details.html",
                controller: "details"
            })
            .otherwise({redirectTo: "/"});
    }]);

app.controller('examController', function ($scope, mFactory) {

    $scope.msg = 'Angular Member Table';

    getJokeFromUrl();

    function getJokeFromUrl() {
        mFactory.getMembers()
            .success(function (res) {
                $scope.members = res;
            })
            .error(function () {
                $scope.members = 'No data loadet';
            });
    }

});

app.controller('details', ['$scope', '$routeParams', 'mFactory', function ($scope, $routeParams, mFactory) {

    var id = $routeParams.id;

    getmFromUrl();

    function getmFromUrl() {
        mFactory.getMembers()
            .success(function (res) {
                for (var i in res) {
                    if (res[i].id == id) {
                        $scope.membersDetails = angular.copy(res[i]);
                    }
                }
            })
            .error(function () {
                $scope.membersDetails = 'No data loadet';
            });
    }

}]);

app.factory('mFactory', ['$http', function ($http) {

    var mFactory = {};

    mFactory.getMembers = function () {
        return $http.get('localhost:3000/api/getmembers');
    };

    return mFactory;
}]);
