/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.button.ShowRedliningToolsPanelModel']);

describe('MoMo.client.view.button.ShowRedliningToolsPanelModel', function() {
  var ShowRedliningToolsPanelModel;

  beforeEach(function() {
      ShowRedliningToolsPanelModel = Ext.create('MoMo.client.view.button.ShowRedliningToolsPanelModel');
  });

  afterEach(function() {
      ShowRedliningToolsPanelModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.button.ShowRedliningToolsPanelModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(ShowRedliningToolsPanelModel).to.be.a(MoMo.client.view.button.ShowRedliningToolsPanelModel);
        });
    });
});

