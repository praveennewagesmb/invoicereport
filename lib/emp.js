var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/emppa');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB Connected')
});

var empSchema = new mongoose.Schema ({
    empId: {type: String, unique: true},
    empName: {type: String},
    ctcDetails: {type: String},
    dojDetails: {type: Date},
    dopDetails: {type: Date}
},{collections:"emps"});

var emp = mongoose.model('emps', empSchema);

var ctcDetailsSchema = new mongoose.Schema ({
  ctcDetails: {type: String, unique: true},
  nineMonth: {type: Number},
  twelveMonth: {type: Number}
}, {collections: "ctcDetails"})

var ctcDetails = mongoose.model('ctcDetails', ctcDetailsSchema);

module.exports = emp;
