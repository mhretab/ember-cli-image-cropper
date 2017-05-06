/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-image-cropper',

  options: {
    nodeAssets: {
      cropper: function() {
        return {
          enabled: !process.env.EMBER_CLI_FASTBOOT,
          srcDir: 'dist',
          import: [
            'cropper.min.js',
            'cropper.min.css'
          ],
        };
      }
    }
  }
};
