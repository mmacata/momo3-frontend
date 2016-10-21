/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.panel.WorkstateToolsPanelController']);

describe('MoMo.client.view.panel.WorkstateToolsPanelController', function() {
  var WorkstateToolsPanelController;

  beforeEach(function() {
      WorkstateToolsPanelController = Ext.create('MoMo.client.view.panel.WorkstateToolsPanelController');
  });

  afterEach(function() {
      WorkstateToolsPanelController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.panel.WorkstateToolsPanelController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(WorkstateToolsPanelController).to.be.a(MoMo.client.view.panel.WorkstateToolsPanelController);
        });
    });
});

