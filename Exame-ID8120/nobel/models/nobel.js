var mongoose = require('mongoose')
var Schema = mongoose.Schema


var PersonSchema = new Schema({
    id: { type: String, required: true },
    firstname: { type: String, required: true },
    surname: { type: String, required: true },
    motivation: { type: String, required: true },
    share: { type: String, required: true }
});

var NobelSchema = new Schema({
    year: {type: String, required: true },
    category: {type: String, required: true },
    overallMotivation: {type: String, required: true },
    laureates: [PersonSchema]
});
                                                            // nome da colecao
module.exports = mongoose.model('Nobel', NobelSchema, 'nobels');