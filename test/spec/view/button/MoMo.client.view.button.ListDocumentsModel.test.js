/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.button.ListDocumentsModel']);

describe('MoMo.client.view.button.ListDocumentsModel', function() {
  var ListDocumentsModel;

  beforeEach(function() {
      ListDocumentsModel = Ext.create('MoMo.client.view.button.ListDocumentsModel');
  });

  afterEach(function() {
      ListDocumentsModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.button.ListDocumentsModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(ListDocumentsModel).to.be.a(MoMo.client.view.button.ListDocumentsModel);
        });
    });
});

