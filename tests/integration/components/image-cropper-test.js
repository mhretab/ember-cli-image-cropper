import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('image-cropper', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);
  this.set('cropper', null);
  this.render(hbs`<div class="cropper-container">
                    <img src="http://rockntech.com.br/wp-content/uploads/2013/07/hermione-granger.jpg">
                  </div>
                  <div class="cropper-preview">
                  </div>
                  <div class="cropped-avatar">
                    {{croppedAvatar}}
                  </div>
                  {{image-cropper cropper=cropper}}`);
  assert.equal(this.get('cropper').url, 
    "http://rockntech.com.br/wp-content/uploads/2013/07/hermione-granger.jpg");
});
