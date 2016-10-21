/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.main.MainController']);

describe('MoMo.client.view.main.MainController', function() {
  var MainController;

  beforeEach(function() {
      MainController = Ext.create('MoMo.client.view.main.MainController');
  });

  afterEach(function() {
      MainController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.main.MainController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(MainController).to.be.a(MoMo.client.view.main.MainController);
        });
    });
});

