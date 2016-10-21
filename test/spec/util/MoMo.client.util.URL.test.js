/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.util.URL']);

describe('MoMo.client.util.URL', function() {
  var URL;

  beforeEach(function() {
      URL = Ext.create('MoMo.client.util.URL');
  });

  afterEach(function() {
      URL.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.util.URL).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(URL).to.be.a(MoMo.client.util.URL);
        });
    });
});

