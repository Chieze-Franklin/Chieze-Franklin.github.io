/* ============================================================
 * File: config.js
 * Configure routing
 * ============================================================ */

angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',

        function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
            $urlRouterProvider
                .otherwise('/app/home');

            $stateProvider
                .state('app', {
                    abstract: true,
                    url: "/app",
                    templateUrl: "tpl/app.html"
                })

            .state('app.home', {
                url: '/home',
                templateUrl: 'tpl/apps/social/social.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                                'isotope',
                                'stepsForm'
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                            .then(function() {
                                return $ocLazyLoad.load([
                                    'pages/js/pages.social.min.js',
                                    'assets/js/apps/social/social.js'
                                ])
                            });
                    }]
                }
            })

            .state('app.bio', {
                url: '/bio',
                templateUrl: 'tpl/bio.html',
                controller: 'PortletCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'assets/js/controllers/portlets.js'
                        ]);
                    }]
                }
            })

            .state('app.contact', {
                url: '/contact',
                templateUrl: 'tpl/contact.html'
            })

            .state('app.follow', {
                url: '/follow',
                templateUrl: 'tpl/follow.html'
            })
            //Calendar app
            .state('app.calendar', {
                url: '/calendar',
                templateUrl: 'tpl/apps/calendar/calendar.html',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                                'switchery',
                                'moment-locales',
                                'interact'
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                            .then(function() {
                                return $ocLazyLoad.load([
                                    'pages/js/pages.calendar.min.js',
                                    'assets/js/apps/calendar/calendar.js'
                                ])
                            });
                    }]
                }
            })

            .state('app.cv', {
                url: '/cv',
                templateUrl: 'tpl/cv.html',
                controller: 'FormWizardCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                                'wizard'
                            ], {
                                insertBefore: '#lazyload_placeholder'
                            })
                            .then(function() {
                                return $ocLazyLoad.load('assets/js/controllers/forms_wizard.js');
                            });
                    }]
                }
            })
                
            // Extras
            .state('app.extra', {
                    url: '/extra',
                    template: '<div ui-view></div>'
                })
                .state('app.extra.projects', {
                    url: '/projects',
                    templateUrl: 'tpl/projects.html',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    'isotope',
                                    'codropsDialogFx',
                                    'metrojs',
                                    'owlCarousel',
                                    'noUiSlider'
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function() {
                                    return $ocLazyLoad.load('assets/js/controllers/gallery.js');
                                });
                        }]
                    }
                })
                .state('app.extra.timeline', {
                    url: '/timeline',
                    templateUrl: 'tpl/timeline.html'
                })

            // Extra - Others
            .state('access', {
                    url: '/access',
                    template: '<div class="full-height" ui-view></div>'
                })
                .state('access.404', {
                    url: '/404',
                    templateUrl: 'tpl/404.html'
                })
        }
    ]);