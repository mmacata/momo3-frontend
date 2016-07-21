Ext.define('MoMo.client.store.Rbma', {

    extend: 'Ext.data.TreeStore',

    alias: 'store.rbma',

    model: 'MoMo.client.model.Rbma',

    listeners: {
        beforesync: function(options){
            if (options.create) {
                var nodeToInsert = options.create[0];
                nodeToInsert.set('id', null);
            }
        },
        write: function(store, operation){

            if (operation.getRequest().getAction() === "create"){

                var newRec = operation.getRecords()[0];

                var respRec =
                    Ext.JSON.decode(operation.getResponse().responseText);
                newRec.set('id', respRec.id);
            }
        }
    }
});
