/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.button.ListDocumentsController']);

describe('MoMo.client.view.button.ListDocumentsController', function() {
  var ListDocumentsController;

  beforeEach(function() {
      ListDocumentsController = Ext.create('MoMo.client.view.button.ListDocumentsController');
  });

  afterEach(function() {
      ListDocumentsController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.button.ListDocumentsController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(ListDocumentsController).to.be.a(MoMo.client.view.button.ListDocumentsController);
        });
    });
});

