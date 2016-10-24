angular.module('App.directives', [])

.directive('myCard', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'widgets/my-card.html',
    //transclude: true,
    scope: {
      description: "@description",
      image: "@image",
      name: "@name",
      href: "@href"
    }
  }
})

;