/* DoOverwrite */
Ext.Loader.syncRequire(['MoMo.client.view.form.PrintController']);

describe('MoMo.client.view.form.PrintController', function() {
  var PrintController;

  beforeEach(function() {
      PrintController = Ext.create('MoMo.client.view.form.PrintController');
  });

  afterEach(function() {
      PrintController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.client.view.form.PrintController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(PrintController).to.be.a(MoMo.client.view.form.PrintController);
        });
    });
});

