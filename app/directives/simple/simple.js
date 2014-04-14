/**
 * @module directives.simpleStatic
 */
angular.module('directives.simple', [])
    .directive('simpleStatic', function () {
        'use strict';

        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'directives/simple/simple-static.tpl.html',
            scope: true
        }
    })

    .directive('simpleAttributes', function () {
        'use strict';

        var linkFn = function (scope, elem, attrs, ctrl) {
            attrs.$observe('type', function (value) {
                elem.addClass(value);
            });
        };

        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'directives/simple/simple-attributes.tpl.html',
            scope: true,
            link: linkFn
        }
    })

    .directive('simpleScope', function () {
        'use strict';

        var scopeObj = {
            type: '@',
            msg: '@'
        };

        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'directives/simple/simple-scope.tpl.html',
            scope:scopeObj
        }
    })

    .directive('simpleBehaviour', function () {
        'use strict';

        var scopeObj = {
            type: '@',
            alterType: '@'
        };

        var linkFn = function (scope, elem, attrs, ctrl) {
            elem.on('click', function () {
                $(this).removeClass(attrs.type);
                $(this).addClass(attrs.alterType);

                $(this).find('.panel-body').text('Activated')
            });
        };

        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'directives/simple/simple-behaviour.tpl.html',
            scope: scopeObj,
            link: linkFn
        }
    })

    .directive('simpleData', function () {
        'use strict';

        var scopeObj = {
            isActive: '='
        };

        var linkFn = function (scope, elem, attrs, ctrl) {
            scope.$watch('isActive', function (value) {
                if (value === false) {
                    elem.fadeOut(2500);
                }
            });

            elem.on('click', function () {
                scope.$apply(function () {
                    scope.isActive = !scope.isActive;
                });
            })
        };

        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'directives/simple/simple-data.tpl.html',
            scope: scopeObj,
            link: linkFn
        }
    });
