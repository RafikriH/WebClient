/* @ngInject */
function headerSecuredMobile() {
    return {
        restrict: 'E',
        replace: true,
        controller: 'HeaderController',
        templateUrl: 'templates/ui/header/headerSecuredMobile.tpl.html'
    };
}
export default headerSecuredMobile;
