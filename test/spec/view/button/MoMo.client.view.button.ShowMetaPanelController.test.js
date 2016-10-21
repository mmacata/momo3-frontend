/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.button.ShowMetaPanelController']);

describe('MoMo.client.view.button.ShowMetaPanelController', function() {
  var ShowMetaPanelController;

  beforeEach(function() {
      ShowMetaPanelController = Ext.create('MoMo.client.view.button.ShowMetaPanelController');
  });

  afterEach(function() {
      ShowMetaPanelController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.button.ShowMetaPanelController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(ShowMetaPanelController).to.be.a(MoMo.client.view.button.ShowMetaPanelController);
        });
    });
});

