import Ember from 'ember';
import Cropper from 'cropperjs';

export default Ember.Component.extend({
  //cropper configs
  previewClass: '.cropper-preview',
  cropperContainer: '.cropper-container > img',
  aspectRatio: 16 / 9,
  crop: null,
  viewMode: 0,
  dragMode: 'crop',
  responsive: true,
  center: true,
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
  cropBoxMovable: true,
  cropBoxResizable: true,
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
  //initialize cropper on did insert element
  didInsertElement(){
    let properties = this.getProperties('cropperContainer', 
      'aspectRatio', 'crop', 'previewClass', 'viewMode', 
      'dragMode', 'responsive', 'center', 'checkCrossOrigin', 
      'toggleDragModeOnDbclick', 'background', 'modal', 'guides', 
      'highlight', 'autoCrop', 'autoCropArea', 'dragDrop', 
      'movable', 'resizable', 'zoomable', 'zoomOnWheel', 
      'zoomOnTouch', 'cropBoxMovable', 'cropBoxResizable', 
      'rotateable', 'minContainer', 'minContainerHeight', 
      'minCropBoxWidth', 'minCropBoxHeight', 'build',
      'built', 'dragStart', 'dragMove', 'dragEnd', 'zoomin', 
      'zoomout');
    properties['preview'] = properties['previewClass'];
    delete properties['previewClass'];
    let image = document.querySelector(
      properties['cropperContainer']);
    this.set('cropper', new Cropper(image, properties));
  },
  willDestroyElement() {
    let cropper = this.get('cropper');
    if(cropper['data']) {
      cropper.destroy();
    }
  }
});
