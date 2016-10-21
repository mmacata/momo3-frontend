/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.button.ShowMeasureToolsPanelModel']);

describe('MoMo.client.view.button.ShowMeasureToolsPanelModel', function() {
  var ShowMeasureToolsPanelModel;

  beforeEach(function() {
      ShowMeasureToolsPanelModel = Ext.create('MoMo.client.view.button.ShowMeasureToolsPanelModel');
  });

  afterEach(function() {
      ShowMeasureToolsPanelModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.button.ShowMeasureToolsPanelModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(ShowMeasureToolsPanelModel).to.be.a(MoMo.client.view.button.ShowMeasureToolsPanelModel);
        });
    });
});

