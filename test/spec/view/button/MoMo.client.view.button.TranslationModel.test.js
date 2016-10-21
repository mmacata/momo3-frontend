/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.button.TranslationModel']);

describe('MoMo.client.view.button.TranslationModel', function() {
  var TranslationModel;

  beforeEach(function() {
      TranslationModel = Ext.create('MoMo.client.view.button.TranslationModel');
  });

  afterEach(function() {
      TranslationModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.button.TranslationModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(TranslationModel).to.be.a(MoMo.client.view.button.TranslationModel);
        });
    });
});

