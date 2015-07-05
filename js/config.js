var app = angular.module('Control');
app.config(function ($routeProvider) {
        $routeProvider.
            when('/home', {templateUrl: 'partials/home.html', controller: 'homeCtrl'}).
            when('/myunsw', {templateUrl: 'partials/myunsw.html', controller: 'myunswCtrl'}).
            when('/classTimetable', {templateUrl: 'partials/classTimetable.html', controller: 'classTimetableCtrl'}).
            when('/eLearning', {templateUrl: 'partials/eLearning.html', controller: 'eLearningCtrl'}).
            when('/library', {templateUrl: 'partials/library.html', controller: 'libraryCtrl'}).
            when('/quickLinks', {templateUrl: 'partials/quickLinks.html', controller: 'quickLinksCtrl'}).
            when('/courses', {templateUrl: 'partials/courses.html', controller: 'coursesCtrl'}).
            when('/courseSelected', {templateUrl: 'partials/courseSelected.html', controller: 'courseSelectedCtrl'}).
            when('/programSelected', {templateUrl: 'partials/programSelected.html', controller: 'programSelectedCtrl'}).
            when('/streamSelected', {templateUrl: 'partials/streamSelected.html', controller: 'streamSelectedCtrl'}).
            when('/singleAwardRule', {templateUrl: 'partials/singleAwardRule.html', controller: 'singleAwardRuleCtrl'}).
            otherwise({redirectTo: '/home'});
    });