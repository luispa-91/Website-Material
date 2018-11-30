/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angular')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('APP_INFO',{
        'ID': 406,
        'name': 'Xtreme',
        'directory': 'extremecr',
        'website_url': 'https://extremecr.com/checkout/confirmed',
        'international_shipping': true,
        'gateway': {
            'url': 'http://www.fttserver.com:4217',
            'applicationName': 'SHOPS_TEST',
            'applicationPassword': 'Shops082017%'
        },
        'bac': {
            'key_id': '11085755',
            'processor_id': '48190014',
            'applicationPassword': 'HCdBgnzVDjKRJu3HJgtQwJK7jtpt595g'
        },
        'chat': {
            'order': 'facebook,whatsapp',
            'facebook': '288366011262888',
            'whatsapp': '+50684563736',
            'shortMessage': 'Envíenos un mensaje',
            'longMessage': 'Necesita ayuda? Escríbanos y estaremos en contacto pronto'
        },
        'instagram': {
            'account': 'blumeapps',
            'mode': 'half'
          }
      });
})();
