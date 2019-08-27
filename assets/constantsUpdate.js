/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angular')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('APP_INFO',{
        'ID': 413,
        'name': 'Basic B',
        'directory': 'basicb',
        'website_url': 'https://basicbcr.com/checkout/confirmed',
        'international_shipping': true,
        'use_map': false,
        'gateway': {
            'url': 'https://emcom.oneklap.com:2183',
            'applicationName': 'KILLERQUEEN',
            'applicationPassword': 'KQFTT190319%'
        },
        'bac': {
            'key_id': '13767647',
            'processor_id': '70227584',
            'applicationPassword': 'J3X4G5ce4R885GWA2257FGsjEacU4F8P'
        },
        'chat': {
            'order': 'facebook',
            'facebook': '632907230384346',
            'whatsapp': '',
            'shortMessage': 'Envíenos un mensaje',
            'longMessage': 'Necesita ayuda? Escríbanos y estaremos en contacto pronto'
        },
        'instagram': {
            'account': 'basicbcr',
            'mode': 'half'
          }
      });
})();
