/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angular')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('APP_INFO',{
        'ID': 334,
        'name': 'Apuyantra',
        'directory': 'apuyantrasa',
        'website_url': 'https://apuyantra.com/',
        'international_shipping': true,
        'gateway': {
            'url': 'https://www.fttserver.com:2181',
            'applicationName': 'APUYANTRA',
            'applicationPassword': 'APFTTDIC0117%'
        },
        'bac': {
            'key_id': '',
            'processor_id': '',
            'applicationPassword': ''
        },
        'chat': {
            'order': 'facebook,whatsapp',
            'facebook': '119306651581655',
            'whatsapp': '+50683368269',
            'shortMessage': 'Envíenos un mensaje',
            'longMessage': 'Necesita ayuda? Escríbanos y estaremos en contacto pronto'
        },
        'instagram': {
            'account': 'apuyantra',
            'mode': 'full'
          }
      });
})();
