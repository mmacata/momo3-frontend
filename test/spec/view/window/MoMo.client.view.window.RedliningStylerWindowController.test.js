/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.window.RedliningStylerWindowController']);

describe('MoMo.client.view.window.RedliningStylerWindowController', function() {
  var RedliningStylerWindowController;

  beforeEach(function() {
      RedliningStylerWindowController = Ext.create('MoMo.client.view.window.RedliningStylerWindowController');
  });

  afterEach(function() {
      RedliningStylerWindowController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.window.RedliningStylerWindowController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(RedliningStylerWindowController).to.be.a(MoMo.client.view.window.RedliningStylerWindowController);
        });
    });
});

