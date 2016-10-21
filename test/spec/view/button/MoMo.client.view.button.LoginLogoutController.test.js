/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.button.LoginLogoutController']);

describe('MoMo.client.view.button.LoginLogoutController', function() {
  var LoginLogoutController;

  beforeEach(function() {
      LoginLogoutController = Ext.create('MoMo.client.view.button.LoginLogoutController');
  });

  afterEach(function() {
      LoginLogoutController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.button.LoginLogoutController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(LoginLogoutController).to.be.a(MoMo.client.view.button.LoginLogoutController);
        });
    });
});

