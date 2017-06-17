/**
 * Created by gohan95 on 6/16/2017.
 */

var app = angular.module('todoApp', []);

console.log("kaaa");

function todoCtrl($scope, $http) {
    alert("jj");
    $scope.inputData = {};

    $http.get('/api/todos').success(function(data) {
        $scope.todos = data;
        console.log(data);
    }).error(function(data) {
        console.log("Error " + data);
    });

    $scope.createTodo = function() {
        $http.post('/api/todos', $scope.inputData).success(function(data) {
            $scope.inputData = {};
            $scope.todos = data;
            console.log(data);
        }).error(function(data) {
            console.log("Error: " + data);
        });
    };

    $scope.deleteTodo = function(id) {
        $http.delete('/api/del/' + id).success(function(data) {
            $scope.todos = data;
            console.log(data);
        }).error(function (data) {
            console.log("Error: " + data);
        });
    };
};
