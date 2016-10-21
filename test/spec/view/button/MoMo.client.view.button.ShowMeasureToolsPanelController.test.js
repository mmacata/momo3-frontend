/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.button.ShowMeasureToolsPanelController']);

describe('MoMo.client.view.button.ShowMeasureToolsPanelController', function() {
  var ShowMeasureToolsPanelController;

  beforeEach(function() {
      ShowMeasureToolsPanelController = Ext.create('MoMo.client.view.button.ShowMeasureToolsPanelController');
  });

  afterEach(function() {
      ShowMeasureToolsPanelController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.button.ShowMeasureToolsPanelController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(ShowMeasureToolsPanelController).to.be.a(MoMo.client.view.button.ShowMeasureToolsPanelController);
        });
    });
});

