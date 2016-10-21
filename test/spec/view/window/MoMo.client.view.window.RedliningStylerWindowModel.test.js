/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.window.RedliningStylerWindowModel']);

describe('MoMo.client.view.window.RedliningStylerWindowModel', function() {
  var RedliningStylerWindowModel;

  beforeEach(function() {
      RedliningStylerWindowModel = Ext.create('MoMo.client.view.window.RedliningStylerWindowModel');
  });

  afterEach(function() {
      RedliningStylerWindowModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.window.RedliningStylerWindowModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(RedliningStylerWindowModel).to.be.a(MoMo.client.view.window.RedliningStylerWindowModel);
        });
    });
});

