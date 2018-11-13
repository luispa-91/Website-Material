/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angular')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('APP_INFO',{
        'ID': 349,
        'name': 'Bajo Aqua',
        'directory': 'bajoaqua',
        'website_url': 'https://bajoaqua.com/',
        'international_shipping': true,
        'gateway': {
            'url': 'https://emcom.oneklap.com:2233',
            'applicationName': 'BAJOAQUA',
            'applicationPassword': 'BAFTTJUN1218%'
        },
        'bac': {
            'key_id': '',
            'processor_id': '',
            'applicationPassword': ''
        },
        'chat': {
            'order': 'facebook',
            'facebook': '589233844432176',
            'whatsapp': '',
            'shortMessage': 'Envíenos un mensaje',
            'longMessage': 'Necesita ayuda? Escríbanos y estaremos en contacto pronto'
        },
        'instagram': {
            'account': 'bajoaqua',
            'mode': 'half'
          }
      });
})();
