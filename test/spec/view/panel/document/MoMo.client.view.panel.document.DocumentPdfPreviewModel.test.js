/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.panel.document.DocumentPdfPreviewModel']);

describe('MoMo.client.view.panel.document.DocumentPdfPreviewModel', function() {
  var DocumentPdfPreviewModel;

  beforeEach(function() {
      DocumentPdfPreviewModel = Ext.create('MoMo.client.view.panel.document.DocumentPdfPreviewModel');
  });

  afterEach(function() {
      DocumentPdfPreviewModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.panel.document.DocumentPdfPreviewModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(DocumentPdfPreviewModel).to.be.a(MoMo.client.view.panel.document.DocumentPdfPreviewModel);
        });
    });
});

