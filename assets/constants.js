/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angular')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('APP_INFO',{
        'ID': 255,
        'name': 'Francesca Arati',
        'directory': 'francescaarati',
        'website_url': 'https://francescaarati.com/',
        'international_shipping': true,
        'gateway': {
            'url': 'https://www.fttserver.com:2191',
            'applicationName': 'ARATI',
            'applicationPassword': 'FAFTTENE0218%'
        },
        'bac': {
            'key_id': '',
            'processor_id': '',
            'applicationPassword': ''
        },
        'chat': {
            'order': 'facebook',
            'facebook': '1538314189827348',
            'whatsapp': '',
            'shortMessage': 'Envíenos un mensaje',
            'longMessage': 'Necesita ayuda? Escríbanos y estaremos en contacto pronto'
        },
        'instagram': {
            'account': 'francesca_arati',
            'mode': 'half'
          }
      });
})();
