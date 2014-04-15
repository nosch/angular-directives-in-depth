/**
 * @module application
 */
angular.module('application', [
        'application.config'
    ])

    .run(function ($rootScope, $state, $stateParams) {
        'use strict';

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    })

    .controller('NavigationCtrl', function ($scope, NAV_ITEMS) {
        'use strict';

        $scope.navItems = NAV_ITEMS;
    })

    .controller('MainCtrl', function () {
        'use strict';

        this.heading = 'Angular JS';
        this.subheading = 'Directives In Depth';
    })

    .controller('SimpleCtrl', function () {
        'use strict';

        this.type01 = 'panel-warning';
        this.type02 = 'panel-success';
        this.type03 = 'panel-info';

        this.alterType = 'panel-danger';

        this.msg = 'Hello?!';

        this.isActive = true;
    });
