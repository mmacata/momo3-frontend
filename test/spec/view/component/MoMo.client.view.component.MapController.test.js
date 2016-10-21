/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.component.MapController']);

describe('MoMo.client.view.component.MapController', function() {
  var MapController;

  beforeEach(function() {
      MapController = Ext.create('MoMo.client.view.component.MapController');
  });

  afterEach(function() {
      MapController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.component.MapController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(MapController).to.be.a(MoMo.client.view.component.MapController);
        });
    });
});

