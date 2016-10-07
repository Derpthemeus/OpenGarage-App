/* global angular */

angular.module( "opengarage.controllers", [ "opengarage.utils" ] )

	.controller( "ControllerSelectCtrl", function( $scope, $state, $rootScope, $filter, $ionicHistory ) {
		$scope.data = {};

		$scope.setController = function( index ) {
			$rootScope.activeController = $rootScope.controllers[ index ];

			$ionicHistory.nextViewOptions( {
				historyRoot: true
			} );

			$state.go( "app.home" );
		};

		// Update each time the page is viewed
		$scope.$on( "$ionicView.beforeEnter", function() {
			if ( $rootScope.activeController ) {
				$scope.data.pageTitle = "Switch Controller";
			} else {
				$scope.data.pageTitle = "Select Controller";
			}
		} );
	} )

	.controller( "SettingsCtrl", function() {
	} )

	.controller( "HelpCtrl", function() {
	} )

	.controller( "MenuCtrl", function( $scope, $ionicSideMenuDelegate, Utils ) {

		$scope.showAddController = Utils.showAddController;

		// Function to close the menu which is fired after a side menu link is clicked.
		// This is done instead of using the menu-close directive to preserve the root history stack
	    $scope.closeMenu = function() {
            $ionicSideMenuDelegate.toggleLeft( false );
	    };
	} )

	.controller( "HomeCtrl", function() {
	} );
