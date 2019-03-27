/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angular')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('APP_INFO',{
        'ID': 268,
        'name': 'Threesixty Skateshop',
        'directory': 'threesixty',
        'website_url': 'https://threesixtyskateshop.com/',
        'international_shipping': false,
        'use_map': false,
        'gateway': {
            'url': 'https://emcom.oneklap.com:2199',
            'applicationName': '360SKATESHOP',
            'applicationPassword': '360SSFTT190319%'
        },
        'bac': {
            'key_id': '',
            'processor_id': '',
            'applicationPassword': ''
        },
        'chat': {
            'order': 'facebook,whatsapp',
            'facebook': '192480105228',
            'whatsapp': '+50684275819',
            'shortMessage': 'Envíenos un mensaje',
            'longMessage': 'Necesita ayuda? Escríbanos y estaremos en contacto pronto'
        },
        'instagram': {
            'account': 'threesixtyskateshop',
            'mode': 'half'
        }
      });
})();
