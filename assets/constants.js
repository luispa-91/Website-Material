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
        'website_url': 'https://basicbcr.com/',
        'international_shipping': true,
        'use_map': false,
        'gateway': {
            'url': 'https://www.fttserver.com:2183',
            'applicationName': 'KILLERQUEEN',
            'applicationPassword': 'KQFTTDIC0717%'
        },
        'bac': {
            'key_id': '7185696',
            'processor_id': 'freaks2',
            'applicationPassword': 'CAwDP8vg6wbxP42FS775r6Q8RfB2j2Ep'
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
