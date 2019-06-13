/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angular')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('APP_INFO',{
        'ID': 420,
        'name': 'Apartado Creativo',
        'directory': 'apartadocreativo',
        'website_url': 'https://apartadocreativo.com/checkout/confirmed',
        'international_shipping': true,
        'use_map': false,
        'gateway': {
            'url': 'http://www.fttserver.com:4217',
            'applicationName': 'SHOPS_TEST',
            'applicationPassword': 'Shops082017%'
        },
        'bac': {
            'key_id': '7185696',
            'processor_id': 'freaks2',
            'applicationPassword': 'CAwDP8vg6wbxP42FS775r6Q8RfB2j2Ep'
        },
        'chat': {
            'order': 'facebook',
            'facebook': '358257024262604',
            'whatsapp': '',
            'shortMessage': 'Envíenos un mensaje',
            'longMessage': 'Necesita ayuda? Escríbanos y estaremos en contacto pronto'
        },
        'instagram': {
            'account': 'apartado_creativo',
            'mode': 'half'
          }
      });
})();
