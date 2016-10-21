/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.button.PrintModel']);

describe('MoMo.client.view.button.PrintModel', function() {
  var PrintModel;

  beforeEach(function() {
      PrintModel = Ext.create('MoMo.client.view.button.PrintModel');
  });

  afterEach(function() {
      PrintModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.button.PrintModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(PrintModel).to.be.a(MoMo.client.view.button.PrintModel);
        });
    });
});

