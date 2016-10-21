/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.panel.MeasurementToolsPanelController']);

describe('MoMo.client.view.panel.MeasurementToolsPanelController', function() {
  var MeasurementToolsPanelController;

  beforeEach(function() {
      MeasurementToolsPanelController = Ext.create('MoMo.client.view.panel.MeasurementToolsPanelController');
  });

  afterEach(function() {
      MeasurementToolsPanelController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.panel.MeasurementToolsPanelController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(MeasurementToolsPanelController).to.be.a(MoMo.client.view.panel.MeasurementToolsPanelController);
        });
    });
});

