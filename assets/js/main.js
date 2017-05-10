/* ============================================================
 * File: main.js
 * Main Controller to set global scope variables. 
 * ============================================================ */

angular.module('app')
    .controller('AppCtrl', ['$scope', '$rootScope', '$state', '$http', function($scope, $rootScope, $state, $http) {

        // App globals
        $scope.app = {
            name: 'Chieze Franklin',
            description: 'Admin Dashboard UI kit',
            layout: {
                menuPin: false,
                menuBehind: false,
                theme: 'pages/css/pages.css'
            }
        }

        $scope.author = {
            name: 'Chieze Franklin',
            role: 'Software Developer',
            slogan: 'Coder by day, day-dreamer by night.'
        }

        $scope.menu = {
            info: {
                name: 'Info',
                icon: "ion-ios-information-outline",
                items: [
                  { name: "Bio", icon: "fa fa-user", ui_sref: "app.bio", href: "#app/bio" }, 
                  { name: "Contact", icon: "fa fa-envelope", ui_sref: "app.contact", href: "#app/contact" }, 
                  { name: "Social Media", icon: "fa fa-ellipsis-h", ui_sref: "app.follow", href: "#app/follow" }
                ]
            },
            projects: {
                name: 'Projects',
                icon: "ion-ios-information-outline",
                items: [
                  { name: "All", icon: "fa fa-list", ui_sref: "app.extra.projects", href: "" }, 
                  { name: "Web", icon: "fa fa-globe", ui_sref: "app.extra.projects.web", href: "" }, 
                  { name: "Desktop", icon: "fa fa-desktop", ui_sref: "app.contact", href: "" }, 
                  { name: "Mobile & Wearables", icon: "fa fa-mobile", ui_sref: "app.follow", href: "" },
                  { name: "Developer Tools", icon: "fa fa-wrench", ui_sref: "app.bio", href: "" }, 
                  { name: "Games & Graphics", icon: "fa fa-gamepad", ui_sref: "app.contact", href: "" }, 
                  { name: "Operating System & Machine Hardware", icon: "fa fa-linux", ui_sref: "app.follow", href: "" },
                  { name: "Robotics & IoT", icon: "fa fa-android", ui_sref: "app.bio", href: "" }, 
                  { name: "AI", icon: "fa fa-user-secret", ui_sref: "app.contact", href: "" }, 
                  { name: "IT Infrastructure", icon: "fa fa-server", ui_sref: "app.follow", href: "" },
                  { name: "Data", icon: "fa fa-database", ui_sref: "app.bio", href: "" }, 
                  { name: "Computer Science Theory", icon: "fa fa-bar-chart", ui_sref: "app.contact", href: "" }, 
                  { name: "Anything Can Happen", icon: "fa fa-random", ui_sref: "app.follow", href: "" }
                ]
            }
        };

        $scope.blog = 'https://chieze-franklin.gitbooks.io/blog/content/';
        $scope.boltBook = 'https://chieze-franklin.gitbooks.io/bolt-js/content/';
        $scope.boltGithub = 'https://github.com/Chieze-Franklin/Bolt.js';
        $scope.codeprojectLink = 'https://codeproject.com/Members/FranklinChieze';
        $scope.codeprojectName = 'FranklinChieze';
        $scope.facebookLink = 'https://facebook.com/franklin.chieze.5';
        $scope.facebookName = 'franklin.chieze.5';
        $scope.facebookpageLink = 'https://www.facebook.com/1990hackaholic';
        $scope.facebookpageName = '1990hackaholic';
        $scope.githubLink = 'https://github.com/Chieze-Franklin';
        $scope.githubName = 'Chieze-Franklin';
        $scope.googleplusLink = 'https://plus.google.com/+FranklinChieze';
        $scope.googleplusName = '+FranklinChieze';
        $scope.jambBotGithub = 'https://github.com/Chieze-Franklin/jamb-bot';
        $scope.jambBotWeb = 'http://jamb-bot.herokuapp.com';
        $scope.linkedinLink = 'https://ng.linkedin.com/pub/franklin-chieze/aa/10/b4b';
        $scope.linkedinName = 'franklin-chieze';
        $scope.researchgateLink = 'https://researchgate.com/profile/FrankChieze';
        $scope.researchgateName = 'FrankChieze';
        $scope.twitterLink = 'https://twitter.com/1990hackaholic';
        $scope.twitterName = '@1990hackaholic';

        $http.get("assets/json/calendar.json").then(function(success){
            success.data.forEach(function(event){
                if(!event.other.image) event.other.image = "assets/img/events/default.png";
            });
            $scope.events = success.data;
        }, function(error){
            console.log("error", error);
        });

        $scope.year = new Date().getFullYear();

        var timelineYearIndex = 0;
        var timelineYears = [2016, 2014, 2013, 2011, 2009, 2007, 2001, 1993, 1990];
        var timelineMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        $scope.timelineFilter;
        $scope.timeline = [];
        $scope.filteredTimeline = [];
        $scope.loadGivenYearTimeline = function(yr){
            $http.get("assets/json/" + yr + ".json").then(function(success){
                $scope.timeline.push({ text: yr, type: "year" });
                success.data.forEach(function(timepoint){
                    if(!timepoint.icon) timepoint.icon = "assets/img/timeline/default.png";
                    if(!timepoint.date) {
                        if(timepoint.month && timepoint.day && timepoint.month > 0) {
                            timepoint.date = timelineMonths[timepoint.month - 1] + " " + timepoint.day + ", " + yr;
                        }
                    }
                    if(!timepoint.color) {
                        if(timepoint.type && timepoint.type.toLowerCase() == "article") timepoint.color = "primary";
                        else if(timepoint.type && timepoint.type.toLowerCase() == "award") timepoint.color = "success";
                        else if(timepoint.type && timepoint.type.toLowerCase() == "career") timepoint.color = "danger";
                        else if(timepoint.type && timepoint.type.toLowerCase() == "education") timepoint.color = "info";
                        else if(timepoint.type && timepoint.type.toLowerCase() == "personal") timepoint.color = "default";
                        else if(timepoint.type && timepoint.type.toLowerCase() == "project") timepoint.color = "warning";
                        else timepoint.color = "default";
                    }
                    if(!timepoint.glyph) {
                        if(timepoint.type && timepoint.type.toLowerCase() == "article") timepoint.glyph = "fa fa-newspaper-o";
                        else if(timepoint.type && timepoint.type.toLowerCase() == "award") timepoint.glyph = "fa fa-trophy";
                        else if(timepoint.type && timepoint.type.toLowerCase() == "career") timepoint.glyph = "fa fa-wrench";
                        else if(timepoint.type && timepoint.type.toLowerCase() == "education") timepoint.glyph = "fa fa-graduation-cap";
                        else if(timepoint.type && timepoint.type.toLowerCase() == "personal") timepoint.glyph = "fa fa-user";
                        else if(timepoint.type && timepoint.type.toLowerCase() == "project") timepoint.glyph = "fa fa-tasks";
                        else timepoint.glyph = "fa fa-dot-circle-o";
                    }
                    $scope.timeline.push(timepoint);
                    $scope.filterTimeline($scope.timelineFilter);
                    timelineYearIndex = timelineYears.indexOf(yr) + 1;
                });
            }, function(error){
                console.log("error", error);
            });
        }
        $scope.loadCurrentYearTimeline = function(){
            $scope.loadGivenYearTimeline(timelineYears[0]);
        }
        $scope.loadPreviousYearTimeline = function(){
            $scope.loadGivenYearTimeline(timelineYears[timelineYearIndex]);
        }
        $scope.filterTimeline = function(type){
            $scope.filteredTimeline = [];
            $scope.timelineFilter = type;
            if (type) {
                $scope.timeline.forEach(function(timepoint){
                    if(timepoint.type == "year") {
                        //if the last entry is a year, remove it (cuz it's empty)
                        if($scope.filteredTimeline.length > 0){
                            var lastElem = $scope.filteredTimeline[$scope.filteredTimeline.length - 1];
                            if (lastElem.type == "year") $scope.filteredTimeline.pop(lastElem);
                        }
                        $scope.filteredTimeline.push(timepoint);
                    }
                    else if(timepoint.type) {
                        if(timepoint.type.toLowerCase() == type.toLowerCase()) $scope.filteredTimeline.push(timepoint);
                    }
                });
            }
            else {
                $scope.filteredTimeline = $scope.timeline;
            }

            //if the last entry is a year, remove it (cuz it's empty)
            if($scope.filteredTimeline.length > 0){
                var lastElem = $scope.filteredTimeline[$scope.filteredTimeline.length - 1];
                if (lastElem.type == "year") $scope.filteredTimeline.pop(lastElem);
            }
        }

        $scope.currentProjectGlypgh = "fa fa-list";
        $scope.currentProjectText = "All";
        $scope.projectFilter;
        $scope.projects = [];
        $scope.filteredProjects = [];
        $http.get("assets/json/projects.json").then(function(success){
            $scope.projects = [];
            success.data.forEach(function(project){
                if (!project.owner) project.owner = "Chieze-Franklin";
                if(project.repo) {
                    $http.get("https://api.github.com/repos/" + project.owner + "/" + project.repo).then(function(ghubSucc){
                        var ghubData = ghubSucc.data;
                        project.description = ghubData.description;
                        project.forks = ghubData.forks_count;//or .forks
                        project.stars = ghubData.stargazers_count;
                        project.watchers = ghubData.subscribers_count;

                        $scope.projects.push(project);console.log("projects>>>>>");console.log($scope.projects)
                        $scope.filterProjects($scope.projectFilter);
                    }, function(ghubErr){
                        console.log("ghubErr", ghubErr);
                    });
                }
            });
            $scope.projects = success.data;
        }, function(error){
            console.log("error", error);
        });
        $scope.filterProjects = function(text, icon, tag){
            $scope.currentProjectText = text;
            $scope.currentProjectGlypgh = icon;

            $scope.filteredProjects = [];
            $scope.projectFilter = tag;
            if (tag) {
                $scope.projects.forEach(function(project){
                    if(project.tags) {
                        for(index = 0; index < project.tags.length; index++) {
                            if(project.tags[index].toLowerCase() == tag.toLowerCase()) {
                                $scope.filteredProjects.push(project);
                                break;
                            }
                        }
                    }
                });
            }
            else {
                $scope.filteredProjects = $scope.projects;
            }
        }

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