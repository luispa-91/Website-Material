/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angular')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('APP_INFO',{
        'ID': 333,
        'name': 'Ben & Valho',
        'directory': 'benvalho',
        'website_url': 'https://benvalho.com/checkout/confirmed',
        'international_shipping': true,
        'gateway': {
            'url': 'https://emcom.oneklap.com:2235',
            'applicationName': 'BENYVALHO',
            'applicationPassword': 'BVFTTJUN2918%'
        },
        'bac': {
            'key_id': '',
            'processor_id': '',
            'applicationPassword': ''
        },
        'chat': {
            'order': 'facebook',
            'facebook': '1402394166726072',
            'whatsapp': '',
            'shortMessage': 'Envíenos un mensaje',
            'longMessage': 'Necesita ayuda? Escríbanos y estaremos en contacto pronto'
        },
        'instagram': {
            'account': 'ben.valho',
            'mode': 'half'
          }
      });
})();
