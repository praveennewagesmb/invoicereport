var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/emppa');
mongoose.set('debug', true);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('MongoDB Connected'));

var Schema = mongoose.Schema;


var empSchema = new mongoose.Schema ({
    empId:  String,
    empName: String,
    benifits: [{
      info: String,
      startDate: Date,
  }],
    roleGroup:[{
      role: String,
      startDate: Date
    }],
    ctcDetails:[{
      
      salary: Number,
      epf: Number,
      wf: Number,
      cl: Number,
      insurance: Number,
      gratuity: Number,
      month: Date
    }],
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


 module.exports= {
   emp: emp,
   ctcDetails: ctcDetails
 };
    


