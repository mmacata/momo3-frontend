/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.panel.document.DocumentTreeModel']);

describe('MoMo.client.view.panel.document.DocumentTreeModel', function() {
  var DocumentTreeModel;

  beforeEach(function() {
      DocumentTreeModel = Ext.create('MoMo.client.view.panel.document.DocumentTreeModel');
  });

  afterEach(function() {
      DocumentTreeModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.panel.document.DocumentTreeModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(DocumentTreeModel).to.be.a(MoMo.client.view.panel.document.DocumentTreeModel);
        });
    });
});

