/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.panel.document.DocumentPdfPreviewController']);

describe('MoMo.client.view.panel.document.DocumentPdfPreviewController', function() {
  var DocumentPdfPreviewController;

  beforeEach(function() {
      DocumentPdfPreviewController = Ext.create('MoMo.client.view.panel.document.DocumentPdfPreviewController');
  });

  afterEach(function() {
      DocumentPdfPreviewController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.panel.document.DocumentPdfPreviewController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(DocumentPdfPreviewController).to.be.a(MoMo.client.view.panel.document.DocumentPdfPreviewController);
        });
    });
});

