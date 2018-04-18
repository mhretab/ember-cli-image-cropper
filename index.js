var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');
var fastbootTransform = require('fastboot-transform');



module.exports = {
  name: 'ember-cli-image-cropper',
  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/cropper.min.js');
    this.import('vendor/cropper.min.css');
    this.import('vendor/shims/cropperjs.js');
  },

  treeForVendor(vendorTree) {
    var cropperTree = fastbootTransform(new Funnel(path.join(this.project.root, 'node_modules', 'cropperjs/dist'), {
      files: ['cropper.min.js', 'cropper.min.css'],
    }));

    return new MergeTrees([vendorTree, cropperTree]);
  },
}
