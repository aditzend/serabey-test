import './rel-customer-edit.html';
import '/imports/api/rels/methods.js';
import '../../panels/payment-methods-panel.js';


Template.Rel_customer_edit.onCreated(function() {
    console.log(this.data);
    this.state = new ReactiveDict();
    this.state.setDefault({
        editing: false

    });
});

Template.Rel_customer_edit.onRendered(function() {
    const instance = Template.instance();
    const d = Template.instance()
        .data;
    const rel = Rels.findOne({
        origin: d.origin,
        destiny: d.destiny,
        type: d.type
    });
    if (rel) {
        instance.$('#notesInput')
            .val(rel.notes);
        instance.$('#category')
            .val(rel.category);
        instance.$('#payerBehavior')
            .val(rel.payerBehavior);
        instance.$('#paymentDays')
            .val(rel.paymentDays);

        instance.$('#paymentNotes')
            .val(rel.paymentNotes);
    }

});



Template.Rel_customer_edit.events({
    'submit form': function(e, instance) {
        e.preventDefault();
        console.log(instance.data.type);
        console.log("categosuy", instance.$("#category")
            .val());

        const d = instance.data;

        const rel = Rels.findOne({
            origin: d.origin,
            destiny: d.destiny,
            type: d.type
        });

        let relId;

        if (rel) {
            relId = Rels.update({
                _id: rel._id
            }, {
                $set: {
                    type: d.type,
                    origin: d.origin,
                    destiny: d.destiny,
                    notes: e.target.notes.value,
                    category: instance.$("#category")
                        .val(),
                    paymentDays: e.target.paymentDays.value,
                    paymentNotes: e.target.paymentNotes.value,
                    payerBehavior: e.target.payerBehavior.value,
                }
            });

            console.log(rel);
        } else {
            relId = Rels.insert({
                type: d.type,
                origin: d.origin,
                destiny: d.destiny,
                notes: e.target.notes.value,
                category: e.target.category.value,
                paymentDays: e.target.paymentDays.value,
                paymentNotes: e.target.paymentNotes.value,
                payerBehavior: e.target.payerBehavior.value,
            });
        }


        // 
        console.log('new rel >>>>>>', relId);
        instance.data.onSavedData(relId);

        // 
        // 
        // console.log('editing Rel: ' + this._id);
        // Rels.update(this._id, {
        //   $set: {
        //     notes: e.target.notes.value,
        //     paymentDays: e.target.paymentDays.value,
        //     paymentTerms: e.target.paymentTerms.value,
        //     paymentNotes: e.target.paymentNotes.value,
        //   }
        // });
    },
    'click .js-rel-customer-edit-cancel': function(e, instance) {
        instance.data.onCancel();
        swal({
            title: "Cancelado",
            text: "NO SE GUARDO LA RELACION CON ESTE CLIENTE",
            type: "warning"
        });
    }
});
