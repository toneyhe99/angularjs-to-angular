'use strict';

angular.module('acornApp')
    .component('routeUnavailable', {
        transclude: true,
        templateUrl: './app/appjs/partials/core/routeUnavailable.html',
        controller: routeUnavailableCtrl
    });

function routeUnavailableCtrl ($window) {
    var ctrl = this;

    ctrl.goBack = function () {
        $window.history.back();
    };
}
