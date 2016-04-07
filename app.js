var app = angular.module('bigToDo', []);

app.controller('ToDoController', function($scope){
  $scope.task = ''; //user input?
  $scope.tasks = ['one', 'two', 'three'];
  $scope.runClick = function(){
      $scope.tasks.push($scope.task); //task list
  };

});
