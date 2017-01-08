'use strict';

/* Controllers */

angular.module('app')
    // Chart controller 
    .controller('GalleryCtrl', ['$scope', '$http', function($scope, $http) {

        $scope.init = function() {
            $('.item-slideshow > div').each(function() {
                var img = $(this).data('image');
                $(this).css({
                    'background-image': 'url(' + img + ')',
                    'background-size': 'cover'
                })
            });
        }
        $scope.showItemDetails = function(id) {
            var dlg = new DialogFx($('#' + id).get(0));
            dlg.toggle();
        }
        /*$scope.showFilters = function() {
            $('#filters').toggleClass('open');
        }*/

    }]);