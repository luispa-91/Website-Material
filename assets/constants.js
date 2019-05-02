/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angular')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('APP_INFO',{
        'ID': 373,
        'name': 'Loa House Store',
        'directory': 'loahousestore',
        'website_url': 'https://loahousecr.com/',
        'international_shipping': false,
        'use_map': false,
        'gateway': {
            'url': 'https://emcom.oneklap.com:2197',
            'applicationName': 'LOAHOUSE',
            'applicationPassword': 'LOAHFTT180319%'
        },
        'bac': {
            'key_id': '',
            'processor_id': '',
            'applicationPassword': ''
        },
        'chat': {
            'order': 'facebook,whatsapp',
            'facebook': '234367263261194',
            'whatsapp': '+50688984359',
            'shortMessage': 'Envíenos un mensaje',
            'longMessage': 'Necesita ayuda? Escríbanos y estaremos en contacto pronto'
        },
        'instagram': {
            'account': 'loahouse_store',
            'mode': 'half'
          }
      });
})();
