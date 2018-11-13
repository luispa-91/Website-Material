/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angular')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('APP_INFO',{
        'ID': 234,
        'name': 'Caricaco Beachwear',
        'directory': 'caricacobeachwear',
        'website_url': 'https://caricacobeachwear.com/',
        'international_shipping': true,
        'gateway': {
            'url': 'https://emcom.oneklap.com:2241',
            'applicationName': 'CARICACO',
            'applicationPassword': 'CCFTTJUL1818%'
        },
        'bac': {
            'key_id': '',
            'processor_id': '',
            'applicationPassword': ''
        },
        'chat': {
            'order': 'facebook,whatsapp',
            'facebook': '754771351335371',
            'whatsapp': '+50670125006',
            'shortMessage': 'Envíenos un mensaje',
            'longMessage': 'Necesita ayuda? Escríbanos y estaremos en contacto pronto'
        },
        'instagram': {
            'account': 'caricacobeachwear',
            'mode': 'half'
          }
      });
})();
