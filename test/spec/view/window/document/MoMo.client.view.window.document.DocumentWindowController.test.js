/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.window.document.DocumentWindowController']);

describe('MoMo.client.view.window.document.DocumentWindowController', function() {
  var DocumentWindowController;

  beforeEach(function() {
      DocumentWindowController = Ext.create('MoMo.client.view.window.document.DocumentWindowController');
  });

  afterEach(function() {
      DocumentWindowController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.window.document.DocumentWindowController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(DocumentWindowController).to.be.a(MoMo.client.view.window.document.DocumentWindowController);
        });
    });
});

