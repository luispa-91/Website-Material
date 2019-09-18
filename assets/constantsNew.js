/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angular')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('APP_INFO',{
        'ID': 419,
        'name': 'Unu',
        'directory': 'unu',
        'website_url': 'https://unu.cr/checkout/confirmed',
        'international_shipping': true,
        'use_map': false,
        'gateway': {
            'url': 'https://emcom.oneklap.com:2275',
            'applicationName': 'UNU',
            'applicationPassword': 'UNUFTT120919%'
        },
        'bac': {
            'key_id': '7185696',
            'processor_id': 'freaks2',
            'applicationPassword': 'CAwDP8vg6wbxP42FS775r6Q8RfB2j2Ep'
        },
        'chat': {
            'order': 'facebook,whatsapp',
            'facebook': '2048281405386330',
            'whatsapp': '+50684211707',
            'shortMessage': 'Envíenos un mensaje',
            'longMessage': 'Necesita ayuda? Escríbanos y estaremos en contacto pronto'
        },
        'instagram': {
            'account': 'unu.cr',
            'mode': 'half'
          }
      });
})();
