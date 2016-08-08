/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-image-cropper',

  included: function(app) {
      this._super.included(app);

      if (process.env.EMBER_CLI_FASTBOOT !== 'true') {
        app.import(app.bowerDirectory + '/cropper/dist/cropper.min.js');
      }

      app.import(app.bowerDirectory + '/cropper/dist/cropper.min.css');
  }
};
