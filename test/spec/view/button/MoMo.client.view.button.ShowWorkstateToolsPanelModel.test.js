/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.button.ShowWorkstateToolsPanelModel']);

describe('MoMo.client.view.button.ShowWorkstateToolsPanelModel', function() {
  var ShowWorkstateToolsPanelModel;

  beforeEach(function() {
      ShowWorkstateToolsPanelModel = Ext.create('MoMo.client.view.button.ShowWorkstateToolsPanelModel');
  });

  afterEach(function() {
      ShowWorkstateToolsPanelModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.button.ShowWorkstateToolsPanelModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(ShowWorkstateToolsPanelModel).to.be.a(MoMo.client.view.button.ShowWorkstateToolsPanelModel);
        });
    });
});

