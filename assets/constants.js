/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angular')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('APP_INFO',{
        'ID': 337,
        'name': 'Pasoca',
        'directory': 'pasoca',
        'website_url': 'https://pasocacr.com',
        'international_shipping': true,
        'gateway': {
            'url': 'http://www.fttserver.com:4217',
            'applicationName': 'SHOPS_TEST',
            'applicationPassword': 'Shops082017%'
        },
        'bac': {
            'key_id': '8391346',
            'processor_id': '',
            'applicationPassword': 'jbYeT4VfN9QsP3X4vh3Kz5c9sv6q5yx9'
        },
        'chat': {
            'order': 'facebook,whatsapp',
            'facebook': '870130059710025',
            'whatsapp': '+50685701518',
            'shortMessage': 'Envíenos un mensaje',
            'longMessage': 'Necesita ayuda? Escríbanos y estaremos en contacto pronto'
        },
        'instagram': {
            'account': 'blumeapps',
            'mode': 'half'
          }
      });
})();
