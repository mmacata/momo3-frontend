/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.panel.LegendTreeModel']);

describe('MoMo.client.view.panel.LegendTreeModel', function() {
  var LegendTreeModel;

  beforeEach(function() {
      LegendTreeModel = Ext.create('MoMo.client.view.panel.LegendTreeModel');
  });

  afterEach(function() {
      LegendTreeModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.panel.LegendTreeModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(LegendTreeModel).to.be.a(MoMo.client.view.panel.LegendTreeModel);
        });
    });
});

