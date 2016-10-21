/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.panel.LegendTreeController']);

describe('MoMo.client.view.panel.LegendTreeController', function() {
  var LegendTreeController;

  beforeEach(function() {
      LegendTreeController = Ext.create('MoMo.client.view.panel.LegendTreeController');
  });

  afterEach(function() {
      LegendTreeController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.panel.LegendTreeController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(LegendTreeController).to.be.a(MoMo.client.view.panel.LegendTreeController);
        });
    });
});

