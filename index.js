/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-image-cropper',

  included: function(app) {
      this._super.included(app);

      app.import(app.bowerDirectory + '/cropper/dist/cropper.min.js');
      app.import(app.bowerDirectory + '/cropper/dist/cropper.min.css');
  }
};
