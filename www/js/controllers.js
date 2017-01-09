angular.module('app.controllers', [])

  .controller('lengthsAndPlotsCalculatorCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }])

  .controller('aboutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }])

  .controller('expressionModeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {

      $scope.form = {query: ''}
      $scope.update = function() {

        try {
          var temp = math.eval($scope.form.query);
        }
        catch (e) {
          console.log(e);
        }

        $scope.answer = temp.toString();
        ;
      }
    }])

  .controller('dynamicModeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }])

  .controller('plotCalculatorCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {

      $scope.form = {width: '', length: ''}
      $scope.update = function() {

        try {
          $scope.sqFoot = $scope.form.width * $scope.form.length;
          $scope.acres = $scope.sqFoot / 43560;
          $scope.sqMeter = $scope.sqFoot * (0.09290304);
        }
        catch (e) {
          console.log(e);
        }
        ;
      }
    }])

  .controller('unitModeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {

      $scope.options = ['Inch',
        'Meter',
        'KM',
        'Yard',
        'Foot',
        'Mile'];
      $scope.form = {input: '', output: ''};
      $scope.inputUnit = 'KM';
      $scope.outputUnit = 'Mile';
      var exp;
      $scope.update = function(obj, flag) {

        try {
          if (flag == 1) $scope.inputUnit = obj;
          if (flag == 2) $scope.outputUnit = obj;
          exp = ($scope.form.input + ' ' + $scope.inputUnit + ' to ' + $scope.outputUnit).toLowerCase();
          $scope.form.output = math.eval(exp).toString();
        }
        catch (e) {
          console.log(e);
        }
        ;
      }


    }])
