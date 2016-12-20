/* ============================================================
 * File: main.js
 * Main Controller to set global scope variables. 
 * ============================================================ */

angular.module('app')
    .controller('AppCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {

        // App globals
        $scope.app = {
            name: 'Chieze Franklin',
            description: 'Admin Dashboard UI kit',
            layout: {
                menuPin: false,
                menuBehind: false,
                theme: 'pages/css/pages.css'
            },
            author: 'Chieze Franklin'
        }

        $scope.menu = {
            info: {
                name: 'Info',
                icon: "ion-ios-information-outline",
                items: [
                  { name: "Bio", icon: "ion-ios-person-outline", href: "#app/bio" }, 
                  { name: "Contact", icon: "ion-ios-email-outline", href: "#app/contact" }, 
                  { name: "Follow", icon: "ion-social-twitter-outline", href: "#app/follow" }
                ]
            }
        };
        // Checks if the given state is the current state
        $scope.is = function(name) {
            return $state.is(name);
        }

        // Checks if the given state/child states are present
        $scope.includes = function(name) {
            return $state.includes(name);
        }

        // Broadcasts a message to pgSearch directive to toggle search overlay
        $scope.showSearchOverlay = function() {
            $scope.$broadcast('toggleSearchOverlay', {
                show: true
            })
        }

    }]);


angular.module('app')
    /*
        Use this directive together with ng-include to include a 
        template file by replacing the placeholder element
    */
    
    .directive('includeReplace', function() {
        return {
            require: 'ngInclude',
            restrict: 'A',
            link: function(scope, el, attrs) {
                el.replaceWith(el.children());
            }
        };
    })