/**
 * @module application.config
 */
angular.module('application.config', [
        'directives.simple',
        'ui.router'
    ])

    .constant('NAV_ITEMS', [
        {title: 'Simple', state: 'simple', sref: 'simple'},
        {title: 'Tables', state: 'tables', sref: 'tables'}
    ])

    .config(function ($stateProvider, $urlRouterProvider) {
        'use strict';

        $urlRouterProvider.otherwise('/simple');

        $stateProvider
            .state('simple', {
                url: '/simple',
                templateUrl: 'view/simple-directives.tpl.html',
                controller: 'SimpleCtrl'
            })
            .state('tables', {
                url: '/tables',
                templateUrl: 'view/table-directives.tpl.html'
            });
    });
