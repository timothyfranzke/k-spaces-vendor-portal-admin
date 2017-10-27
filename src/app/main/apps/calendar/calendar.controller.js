(function ()
{
    'use strict';

    angular
        .module('app.calendar')
        .controller('CalendarController', CalendarController);

    /** @ngInject */
    function CalendarController($mdDialog, $document, $sce, AuthenticationServices)
    {
        var vm = this;
        AuthenticationServices.getCalednarRedirectURL().then(
            //success
            function(response){
                console.log(response);
                vm.url = $sce.trustAsResourceUrl(response);
            }
        )
    }
})();
