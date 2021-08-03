// @ts-ignore
export default function(appModule) {
  // @ts-ignore
  appModule.config(function ($routeProvider) {
    $routeProvider.
    when('/', {
      template: '<route-unavailable></route-unavailable>'
    }).
    otherwise('<route-unavailable></route-unavailable>');
  });
}
