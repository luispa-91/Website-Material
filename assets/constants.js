/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angular')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('APP_INFO',{
        'ID': 402,
        'name': 'Energym',
        'directory': 'energym',
        'website_url': 'https://matricula.energym.com/checkout/confirmed',
        'international_shipping': true,
        'gateway': {
            'url': 'http://www.fttserver.com:4217',
            'applicationName': 'SHOPS_TEST',
            'applicationPassword': 'Shops082017%'
        },
        'bac': {
            'key_id': '10973824',
            'processor_id': '70150506',
            'applicationPassword': 'n4EHghhdqaZBaC3h24N79nK5b54d94U6'
        },
        'chat': {
            'order': 'facebook',
            'facebook': '1473666186027430',
            'whatsapp': '',
            'shortMessage': 'Envíenos un mensaje',
            'longMessage': 'Necesita ayuda? Escríbanos y estaremos en contacto pronto'
        },
        'instagram': {
            'account': 'energym_cr',
            'mode': 'half'
          }
      });
})();
