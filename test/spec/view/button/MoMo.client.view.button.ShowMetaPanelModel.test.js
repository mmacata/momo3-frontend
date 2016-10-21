/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.button.ShowMetaPanelModel']);

describe('MoMo.client.view.button.ShowMetaPanelModel', function() {
  var ShowMetaPanelModel;

  beforeEach(function() {
      ShowMetaPanelModel = Ext.create('MoMo.client.view.button.ShowMetaPanelModel');
  });

  afterEach(function() {
      ShowMetaPanelModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.button.ShowMetaPanelModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(ShowMetaPanelModel).to.be.a(MoMo.client.view.button.ShowMetaPanelModel);
        });
    });
});

