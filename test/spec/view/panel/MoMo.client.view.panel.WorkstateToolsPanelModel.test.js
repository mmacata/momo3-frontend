/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.panel.WorkstateToolsPanelModel']);

describe('MoMo.client.view.panel.WorkstateToolsPanelModel', function() {
  var WorkstateToolsPanelModel;

  beforeEach(function() {
      WorkstateToolsPanelModel = Ext.create('MoMo.client.view.panel.WorkstateToolsPanelModel');
  });

  afterEach(function() {
      WorkstateToolsPanelModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.panel.WorkstateToolsPanelModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(WorkstateToolsPanelModel).to.be.a(MoMo.client.view.panel.WorkstateToolsPanelModel);
        });
    });
});

