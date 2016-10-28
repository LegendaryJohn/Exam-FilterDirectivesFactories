var app = angular.module('examApp', []);



  app.controller('ExamController', ['studFactory', function(studFactory) {

    this.student = studFactory;
    
    // REST example ex. 6
//   $http.get("http://localhost:8080/FilterDirectivesFactories/api/students/all")
//            .then(function(response){
//                
//             $scope.data = response.data;
//             $scope.simData = JSON.parse($scope.data);
//    
//    });

  }]);
  

app.directive('students', function(){
   
   return{
       restrict: 'AE',
       templateUrl: 'students.html'
   };
    
});

app.filter('averageGrade', function() {
   
    return function(x) {
        
        
        var avg = 0;
        for(var i = 0; i < x.grades.length; i++)
        {
            if(parseInt(x.grades[i].grade) > 0)
            {
                avg += parseInt(x.grades[i].grade);
            }
        }
      
     return avg / 2;  //Every student has 2 grades.
        
    };
    
});

app.factory('studFactory', function() {
   
    var studentsInfo = {};
    studentsInfo.allCourses = [
      {courseId : 1000,courseName: "Basic Programming"},
      {courseId : 1001,courseName: "Advanced Programming"},
      {courseId : 1003,courseName: "DataBase Intro"}];
    studentsInfo.students = [];
    studentsInfo.students.push({studentId : 100, name: "Peter Hansen", grades : [{grade: "10"},{grade: "12"},{}]});
    studentsInfo.students.push({studentId : 101, name: "Jan Olsen", grades : [{grade: "7"},{grade: "10"},{}]});
    studentsInfo.students.push({studentId : 102, name: "Gitte Poulsen", grades : [{grade: "7"},{grade: "7"},{}]});
    studentsInfo.students.push({studentId : 103, name: "John McDonald", grades : [{grade: "10"},{},{grade: "7"}]});
    
    return studentsInfo;
});