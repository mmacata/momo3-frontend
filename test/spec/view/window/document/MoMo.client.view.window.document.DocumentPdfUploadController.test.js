/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.window.document.DocumentPdfUploadController']);

describe('MoMo.client.view.window.document.DocumentPdfUploadController', function() {
  var DocumentPdfUploadController;

  beforeEach(function() {
      DocumentPdfUploadController = Ext.create('MoMo.client.view.window.document.DocumentPdfUploadController');
  });

  afterEach(function() {
      DocumentPdfUploadController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.window.document.DocumentPdfUploadController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(DocumentPdfUploadController).to.be.a(MoMo.client.view.window.document.DocumentPdfUploadController);
        });
    });
});

