/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.button.TranslationController']);

describe('MoMo.client.view.button.TranslationController', function() {
  var TranslationController;

  beforeEach(function() {
      TranslationController = Ext.create('MoMo.client.view.button.TranslationController');
  });

  afterEach(function() {
      TranslationController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.button.TranslationController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(TranslationController).to.be.a(MoMo.client.view.button.TranslationController);
        });
    });
});

