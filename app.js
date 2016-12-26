(function () {
    'use strict';

    angular.module('LunchCheck', [])

        .controller('LunchCheckController',LunchCheckController);
    function LunchCheckController($scope,$injector) {
            $scope.name = "";
            $scope.separator = ',';

            $scope.splitString = function () {
                var message = splitStringToList($scope.name,$scope.separator);
                $scope.showMessage = message;
            };


            function splitStringToList(string,separator) {
                var arrayofStrings = string.split(separator);
                var totalStringValue = arrayofStrings.length;
                var message ="";
                var count = 0;
                for(var i = 0;i< totalStringValue;i++){
                    if(arrayofStrings[i] == ""){
                       count++;
                    }
                }

                if (arrayofStrings[0] == "")
                {
                    message = "Please Enter data first";
                }
                else if((totalStringValue-count)<= 3){
                    message = "Enjoy!";
                }
                else {
                    message = "Too Much!";
                }
                return message;
            }
        console.log($injector.annotate(LunchCheckController));
        };
    console.log(LunchCheckController.toString());

})();