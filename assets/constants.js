/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angular')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('APP_INFO',{
        'ID': 74,
        'name': 'Blume Demo',
        'directory': 'demoshop',
        'website_url': 'https://website2.madebyblume.com/',
        'gateway': {
            'url': 'http://www.fttserver.com:4217',
            'applicationName': 'SHOPS_TEST',
            'applicationPassword': 'Shops082017%'
        },
        'chat': {
            'order': 'facebook,whatsapp',
            'facebook': '754771351335371',
            'whatsapp': '+50670125006'
        },
        'instagram': {
            'account': 'blumeapps',
            'mode': 'half'
          }
      });
})();
