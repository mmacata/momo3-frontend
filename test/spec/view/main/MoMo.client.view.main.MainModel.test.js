/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.main.MainModel']);

describe('MoMo.client.view.main.MainModel', function() {
  var MainModel;

  beforeEach(function() {
      MainModel = Ext.create('MoMo.client.view.main.MainModel');
  });

  afterEach(function() {
      MainModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.main.MainModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(MainModel).to.be.a(MoMo.client.view.main.MainModel);
        });
    });
});

