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
},{collections:"emp"});

var emp = mongoose.model('emp', empSchema);

module.exports = emp;