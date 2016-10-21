/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.panel.RedliningToolsPanelModel']);

describe('MoMo.client.view.panel.RedliningToolsPanelModel', function() {
  var RedliningToolsPanelModel;

  beforeEach(function() {
      RedliningToolsPanelModel = Ext.create('MoMo.client.view.panel.RedliningToolsPanelModel');
  });

  afterEach(function() {
      RedliningToolsPanelModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.panel.RedliningToolsPanelModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(RedliningToolsPanelModel).to.be.a(MoMo.client.view.panel.RedliningToolsPanelModel);
        });
    });
});

