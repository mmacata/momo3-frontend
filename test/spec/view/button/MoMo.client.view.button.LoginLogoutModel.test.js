/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.button.LoginLogoutModel']);

describe('MoMo.client.view.button.LoginLogoutModel', function() {
  var LoginLogoutModel;

  beforeEach(function() {
      LoginLogoutModel = Ext.create('MoMo.client.view.button.LoginLogoutModel');
  });

  afterEach(function() {
      LoginLogoutModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.button.LoginLogoutModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(LoginLogoutModel).to.be.a(MoMo.client.view.button.LoginLogoutModel);
        });
    });
});

