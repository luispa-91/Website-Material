/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angular')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('APP_INFO',{
        'ID': 238,
        'name': 'Killer Queen',
        'directory': 'killerqueen',
        'website_url': 'https://killerqueencr.com/checkout/confirmed',
        'international_shipping': true,
        'use_map': false,
        'gateway': {
            'url': 'https://emcom.oneklap.com:2183',
            'applicationName': 'KILLERQUEEN',
            'applicationPassword': 'KQFTT190319%'
        },
        'bac': {
            'key_id': '70227584',
            'processor_id': '13767647',
            'applicationPassword': 'J3X4G5ce4R885GWA2257FGsjEacU4F8P'
        },
        'chat': {
            'order': 'facebook',
            'facebook': '156575484397810',
            'whatsapp': '',
            'shortMessage': 'Envíenos un mensaje',
            'longMessage': 'Necesita ayuda? Escríbanos y estaremos en contacto pronto'
        },
        'instagram': {
            'account': 'killerqueencr',
            'mode': 'half'
          }
      });
})();
