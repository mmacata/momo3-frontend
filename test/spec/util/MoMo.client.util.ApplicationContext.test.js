/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.util.ApplicationContext']);

describe('MoMo.client.util.ApplicationContext', function() {
  var ApplicationContext;

  beforeEach(function() {
      ApplicationContext = Ext.create('MoMo.client.util.ApplicationContext');
  });

  afterEach(function() {
      ApplicationContext.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.util.ApplicationContext).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(ApplicationContext).to.be.a(MoMo.client.util.ApplicationContext);
        });
    });
});

