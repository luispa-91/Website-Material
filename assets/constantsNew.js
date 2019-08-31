/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angular')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('APP_INFO',{
        'ID': 388,
        'name': '4Kids',
        'directory': 'fourkids',
        'website_url': 'https://4kidscr.com/checkout/confirmed',
        'international_shipping': true,
        'use_map': false,
        'gateway': {
            'url': 'https://emcom.oneklap.com:2249',
            'applicationName': 'FOURKIDS',
            'applicationPassword': 'FKSFTT220819%'
        },
        'bac': {
            'key_id': '7185696',
            'processor_id': 'freaks2',
            'applicationPassword': 'CAwDP8vg6wbxP42FS775r6Q8RfB2j2Ep'
        },
        'chat': {
            'order': 'facebook,whatsapp',
            'facebook': '818663648148348',
            'whatsapp': '+50670282113',
            'shortMessage': 'Envíenos un mensaje',
            'longMessage': 'Necesita ayuda? Escríbanos y estaremos en contacto pronto'
        },
        'instagram': {
            'account': '4.kids.cr',
            'mode': 'half'
          }
      });
})();
