/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.util.User']);

describe('MoMo.client.util.User', function() {
  var User;

  beforeEach(function() {
      User = Ext.create('MoMo.client.util.User');
  });

  afterEach(function() {
      User.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.util.User).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(User).to.be.a(MoMo.client.util.User);
        });
    });
});

