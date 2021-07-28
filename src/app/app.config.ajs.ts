// @ts-ignore
export default function(appModule) {
  // @ts-ignore
  appModule.config(function ($routeProvider) {
    $routeProvider.
    when('/phones', {
      template: '<phone-list></phone-list>'
    }).
    when('/phones/:phoneId', {
      template: '<phone-detail></phone-detail>'
    }).
    otherwise('/phones');
  });
}
