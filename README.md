## ⚠️ This repo is deprecated please use [ember-cropperjs](https://github.com/danielthall/ember-cropperjs) instead. ⚠️

# Ember CLI Image Cropper [![Build Status](https://travis-ci.org/mhretab/ember-cli-image-cropper.svg?branch=master)](https://travis-ci.org/mhretab/ember-cli-image-cropper)

This Ember CLI addon that wraps the jQuery [Cropper](https://github.com/fengyuanchen/cropper) into an ember component.

It requires cropper

## Installation

For ember-cli 1.13.1 and above. use ember-cli-image-cropper version 0.0.7 and beyond. To install it just use

```sh
# install via ember-cli
$ ember install ember-cli-image-cropper

```

For ember-cli 0.2.7 and below use ember-cli-image-cropper version 0.0.6 and install it using:

```sh
# install via ember-cli
$ ember install:addon ember-cli-image-cropper
```

## Usage

The component initialises cropper when the image is loaded. To use it, extend the component and change the default to your preference. Currently no methods are provided by the addon. To do this you have to use the default cropper methods. For more about available methods checkout [Cropper](https://github.com/fengyuanchen/cropper).

An example below show how to extend the component and get the cropped canvas area.

### Example:

```javascript
// app/components/avatar-cropper.js
import ImageCropper from "ember-cli-image-cropper/components/image-cropper";

export default ImageCropper.extend({
  //override default options of cropper
  aspectRatio: 1,
  minCropBoxWidth: 100,
  minCropBoxHeight: 100,
  cropperContainer: ".cropper-container > img",
  previewClass: ".img-preview",
  croppedAvatar: null,

  actions: {
    getCroppedAvatar() {
      var croppedImage = this.get("cropper").getCroppedCanvas();
      this.set("croppedAvatar", croppedImage);
    },
  },
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
viewMode: 0, // default crop box is within the container other options (1,2,3) check cropper documentation for more.
dragMode: 'crop',  // default crop. other options are 'move' and 'none'
responsive: true,
checkCrossOrigin: true,
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
zoomOnWheel: true,
zoomOnTouch: true,
toggleDragModeOnDblclick: true,
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
ready: null,
data: null
```

For more options and methods, please check cropper's [README](https://github.com/fengyuanchen/cropper#options_).
