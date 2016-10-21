/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.button.ShowToolsPanelCommonController']);

describe('MoMo.client.view.button.ShowToolsPanelCommonController', function() {
  var ShowToolsPanelCommonController;

  beforeEach(function() {
      ShowToolsPanelCommonController = Ext.create('MoMo.client.view.button.ShowToolsPanelCommonController');
  });

  afterEach(function() {
      ShowToolsPanelCommonController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.button.ShowToolsPanelCommonController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(ShowToolsPanelCommonController).to.be.a(MoMo.client.view.button.ShowToolsPanelCommonController);
        });
    });
});

