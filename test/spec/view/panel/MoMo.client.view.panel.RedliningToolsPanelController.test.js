/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.panel.RedliningToolsPanelController']);

describe('MoMo.client.view.panel.RedliningToolsPanelController', function() {
  var RedliningToolsPanelController;

  beforeEach(function() {
      RedliningToolsPanelController = Ext.create('MoMo.client.view.panel.RedliningToolsPanelController');
  });

  afterEach(function() {
      RedliningToolsPanelController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.panel.RedliningToolsPanelController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(RedliningToolsPanelController).to.be.a(MoMo.client.view.panel.RedliningToolsPanelController);
        });
    });
});

