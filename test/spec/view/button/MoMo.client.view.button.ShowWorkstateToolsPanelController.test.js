/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.button.ShowWorkstateToolsPanelController']);

describe('MoMo.client.view.button.ShowWorkstateToolsPanelController', function() {
  var ShowWorkstateToolsPanelController;

  beforeEach(function() {
      ShowWorkstateToolsPanelController = Ext.create('MoMo.client.view.button.ShowWorkstateToolsPanelController');
  });

  afterEach(function() {
      ShowWorkstateToolsPanelController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.button.ShowWorkstateToolsPanelController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(ShowWorkstateToolsPanelController).to.be.a(MoMo.client.view.button.ShowWorkstateToolsPanelController);
        });
    });
});

