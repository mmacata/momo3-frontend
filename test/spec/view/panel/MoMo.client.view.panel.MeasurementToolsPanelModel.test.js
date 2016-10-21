/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.panel.MeasurementToolsPanelModel']);

describe('MoMo.client.view.panel.MeasurementToolsPanelModel', function() {
  var MeasurementToolsPanelModel;

  beforeEach(function() {
      MeasurementToolsPanelModel = Ext.create('MoMo.client.view.panel.MeasurementToolsPanelModel');
  });

  afterEach(function() {
      MeasurementToolsPanelModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.panel.MeasurementToolsPanelModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(MeasurementToolsPanelModel).to.be.a(MoMo.client.view.panel.MeasurementToolsPanelModel);
        });
    });
});

