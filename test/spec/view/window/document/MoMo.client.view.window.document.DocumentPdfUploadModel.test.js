/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.window.document.DocumentPdfUploadModel']);

describe('MoMo.client.view.window.document.DocumentPdfUploadModel', function() {
  var DocumentPdfUploadModel;

  beforeEach(function() {
      DocumentPdfUploadModel = Ext.create('MoMo.client.view.window.document.DocumentPdfUploadModel');
  });

  afterEach(function() {
      DocumentPdfUploadModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.window.document.DocumentPdfUploadModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(DocumentPdfUploadModel).to.be.a(MoMo.client.view.window.document.DocumentPdfUploadModel);
        });
    });
});

