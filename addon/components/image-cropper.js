import Ember from 'ember';

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
  initImageCropper: Ember.on('didRender', function() {
    var _this = this;
      _this.$(_this.get('cropperContainer')).cropper({
        aspectRatio: _this.get('aspectRatio'),
        crop: _this.get('crop'),
        preview: _this.get('previewClass'),
        viewMode: _this.get('viewMode'),
        dragMode: _this.get('dragMode'),
        responsive: _this.get('responsive'),
        center: _this.get('center'),
        checkCrossOrigin: _this.get('checkCrossOrigin'),
        toggleDragModeOnDblclick: _this.get('toggleDragModeOnDblclick'),
        background: _this.get('background'),
        modal: _this.get('modal'),
        guides: _this.get('guides'),
        highlight: _this.get('highlight'),
        autoCrop: _this.get('autoCrop'),
        autoCropArea: _this.get('autoCropArea'),
        dragDrop: _this.get('dragDrop'),
        movable: _this.get('movable'),
        resizable: _this.get('resizable'),
        zoomable: _this.get('zoomable'),
        zoomOnWheel: _this.get('zoomOnWheel'),
        zoomOnTouch: _this.get('zoomOnTouch'),
        cropBoxMovable: _this.get('cropBoxMovable'),
        cropBoxResizable: _this.get('cropBoxResizable'),
        rotateable: _this.get('rotateable'),
        minContainerWidth: _this.get('minContainerWidth'),
        minContainerHeight: _this.get('minContainerHeight'),
        minCropBoxWidth: _this.get('minCropBoxWidth'),
        minCropBoxHeight: _this.get('minCropBoxHeight'),
        build: _this.get('build'),
        built: _this.get('built'),
        dragStart: _this.get('dragStart'),
        dragMove: _this.get('dragMove'),
        dragEnd: _this.get('dragEnd'),
        zoomin: _this.get('zoomin'),
        zoomout: _this.get('zoomout')
      });
  }),

  teardownCropper: Ember.on('willDestroyElement', function() {
    let cropperElment = this.$(this.get('cropperContainer'));
    if(cropperElment.data('cropper')) {
      cropperElment.cropper('destroy');
    }
  })
});
