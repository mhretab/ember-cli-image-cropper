# Ember CLI Image Cropper [![Build Status](https://travis-ci.org/mhretab/ember-cli-image-cropper.svg?branch=master)](https://travis-ci.org/mhretab/ember-cli-image-cropper)

This Ember CLI addon that wraps the jQuery [Cropper](https://github.com/fengyuanchen/cropper) into an ember component. 

It requires cropper and jQuery [ImagesLoaded](https://github.com/desandro/imagesloaded) 

## Installation


```sh
# install via ember-cli
$ ember install:addon ember-cli-image-cropper
```

## Usage

The component initialises cropper when the image is loaded. To use it, extend the component and change the default to your preference. Currently no methods are provided by the addon. To do this you have to use the default cropper methods. For more about available methods checkout [Cropper](https://github.com/fengyuanchen/cropper).

An example below show how to extend the component and get the croped canvas area.

### Example:

```javascript
// app/components/avatar-cropper.js
import imageCropper from 'ember-cli-image-cropper/components/image-cropper';

export default imageCropper.extend({
  //override default options of cropper
  aspectRatio: 1,
  minCropBoxWidth: 100,
  minCropBoxHeight: 100,
  cropperContainer: '.cropper-container > img',
  previewClass: '.img-preview',
  croppedAvatar: null,

  actions: {
    getCroppedAvatar: function() {
      var container = this.$(this.get('cropperContainer'));
      var croppedImage = container.cropper('getCroppedCanvas');
      this.set('croppedAvatar', croppedImage);
    }
  }
});
```

please note that in the extended component's template you should have an image tag inside a DOM element with a class `'cropper-container'` Other wise, you chould also override the default `cropperContainer : '.cropper-container > img'`

### Default Options

Cropper's default options are rewritten in the component as following.

```javascript
previewClass: '.cropper-preview',
cropperContainer: '.cropper-container > img',
aspectRatio: 16 / 9,
crop: null,
strict: true,
responsive: true,
checkImageOrigin: true,
background: true,
modal: true,
guides: true,
highlight: true,
autoCrop: true,
autoCropArea: 0.8,
dragDrop: true,
movable: true,
resizable: true,
zoomable: true,
mouseWheelZoom: true,
touchDragZoom: true,
rotateable: true,
minContainerWidth: 200,
minContainerHeight: 100,
minCropBoxWidth: 0,
minCropBoxHeight: 0,
build: null,
built: null,
dragStart: null,
dragMove: null,
dragEnd: null,
zoomin: null,
zoomout: null,
```

NOTE: This is a fresh project so feel free to report issues, discussion and PRs
