(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['Cropper'],
      __esModule: true,
    };
  }

  define('cropperjs', [], vendorModule);
})();
