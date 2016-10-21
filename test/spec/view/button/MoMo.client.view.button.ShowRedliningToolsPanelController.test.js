/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.button.ShowRedliningToolsPanelController']);

describe('MoMo.client.view.button.ShowRedliningToolsPanelController', function() {
  var ShowRedliningToolsPanelController;

  beforeEach(function() {
      ShowRedliningToolsPanelController = Ext.create('MoMo.client.view.button.ShowRedliningToolsPanelController');
  });

  afterEach(function() {
      ShowRedliningToolsPanelController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.button.ShowRedliningToolsPanelController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(ShowRedliningToolsPanelController).to.be.a(MoMo.client.view.button.ShowRedliningToolsPanelController);
        });
    });
});

