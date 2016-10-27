angular.module('App.controllers', [])

.controller('BioCtrl', function($scope, appConstants) {
  $scope.coverPic = appConstants.coverPic;
  $scope.blogspotLink = appConstants.blogspotLink;
  $scope.facebookpageLink = appConstants.facebookpageLink;
  $scope.githubLink = appConstants.githubLink;
  $scope.linkedinLink = appConstants.linkedinLink;
  $scope.profilePic = appConstants.profilePic;
  $scope.title = "Bio";
  $scope.userName = appConstants.userName;
  $scope.userRole = appConstants.userRole;
})

.controller('CvCtrl', function($scope) {
  $scope.title = "CV";
})

.controller('HomeCtrl', function($scope, appConstants) {
  $scope.blogspotLink = appConstants.blogspotLink;
  $scope.facebookpageLink = appConstants.facebookpageLink;
  $scope.githubLink = appConstants.githubLink;
  $scope.profilePic = appConstants.profilePic;
  $scope.title = "Home";
  $scope.userName = appConstants.userName;
  $scope.userRole = appConstants.userRole;
})

.controller('MenuCtrl', function($scope) {
  $scope.title = "Menu";

  $scope.groups = []
  $scope.groups[0] = {
    name: "Info",
    icon: "ion-ios-information-outline",
    items: [
      { name: "Home", icon: "ion-ios-home-outline", href: "#app/home" }, 
      { name: "Bio", icon: "", href: "#app/bio" }, 
      { name: "Contact", icon: "", href: "#app/contact" }, 
      { name: "Follow", icon: "", href: "#app/follow" }
    ]
  };
  $scope.toggleGroup = function(group){
    if($scope.isGroupShown(group)){
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group){
    return $scope.shownGroup === group;
  };
})

.controller('ProjectListCtrl', function($scope) {
  $scope.title = "Project Category";

  $scope.projects = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('ProjectListsCtrl', function($scope) {
  $scope.title = "Project Categories";

  $scope.categoryRows = [
    [
      { id: 1, name: 'Web', description: 'on the first day of xmas we talk web', image: 'img/web.png' }, 
      { id: 2, name: 'Desktop', description: 'on the second day of xmas we talk desktop', image: 'img/desktop.png' }, 
      { id: 3, name: 'Mobile & Wearables', description: 'on the third day of xmas we talk mobile and wearables', image: 'img/mo-we.png' }
    ],
    [
      { id: 4, name: 'Developer Tools', description: 'on the fourth day of xmas we talk developer tools', image: 'img/dev-tools.png' }, 
      { id: 5, name: 'Games & Graphics', description: 'on the fifth day of xmas we talk games and graphics', image: 'img/games-graphs.png' }, 
      { id: 6, name: 'Operating System & Machine Hardware', description: 'on the sixth day of xmas we talk OS and hardware', image: 'img/os-mach.png' }
    ],
    [
      { id: 7, name: 'Robotics & IoT', description: 'on the seventh day of xmas we talk robotics and IoT', image: 'img/bot-iot.png' }, 
      { id: 8, name: 'AI', description: 'on the eight day of xmas we talk AI', image: 'img/ai.png' }, 
      { id: 9, name: 'IT Infrastructure', description: 'on the ninth day of xmas we talk IT', image: 'img/it.png' }
    ],
    [
      { id: 10, name: 'Data', description: 'on the tenth day of xmas we talk data', image: 'img/data.png' }, 
      { id: 11, name: 'Computer Science Theory', description: 'on the eleventh day of xmas we talk computer science theory', image: 'img/cs.png' }, 
      { id: 12, name: 'Anything Can Happen', description: 'on the twelfth day of xmas we talk anything', image: 'img/any.png' }
    ]
  ];
})

;