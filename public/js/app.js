/**
 * Author : Shoukath Mohammed
 * Date   : 10/29/2016
 * Time   : 08:00 PM EST
 * Created with Sublime Text
 */

(function() {

  'use strict';

  angular
    .module('MBTA', [
      'ui.router',
      'pascalprecht.translate',
    ])
    .config(translateProvider);

  translateProvider.$inject = ['$translateProvider'];

  function translateProvider($translateProvider) {

  	// escapes special characters
    $translateProvider.useSanitizeValueStrategy('escape');

    // configures i18n
    $translateProvider.useStaticFilesLoader({
      prefix: 'i18n/app_',
      suffix: '.json'
    });

    // default language
    $translateProvider.preferredLanguage('en');
  };
})();