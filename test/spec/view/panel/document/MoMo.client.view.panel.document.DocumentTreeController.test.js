/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.panel.document.DocumentTreeController']);

describe('MoMo.client.view.panel.document.DocumentTreeController', function() {
  var DocumentTreeController;

  beforeEach(function() {
      DocumentTreeController = Ext.create('MoMo.client.view.panel.document.DocumentTreeController');
  });

  afterEach(function() {
      DocumentTreeController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.panel.document.DocumentTreeController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(DocumentTreeController).to.be.a(MoMo.client.view.panel.document.DocumentTreeController);
        });
    });
});

