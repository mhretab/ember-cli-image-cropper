/* jshint node: true */
'use strict';

const fastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-cli-image-cropper',

  options: {
    nodeAssets: {
      cropper() {
        return {
          vendor: {
            srcDir: 'dist',
            include: [
              'cropper.min.js',
              'cropper.min.css'
            ],
            processTree(input) {
              return fastbootTransform(input);
            }
          }
        };
      }
    }
  },

  included() {
    this._super.included.apply(this, arguments);

    this.import('vendor/cropper/cropper.min.css');
    this.import('vendor/cropper/cropper.min.js');
  }
};
