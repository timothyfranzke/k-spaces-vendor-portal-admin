(function ()
{
    'use strict';

    angular
        .module('app.calendar',
            [
                // 3rd Party Dependencies
                'ui.calendar',
                'app.configuration',
                'app.services',
                'ngSanitize'
            ]
        )
        .config(configuration);

    /** @ngInject */
    function configuration($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider, msApiProvider, config)
    {
        // State
        $stateProvider.state('app.calendar', {
            url      : '/calendar',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/apps/calendar/calendar.html',
                    controller : 'CalendarController as vm'
                }
            },
            bodyClass: 'calendar'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/apps/calendar');

        // Navigation
        msNavigationServiceProvider.saveItem('calendar', {
            title : 'Calendar',
            icon  : 'icon-calendar-today',
            state : 'app.calendar',
            weight: 1
        });
    }
})();
