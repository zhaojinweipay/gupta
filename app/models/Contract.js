var mongoose = require('mongoose')
    , autoIncrement = require('mongoose-auto-increment');

var ContractSchema = mongoose.Schema({
    title: String,
    information: String,
    buyer_name: String,
    buyer_company_name: String,
    buyer_email: String,
    seller_contact: String,
    seller_name: String,
    seller_email: String,
    payment_basis: String,
    expected_start: Date,
    expected_completion: Date,
    final_amount: Number,
    status: String,
    reject_reason: String,
    rating: Number,

    created_at: {
        type: Date,
        default: Date.now
    }
});


ContractSchema.plugin(autoIncrement.plugin, {
    model: 'Contract',
    field: '_id',
    startAt: 100000
});

mongoose.model('Contract', ContractSchema);