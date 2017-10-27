(function ()
{
    'use strict';

    angular
        .module('app.services',
            [

            ]
        )
        .config(configuration)
        .factory('AuthenticationServices', AuthenticationServices);


    function configuration(msApiProvider, config) {

        //Service Registration
        msApiProvider.register('authentication.applicationRedirect.calendar', [config.securityApi.baseUrl + config.securityApi.redirectURL + config.plugins.calendar ]);
    }


    /**@ngInject */
    function AuthenticationServices($q, msApi, config, api){
        var applicationRedirect = {
            calendar    : {},
            chat        : {},
            messages    : {}
        };
        var service = {
            getCalednarRedirectURL : getCalednarRedirectURL
        };
        return service;

        //methods
        function getCalednarRedirectURL (){
            var deferred = $q.defer();

            if(applicationRedirect.calendar.redirect !== undefined){
                deferred.resolve(applicationRedirect.calendar.redirect)
            }
            else{
                api.application_redirect.get({applicationId:config.plugins.calendar},
                    function (response)
                    {
                        // Store the tiers
                        applicationRedirect.calendar.redirect = response.redirect;
                        console.log("http");
                        console.log(applicationRedirect);
                        // Resolve the prom ise
                        deferred.resolve(applicationRedirect.calendar.redirect);
                    },

                    // ERROR
                    function (response)
                    {
                        // Reject the promise
                        deferred.reject(response);
                    }
                );
            }

            return deferred.promise;
        }
    }
})();

