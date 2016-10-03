(function(){
	'use strict';
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope){		
			$scope.message = "Hello!";

			$scope.CheckMenu = function() {
				if ($scope.menu) {
					var MenuString = $scope.menu.trim();
					
					while (MenuString.endsWith(',') || MenuString.endsWith(' ')) {
						MenuString = MenuString.slice(0,-1)
					};
					while (MenuString.startsWith(',') || MenuString.startsWith(' ')) {
						MenuString = MenuString.slice(1)
					};
					while (MenuString.includes(' ')) {
						MenuString = MenuString.replace(/ /g, '')
					};
					while (MenuString.includes(',,')) {
						MenuString = MenuString.replace(/,,/g, ',')
					};
					console.log(MenuString);
					if (MenuString == '') {
						$scope.message = "Please enter data first";
					}
					else {
						var MenuCount = MenuString.split(",").length;
						
						if (MenuCount <= 3) {
							$scope.message = "Enjoy!";
						}
						else {
							$scope.message = "Too much!!";
						}
					}	
				}
				else {
						$scope.message = "Please enter data first";
					}
			};	
	};





})();