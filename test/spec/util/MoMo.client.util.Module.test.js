/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.util.Module']);

describe('MoMo.client.util.Module', function() {
  var Module;

  beforeEach(function() {
      Module = Ext.create('MoMo.client.util.Module');
  });

  afterEach(function() {
      Module.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.util.Module).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(Module).to.be.a(MoMo.client.util.Module);
        });
    });
});

