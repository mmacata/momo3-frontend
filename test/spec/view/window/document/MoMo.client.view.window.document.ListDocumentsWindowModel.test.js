/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.window.document.ListDocumentsWindowModel']);

describe('MoMo.client.view.window.document.ListDocumentsWindowModel', function() {
  var ListDocumentsWindowModel;

  beforeEach(function() {
      ListDocumentsWindowModel = Ext.create('MoMo.client.view.window.document.ListDocumentsWindowModel');
  });

  afterEach(function() {
      ListDocumentsWindowModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.window.document.ListDocumentsWindowModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(ListDocumentsWindowModel).to.be.a(MoMo.client.view.window.document.ListDocumentsWindowModel);
        });
    });
});

