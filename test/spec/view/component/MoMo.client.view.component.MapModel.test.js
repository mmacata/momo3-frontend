/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.component.MapModel']);

describe('MoMo.client.view.component.MapModel', function() {
  var MapModel;

  beforeEach(function() {
      MapModel = Ext.create('MoMo.client.view.component.MapModel');
  });

  afterEach(function() {
      MapModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.component.MapModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(MapModel).to.be.a(MoMo.client.view.component.MapModel);
        });
    });
});

