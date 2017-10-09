//Express
let express = require("express");
let app = express();

/*
const path = require("path");
-->

//Static Folder
app.use(express.static(__dirname + '/public/dist'));

//Body Parser
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Morgan
let morgan = require("morgan");
app.use(morgan('dev'));

//Mongo Database
let mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/usersSchema');
let FormSchema = new mongoose.Schema({
    title: { type:String, require:true},
    editable: { type:Boolean, required:true, default:false}
})

//Routes
app.all("*", (req,res,next) => {
    res.sendfile(path.resolve("./public/dist/index.html"))
})

app.get("/forms/", (req, res, next) => {
    console.log("Server > GET '/forms'")
    res.json([]);
}
)

app.post("/forms/", (req, res, next) => {
    console.log("Server > POST '/forms' > forms", req.body);
    
    res.json([]);
}
)*/

//server listening @ 1337

//Morgan
let morgan = require("morgan");
app.use(morgan('dev'));

//Mongo Database
var mongoose = require('mongoose');
var assert = require('assert');
mongoose.connect('mongodb://localhost/invoicereport');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB Connected')
});

var invoiceSchema = mongoose.Schema({
    ScheduleId: Number, 
    ScheduleName: String,
    ScheduleDate: String,
    ProjectName: String,
    ProjectManager: String,
    Amount: String,
    //InvoiceId: String,
    //TeamLeaders: [String],
    //PartialPayments: [Number],
    //Date: {Responsibility: String, DeliveryDate: Date},
    //Status: String

},{collections:"schedule"});
var schedulewithoutinvoice = mongoose.model('schedule', invoiceSchema);

var data = require("./schedulewithoutinvoice.js");

data = [
 {
   "ProjectName": "Ilomen App MVP (iOS)",
   "InvoiceNumber": "ILO006",
   "ScheduleName": "",
   "InvoiceAmount": "$602.00 ",
   "ScheduleID": 1244,
   "ProjectManager": "Praveen C Kumar",
   "Status": "This Month",
   "TL": "Arun M",
   "Deadline": "",
   "Status": "Completed"
 },
 {
   "ProjectName": "Redify Inc.",
   "InvoiceNumber": "RED005",
   "ScheduleName": "",
   "InvoiceAmount": "$850.00 ",
   "ScheduleID": 1245,
   "ProjectManager": "Praveen C Kumar",
   "Status": "Not Moving",
   "TL": "Eldho",
   "Deadline": "",
   "Status": "Completed"
 },
 {
   "ProjectName": "Haulor",
   "InvoiceNumber": "UTX039",
   "ScheduleName": "",
   "InvoiceAmount": "$1,100.00 ",
   "ScheduleID": 1386,
   "ProjectManager": "Praveen C Kumar",
   "Status": "This Month",
   "TL": "Shinu",
   "Deadline": "",
   "Status": "Completed"
 },
 {
   "ProjectName": "Inlinkers Website & Mobile app",
   "InvoiceNumber": "ILK011",
   "ScheduleName": "",
   "InvoiceAmount": "$3,600.00 ",
   "ScheduleID": 1330,
   "ProjectManager": "Praveen C Kumar",
   "Status": "Not This Month",
   "TL": "Shine",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "No Snow Naples",
   "InvoiceNumber": "PAR045",
   "ScheduleName": "",
   "InvoiceAmount": "$800.00 ",
   "ScheduleID": 1418,
   "ProjectManager": "Praveen C Kumar",
   "Status": "This Month",
   "TL": "Jinson",
   "Deadline": "",
   "Status": "Completed"
 },
 {
   "ProjectName": "SWAYE App Ltd",
   "InvoiceNumber": "SWA003",
   "ScheduleName": "",
   "InvoiceAmount": "$2,124.00 ",
   "ScheduleID": 1423,
   "ProjectManager": "Praveen C Kumar",
   "Status": "This Month",
   "TL": "Shinu",
   "Deadline": "10/25/2017",
   "Status": ""
 },
 {
   "ProjectName": "GOLD PASS",
   "InvoiceNumber": "GP001",
   "ScheduleName": "",
   "InvoiceAmount": "$2,500.00 ",
   "ScheduleID": 1429,
   "ProjectManager": "Deepak Prakash",
   "Status": "This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "The Accidental Tourist",
   "InvoiceNumber": "TAT005",
   "ScheduleName": "",
   "InvoiceAmount": "$1,400.00 ",
   "ScheduleID": 1076,
   "ProjectManager": "Arun C",
   "Status": "Not Moving",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "The Accidental Tourist",
   "InvoiceNumber": "TAT004",
   "ScheduleName": "",
   "InvoiceAmount": "$1,500.00 ",
   "ScheduleID": 1075,
   "ProjectManager": "Arun C",
   "Status": "Not Moving",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "NowiTouch Calm",
   "InvoiceNumber": "NIT007",
   "ScheduleName": "",
   "InvoiceAmount": "$480.00 ",
   "ScheduleID": 1295,
   "ProjectManager": "Arun C",
   "Status": "This Month",
   "TL": "Arun M",
   "Deadline": "",
   "Status": "Completed"
 },
 {
   "ProjectName": "NowiTouch Calm",
   "InvoiceNumber": "NIT009",
   "ScheduleName": "",
   "InvoiceAmount": "$1,400.00 ",
   "ScheduleID": 1409,
   "ProjectManager": "Arun C",
   "Status": "This Month",
   "TL": "Arun M",
   "Deadline": "",
   "Status": "Completed"
 },
 {
   "ProjectName": "Outbound E5",
   "InvoiceNumber": "TU003",
   "ScheduleName": "",
   "InvoiceAmount": "$1,200.00 ",
   "ScheduleID": 1416,
   "ProjectManager": "Arun C",
   "Status": "Not This Month",
   "TL": "Arun M",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "Maintain It -Property Management App (cross platform)",
   "InvoiceNumber": "PMA003",
   "ScheduleName": "",
   "InvoiceAmount": "$2,000.00 ",
   "ScheduleID": 1326,
   "ProjectManager": "Arun C",
   "Status": "This Month",
   "TL": "Jinson",
   "Deadline": "10/16/2017",
   "Status": ""
 },
 {
   "ProjectName": "Real Hospitality Group",
   "InvoiceNumber": "RHG004",
   "ScheduleName": "",
   "InvoiceAmount": "$600.00 ",
   "ScheduleID": 1388,
   "ProjectManager": "Deepak Prakash",
   "Status": "This Month",
   "TL": "Eldho",
   "Deadline": "",
   "Status": "Completed"
 },
 {
   "ProjectName": "Real Hospitality Group",
   "InvoiceNumber": "RHG003",
   "ScheduleName": "",
   "InvoiceAmount": "$2,320.00 ",
   "ScheduleID": 1387,
   "ProjectManager": "Deepak Prakash",
   "Status": "This Month",
   "TL": "Eldho",
   "Deadline": "",
   "Status": "Completed"
 },
 {
   "ProjectName": "ABM | High Tech",
   "InvoiceNumber": "ABM005",
   "ScheduleName": "",
   "InvoiceAmount": "$1,000.00 ",
   "ScheduleID": 1389,
   "ProjectManager": "Deepak Prakash",
   "Status": "This Month",
   "TL": "Eldho",
   "Deadline": "",
   "Status": "Completed"
 },
 {
   "ProjectName": "InHomeSports",
   "InvoiceNumber": "IHS021",
   "ScheduleName": "",
   "InvoiceAmount": "$480.00 ",
   "ScheduleID": 1412,
   "ProjectManager": "Deepak Prakash",
   "Status": "This Month",
   "TL": "Eldho",
   "Deadline": "10/20/2017",
   "Status": ""
 },
 {
   "ProjectName": "Xaddie Co",
   "InvoiceNumber": "XAD014",
   "ScheduleName": "",
   "InvoiceAmount": "$2,480.00 ",
   "ScheduleID": 1413,
   "ProjectManager": "Deepak Prakash",
   "Status": "This Month",
   "TL": "Eldho",
   "Deadline": "",
   "Status": "Completed"
 },
 {
   "ProjectName": "Backpackr-2017",
   "InvoiceNumber": "BPKR022",
   "ScheduleName": "",
   "InvoiceAmount": "$1,600.00 ",
   "ScheduleID": 1390,
   "ProjectManager": "Deepak Prakash",
   "Status": "This Month",
   "TL": "Arun M",
   "Deadline": "",
   "Status": "Completed"
 },
 {
   "ProjectName": "Backpackr-2017",
   "InvoiceNumber": "BPKR023",
   "ScheduleName": "",
   "InvoiceAmount": "$680.00 ",
   "ScheduleID": 1391,
   "ProjectManager": "Deepak Prakash",
   "Status": "This Month",
   "TL": "Arun M",
   "Deadline": "",
   "Status": "Completed"
 },
 {
   "ProjectName": "Skidmoji Sticker",
   "InvoiceNumber": "SS002",
   "ScheduleName": "",
   "InvoiceAmount": "$2,600.00 ",
   "ScheduleID": 1382,
   "ProjectManager": "Deepak Prakash",
   "Status": "This Month",
   "TL": "Eldho",
   "Deadline": "",
   "Status": "Completed"
 },
 {
   "ProjectName": "THRIVOLOGY",
   "InvoiceNumber": "BIL004",
   "ScheduleName": "",
   "InvoiceAmount": "$1,000.00 ",
   "ScheduleID": 937,
   "ProjectManager": "Retheesh Kumar",
   "Status": "Not This Month",
   "TL": "Shinu",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "Gentle Reminder",
   "InvoiceNumber": "GRC003",
   "ScheduleName": "",
   "InvoiceAmount": "$1,000.00 ",
   "ScheduleID": 1134,
   "ProjectManager": "Retheesh Kumar",
   "Status": "Not Moving",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "Locator App",
   "InvoiceNumber": "LAP001",
   "ScheduleName": "",
   "InvoiceAmount": "$500.00 ",
   "ScheduleID": 1296,
   "ProjectManager": "Retheesh Kumar",
   "Status": "This Month",
   "TL": "Shinu",
   "Deadline": "",
   "Status": "Completed"
 },
 {
   "ProjectName": "Biomarker Cove",
   "InvoiceNumber": "CRW003",
   "ScheduleName": "",
   "InvoiceAmount": "$2,000.00 ",
   "ScheduleID": 1175,
   "ProjectManager": "Retheesh Kumar",
   "Status": "This Month",
   "TL": "Shinu",
   "Deadline": "",
   "Status": "Completed"
 },
 {
   "ProjectName": "Connecting Farmers and Users",
   "InvoiceNumber": "CFU009",
   "ScheduleName": "",
   "InvoiceAmount": "$2,500.00 ",
   "ScheduleID": 1352,
   "ProjectManager": "Jinson (PM Account)",
   "Status": "This Month",
   "TL": "Jinson",
   "Deadline": "10/20/2017",
   "Status": ""
 },
 {
   "ProjectName": "Tourist Tracker App - iOS & Android hybrid",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Milestone 4",
   "InvoiceAmount": "$2,500.00 ",
   "ScheduleID": 1406,
   "ProjectManager": "Arun C",
   "Status": "Not This Month",
   "TL": "Shine",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "Tourist Tracker App - iOS & Android hybrid",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Milestone 3",
   "InvoiceAmount": "$2,600.00 ",
   "ScheduleID": 1405,
   "ProjectManager": "Arun C",
   "Status": "Not This Month",
   "TL": "Shine",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "Outbound E5",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Dev Milestone IV",
   "InvoiceAmount": "$1,200.00 ",
   "ScheduleID": 1304,
   "ProjectManager": "Arun C",
   "Status": "Not This Month",
   "TL": "Eldho",
   "Deadline": "12/15/2017",
   "Status": ""
 },
 {
   "ProjectName": "Nector - MSL engagement App",
   "InvoiceNumber": "",
   "ScheduleName": "remaining payment - 3 to 11",
   "InvoiceAmount": "$24,580.00 ",
   "ScheduleID": 1316,
   "ProjectManager": "Deepak Prakash",
   "Status": "Not This Month",
   "TL": "Shinu",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "Tourist Tracker App - iOS & Android hybrid",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Milestone 2",
   "InvoiceAmount": "$2,500.00 ",
   "ScheduleID": 1404,
   "ProjectManager": "Arun C",
   "Status": "This Month",
   "TL": "Shine",
   "Deadline": "10/27/2017",
   "Status": ""
 },
 {
   "ProjectName": "Revamp of commcarerx.com",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of the project",
   "InvoiceAmount": "$1,400.00 ",
   "ScheduleID": 1401,
   "ProjectManager": "Retheesh Kumar",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "SWAYE App Ltd",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of the project and prior to going live",
   "InvoiceAmount": "$1,190.00 ",
   "ScheduleID": 1260,
   "ProjectManager": "Praveen C Kumar",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "Statchat v2",
   "InvoiceNumber": "",
   "ScheduleName": "Milestone 4 (iOS)",
   "InvoiceAmount": "$3,000.00 ",
   "ScheduleID": 1375,
   "ProjectManager": "Deepak Prakash",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "Outbound E5",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Dev Milestone III",
   "InvoiceAmount": "$1,200.00 ",
   "ScheduleID": 1303,
   "ProjectManager": "Arun C",
   "Status": "Not This Month",
   "TL": "Arun M",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "Statchat v2",
   "InvoiceNumber": "",
   "ScheduleName": "milestone 7 to 14",
   "InvoiceAmount": "$25,847.00 ",
   "ScheduleID": 1377,
   "ProjectManager": "Deepak Prakash",
   "Status": "Not This Month",
   "TL": "Eldho",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "Statchat v2",
   "InvoiceNumber": "",
   "ScheduleName": "Milestone 5 (iOS)",
   "InvoiceAmount": "$3,000.00 ",
   "ScheduleID": 1376,
   "ProjectManager": "Deepak Prakash",
   "Status": "Not This Month",
   "TL": "Eldho",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "Inlinkers Website & Mobile app",
   "InvoiceNumber": "",
   "ScheduleName": "One completion Project",
   "InvoiceAmount": "$1,538.00 ",
   "ScheduleID": 1331,
   "ProjectManager": "Praveen C Kumar",
   "Status": "Not This Month",
   "TL": "Shine",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "BDOT",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of the project and prior to going live",
   "InvoiceAmount": "$2,880.00 ",
   "ScheduleID": 1264,
   "ProjectManager": "Retheesh Kumar",
   "Status": "Not This Month",
   "TL": "Shinu",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "Maintain It -Property Management App (cross platform)",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Milestone 3",
   "InvoiceAmount": "$2,440.00 ",
   "ScheduleID": 1328,
   "ProjectManager": "Arun C",
   "Status": "This Month",
   "TL": "Jinson",
   "Deadline": "10/23/2017",
   "Status": ""
 },
 {
   "ProjectName": "Tourist Tracker App - iOS & Android hybrid",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Milestone 1 - Design phase",
   "InvoiceAmount": "$2,500.00 ",
   "ScheduleID": 1403,
   "ProjectManager": "Arun C",
   "Status": "This Month",
   "TL": "Shine",
   "Deadline": "10/13/2017",
   "Status": ""
 },
 {
   "ProjectName": "Revamp of commcarerx.com",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Design phase",
   "InvoiceAmount": "$1,300.00 ",
   "ScheduleID": 1400,
   "ProjectManager": "Retheesh Kumar",
   "Status": "This Month",
   "TL": "Shine",
   "Deadline": "10/18/2017",
   "Status": ""
 },
 {
   "ProjectName": "AcuPick",
   "InvoiceNumber": "",
   "ScheduleName": "Android - On Completion of Android app (Milestone 2)",
   "InvoiceAmount": "$1,600.00 ",
   "ScheduleID": 1283,
   "ProjectManager": "Retheesh Kumar",
   "Status": "Not This Month",
   "TL": "Eldho",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "SWAYE App Ltd",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of 70% of Development",
   "InvoiceAmount": "$1,190.00 ",
   "ScheduleID": 1259,
   "ProjectManager": "Praveen C Kumar",
   "Status": "Not This Month",
   "TL": "Shinu",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "Outbound E5",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Dev Milestone II",
   "InvoiceAmount": "$1,600.00 ",
   "ScheduleID": 1302,
   "ProjectManager": "Arun C",
   "Status": "Not This Month",
   "TL": "Arun M",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "Statchat v2",
   "InvoiceNumber": "",
   "ScheduleName": "Milestone 3 (iOS)",
   "InvoiceAmount": "$3,000.00 ",
   "ScheduleID": 1374,
   "ProjectManager": "Deepak Prakash",
   "Status": "This Month",
   "TL": "Eldho",
   "Deadline": "10/23/2017",
   "Status": ""
 },
 {
   "ProjectName": "Maintain It -Property Management App (cross platform)",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Milestone 2",
   "InvoiceAmount": "$2,000.00 ",
   "ScheduleID": 1327,
   "ProjectManager": "Arun C",
   "Status": "This Month",
   "TL": "Jinson",
   "Deadline": "10/12/2017",
   "Status": ""
 },
 {
   "ProjectName": "BDOT",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Milestone 3",
   "InvoiceAmount": "$2,880.00 ",
   "ScheduleID": 1263,
   "ProjectManager": "Retheesh Kumar",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "AcuPick",
   "InvoiceNumber": "",
   "ScheduleName": "iOS - On Completion of iOS App (Milestone 3)",
   "InvoiceAmount": "$2,600.00 ",
   "ScheduleID": 1280,
   "ProjectManager": "Retheesh Kumar",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "AcuPick",
   "InvoiceNumber": "",
   "ScheduleName": "Android - On Completion of Milestone 1",
   "InvoiceAmount": "$2,400.00 ",
   "ScheduleID": 1282,
   "ProjectManager": "Retheesh Kumar",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "OJT App iOS",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of project:",
   "InvoiceAmount": "$1,945.00 ",
   "ScheduleID": 1287,
   "ProjectManager": "Retheesh Kumar",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "Outbound E5",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Dev Milestone I",
   "InvoiceAmount": "$1,200.00 ",
   "ScheduleID": 1301,
   "ProjectManager": "Arun C",
   "Status": "This Month",
   "TL": "Arun M",
   "Deadline": "10/24/2017",
   "Status": ""
 },
 {
   "ProjectName": "SWAYE App Ltd",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of 30% of Development",
   "InvoiceAmount": "$1,190.00 ",
   "ScheduleID": 1258,
   "ProjectManager": "Praveen C Kumar",
   "Status": "This Month",
   "TL": "Shinu",
   "Deadline": "10/25/2017",
   "Status": ""
 },
 {
   "ProjectName": "BDOT",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Milestone 2",
   "InvoiceAmount": "$2,880.00 ",
   "ScheduleID": 1262,
   "ProjectManager": "Retheesh Kumar",
   "Status": "This Month",
   "TL": "Shinu",
   "Deadline": "10/17/2017",
   "Status": ""
 },
 {
   "ProjectName": "Biomarker Cove",
   "InvoiceNumber": "",
   "ScheduleName": "Post-delivery support for 1 year:",
   "InvoiceAmount": "$2,000.00 ",
   "ScheduleID": 1178,
   "ProjectManager": "Retheesh Kumar",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "NowiTouch Calm",
   "InvoiceNumber": "",
   "ScheduleName": "Share Feature Android",
   "InvoiceAmount": "$240.00 ",
   "ScheduleID": 1336,
   "ProjectManager": "Arun C",
   "Status": "This Month",
   "TL": "Arun M",
   "Deadline": "10/4/2017",
   "Status": ""
 },
 {
   "ProjectName": "AcuPick",
   "InvoiceNumber": "",
   "ScheduleName": "iOS - On Completion of Milestone 2",
   "InvoiceAmount": "$2,600.00 ",
   "ScheduleID": 1279,
   "ProjectManager": "Retheesh Kumar",
   "Status": "This Month",
   "TL": "Eldho",
   "Deadline": "10/24/2017",
   "Status": ""
 },
 {
   "ProjectName": "NowiTouch Calm",
   "InvoiceNumber": "",
   "ScheduleName": "Share Feature IOS",
   "InvoiceAmount": "$240.00 ",
   "ScheduleID": 1335,
   "ProjectManager": "Arun C",
   "Status": "This Month",
   "TL": "Arun M",
   "Deadline": "",
   "Status": "Completed"
 },
 {
   "ProjectName": "Inlinkers Website & Mobile app",
   "InvoiceNumber": "",
   "ScheduleName": "Edit Services and Flow change",
   "InvoiceAmount": "$2,103.00 ",
   "ScheduleID": 1332,
   "ProjectManager": "Praveen C Kumar",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "Biomarker Cove",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of the project:",
   "InvoiceAmount": "$2,000.00 ",
   "ScheduleID": 1177,
   "ProjectManager": "Retheesh Kumar",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "CashBride",
   "InvoiceNumber": "",
   "ScheduleName": "50 % of the Last Invoice Payment 2",
   "InvoiceAmount": "$750.00 ",
   "ScheduleID": 1312,
   "ProjectManager": "Arun C",
   "Status": "Not Moving",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "School Cafe APP",
   "InvoiceNumber": "",
   "ScheduleName": "ON COMPLETION USER REG, LOGIN, HOME RECEIPTS",
   "InvoiceAmount": "$2,255.00 ",
   "ScheduleID": 1289,
   "ProjectManager": "Praveen C Kumar",
   "Status": "This Month",
   "TL": "Jinson",
   "Deadline": "10/18/2017",
   "Status": ""
 },
 {
   "ProjectName": "School Cafe APP",
   "InvoiceNumber": "",
   "ScheduleName": "ON COMPLETION OF WHOLE PROJECT",
   "InvoiceAmount": "$2,255.00 ",
   "ScheduleID": 1290,
   "ProjectManager": "Praveen C Kumar",
   "Status": "Not This Month",
   "TL": "Jinson",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "Biomarker Cove",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Search module, User-side features:",
   "InvoiceAmount": "$2,000.00 ",
   "ScheduleID": 1176,
   "ProjectManager": "Retheesh Kumar",
   "Status": "This Month",
   "TL": "Shinu",
   "Deadline": "10/25/2017",
   "Status": ""
 },
 {
   "ProjectName": "AppKast - Android",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Development Milestone 7",
   "InvoiceAmount": "$1,500.00 ",
   "ScheduleID": 1001,
   "ProjectManager": "Arun C",
   "Status": "Not This Month",
   "TL": "Eldho",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "AppKast - Android",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Development Milestone 6",
   "InvoiceAmount": "$2,100.00 ",
   "ScheduleID": 1000,
   "ProjectManager": "Arun C",
   "Status": "Not This Month",
   "TL": "Eldho",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "AppKast - Android",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Development Milestone 5",
   "InvoiceAmount": "$2,300.00 ",
   "ScheduleID": 999,
   "ProjectManager": "Arun C",
   "Status": "Not This Month",
   "TL": "Eldho",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "AppKast - Android",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Development Milestone 4",
   "InvoiceAmount": "$1,850.00 ",
   "ScheduleID": 998,
   "ProjectManager": "Arun C",
   "Status": "Not This Month",
   "TL": "Eldho",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "AppKast - Android",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Development Milestone 3",
   "InvoiceAmount": "$2,000.00 ",
   "ScheduleID": 997,
   "ProjectManager": "Arun C",
   "Status": "Not This Month",
   "TL": "Eldho",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "IDEM iPhone App (Phase I)",
   "InvoiceNumber": "",
   "ScheduleName": "On completion of the project",
   "InvoiceAmount": "$950.00 ",
   "ScheduleID": 1095,
   "ProjectManager": "Retheesh Kumar",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "AppKast - Android",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Development Milestone 2",
   "InvoiceAmount": "$1,800.00 ",
   "ScheduleID": 996,
   "ProjectManager": "Arun C",
   "Status": "Not This Month",
   "TL": "Eldho",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "AppKast - Android",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Development Milestone 1",
   "InvoiceAmount": "$2,000.00 ",
   "ScheduleID": 995,
   "ProjectManager": "Arun C",
   "Status": "Not This Month",
   "TL": "Eldho",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "NowiTouch Calm",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Milestone 3 (Android)",
   "InvoiceAmount": "$1,200.00 ",
   "ScheduleID": 1017,
   "ProjectManager": "Arun C",
   "Status": "This Month",
   "TL": "Arun M",
   "Deadline": "",
   "Status": "Completed"
 },
 {
   "ProjectName": "THRIVOLOGY",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Android app",
   "InvoiceAmount": "$750.00 ",
   "ScheduleID": 940,
   "ProjectManager": "Retheesh Kumar",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "THRIVOLOGY",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Milestone 2(Android)",
   "InvoiceAmount": "$1,000.00 ",
   "ScheduleID": 939,
   "ProjectManager": "Retheesh Kumar",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "THRIVOLOGY",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of Milestone 1 (Android)",
   "InvoiceAmount": "$1,000.00 ",
   "ScheduleID": 938,
   "ProjectManager": "Retheesh Kumar",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "THRIVOLOGY",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of iPhone app",
   "InvoiceAmount": "$1,390.00 ",
   "ScheduleID": 936,
   "ProjectManager": "Retheesh Kumar",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "Inlinkers Website & Mobile app",
   "InvoiceNumber": "",
   "ScheduleName": "Edit Availability / Promotions / Email Marketing",
   "InvoiceAmount": "$2,832.00 ",
   "ScheduleID": 1333,
   "ProjectManager": "Praveen C Kumar",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "Med Shift X-Change/Android/Website",
   "InvoiceNumber": "",
   "ScheduleName": "Comments & Opening Jobs in Website",
   "InvoiceAmount": "$800.00 ",
   "ScheduleID": 1399,
   "ProjectManager": "Arun C",
   "Status": "Not This Month",
   "TL": "Shinu",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "Med Shift X-Change/Android/Website",
   "InvoiceNumber": "",
   "ScheduleName": "Completion Website Features for Medication Staff",
   "InvoiceAmount": "$3,000.00 ",
   "ScheduleID": 1398,
   "ProjectManager": "Arun C",
   "Status": "Not This Month",
   "TL": "Shinu",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "HOP-IN Taxi App (iOS & Android)",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of 100% of the project - iOS",
   "InvoiceAmount": "$2,000.00 ",
   "ScheduleID": 1350,
   "ProjectManager": "Retheesh Kumar",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "Med Shift X-Change/Android/Website",
   "InvoiceNumber": "",
   "ScheduleName": "Completion of Milestone 2",
   "InvoiceAmount": "$3,000.00 ",
   "ScheduleID": 1341,
   "ProjectManager": "Arun C",
   "Status": "Not This Month",
   "TL": "Shinu",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "COMIC FRIDGE",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion - We need to set validations for the image stretching issues and make design changes in the My Channel, Comic Detail Page and Home Page for these changes you have requested for.",
   "InvoiceAmount": "$684.00 ",
   "ScheduleID": 1437,
   "ProjectManager": "Praveen C Kumar",
   "Status": "Not This Month",
   "TL": "Shinu",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "GOLD PASS",
   "InvoiceNumber": "",
   "ScheduleName": "Milestone 2",
   "InvoiceAmount": "$2,500.00 ",
   "ScheduleID": 1430,
   "ProjectManager": "Deepak Prakash",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "GOLD PASS",
   "InvoiceNumber": "",
   "ScheduleName": "Milestone 3",
   "InvoiceAmount": "$2,000.00 ",
   "ScheduleID": 1431,
   "ProjectManager": "Deepak Prakash",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "GOLD PASS",
   "InvoiceNumber": "",
   "ScheduleName": "Milestone 8",
   "InvoiceAmount": "$2,000.00 ",
   "ScheduleID": 1436,
   "ProjectManager": "Deepak Prakash",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "GOLD PASS",
   "InvoiceNumber": "",
   "ScheduleName": "Milestone 4",
   "InvoiceAmount": "$2,000.00 ",
   "ScheduleID": 1432,
   "ProjectManager": "Deepak Prakash",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "GOLD PASS",
   "InvoiceNumber": "",
   "ScheduleName": "Milestone 5",
   "InvoiceAmount": "$2,000.00 ",
   "ScheduleID": 1433,
   "ProjectManager": "Deepak Prakash",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "GOLD PASS",
   "InvoiceNumber": "",
   "ScheduleName": "Milestone 6",
   "InvoiceAmount": "$2,000.00 ",
   "ScheduleID": 1434,
   "ProjectManager": "Deepak Prakash",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "GOLD PASS",
   "InvoiceNumber": "",
   "ScheduleName": "Milestone 7",
   "InvoiceAmount": "$2,000.00 ",
   "ScheduleID": 1435,
   "ProjectManager": "Deepak Prakash",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "Med Shift X-Change/Android/Website",
   "InvoiceNumber": "",
   "ScheduleName": "Completion of Design Phase of Website Version of the App",
   "InvoiceAmount": "$2,200.00 ",
   "ScheduleID": 1397,
   "ProjectManager": "Arun C",
   "Status": "This Month",
   "TL": "Shine",
   "Deadline": "10/25/2017",
   "Status": ""
 },
 {
   "ProjectName": "Med Shift X-Change/Android/Website",
   "InvoiceNumber": "",
   "ScheduleName": "Completion of Milestone 1",
   "InvoiceAmount": "$3,000.00 ",
   "ScheduleID": 1340,
   "ProjectManager": "Arun C",
   "Status": "This Month",
   "TL": "Shinu",
   "Deadline": "10/17/2017",
   "Status": ""
 },
 {
   "ProjectName": "HOP-IN Taxi App (iOS & Android)",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of 60% of the project - iOS",
   "InvoiceAmount": "$2,000.00 ",
   "ScheduleID": 1349,
   "ProjectManager": "Retheesh Kumar",
   "Status": "This Month",
   "TL": "Shinu",
   "Deadline": "10/20/2017",
   "Status": ""
 },
 {
   "ProjectName": "MedicalOne",
   "InvoiceNumber": "",
   "ScheduleName": "MO017 - Vimeo Integration - Final 50%",
   "InvoiceAmount": "$1,440.00 ",
   "ScheduleID": 1395,
   "ProjectManager": "Praveen C Kumar",
   "Status": "This Month",
   "TL": "Shinu",
   "Deadline": "10/17/2017",
   "Status": ""
 },
 {
   "ProjectName": "Med Shift X-Change/Android/Website",
   "InvoiceNumber": "",
   "ScheduleName": "Completion of Design Phase of Website",
   "InvoiceAmount": "$2,500.00 ",
   "ScheduleID": 1339,
   "ProjectManager": "Arun C",
   "Status": "This Month",
   "TL": "Shine",
   "Deadline": "10/17/2017",
   "Status": ""
 },
 {
   "ProjectName": "For Caregivers",
   "InvoiceNumber": "",
   "ScheduleName": "Milestone 5",
   "InvoiceAmount": "$3,000.00 ",
   "ScheduleID": 1322,
   "ProjectManager": "Deepak Prakash",
   "Status": "Not This Month",
   "TL": "Jinson",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "For Caregivers",
   "InvoiceNumber": "",
   "ScheduleName": "Milestone 4",
   "InvoiceAmount": "$3,000.00 ",
   "ScheduleID": 1321,
   "ProjectManager": "Deepak Prakash",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "For Caregivers",
   "InvoiceNumber": "",
   "ScheduleName": "Milestone 7",
   "InvoiceAmount": "$3,000.00 ",
   "ScheduleID": 1385,
   "ProjectManager": "Deepak Prakash",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "For Caregivers",
   "InvoiceNumber": "",
   "ScheduleName": "Milestone 3",
   "InvoiceAmount": "$3,000.00 ",
   "ScheduleID": 1320,
   "ProjectManager": "Deepak Prakash",
   "Status": "This Month",
   "TL": "Jinson",
   "Deadline": "10/23/2017",
   "Status": ""
 },
 {
   "ProjectName": "For Caregivers",
   "InvoiceNumber": "",
   "ScheduleName": "Milestone 2",
   "InvoiceAmount": "$3,000.00 ",
   "ScheduleID": 1319,
   "ProjectManager": "Deepak Prakash",
   "Status": "This Month",
   "TL": "Jinson",
   "Deadline": "10/13/2017",
   "Status": ""
 },
 {
   "ProjectName": "On-Demand Delivery App",
   "InvoiceNumber": "",
   "ScheduleName": "Milestone 5",
   "InvoiceAmount": "$2,000.00 ",
   "ScheduleID": 1381,
   "ProjectManager": "Deepak Prakash",
   "Status": "Not This Month",
   "TL": "Jinson",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "On-Demand Delivery App",
   "InvoiceNumber": "",
   "ScheduleName": "Milestone 4",
   "InvoiceAmount": "$2,000.00 ",
   "ScheduleID": 1380,
   "ProjectManager": "Deepak Prakash",
   "Status": "Not This Month",
   "TL": "Jinson",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "On-Demand Delivery App",
   "InvoiceNumber": "",
   "ScheduleName": "Milestone 3",
   "InvoiceAmount": "$2,000.00 ",
   "ScheduleID": 1379,
   "ProjectManager": "Deepak Prakash",
   "Status": "This Month",
   "TL": "Jinson",
   "Deadline": "10/20/2017",
   "Status": ""
 },
 {
   "ProjectName": "On-Demand Delivery App",
   "InvoiceNumber": "",
   "ScheduleName": "Milestone 2",
   "InvoiceAmount": "$2,000.00 ",
   "ScheduleID": 1378,
   "ProjectManager": "Deepak Prakash",
   "Status": "This Month",
   "TL": "Jinson",
   "Deadline": "10/26/2017",
   "Status": ""
 },
 {
   "ProjectName": "PersonalTouchProducts",
   "InvoiceNumber": "",
   "ScheduleName": "PTP064",
   "InvoiceAmount": "$1,000.00 ",
   "ScheduleID": 1334,
   "ProjectManager": "Praveen C Kumar",
   "Status": "Not This Month",
   "TL": "Jinson",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "HOP-IN Taxi App (iOS & Android)",
   "InvoiceNumber": "",
   "ScheduleName": "On Completion of 100% of the project",
   "InvoiceAmount": "$2,000.00 ",
   "ScheduleID": 1113,
   "ProjectManager": "Retheesh Kumar",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 },
 {
   "ProjectName": "Real Hospitality Group",
   "InvoiceNumber": "",
   "ScheduleName": "Project Initialization",
   "InvoiceAmount": "$1.00 ",
   "ScheduleID": 1120,
   "ProjectManager": "Deepak Prakash",
   "Status": "Not This Month",
   "TL": "",
   "Deadline": "",
   "Status": ""
 }
]

/*var paymentSchema = mongoose.Schema({

    ProjectName: String,
    InvoiceNumber: String,
    InvoiceAmount: String,
    PaidOn: Date,

},{collections:"schedule"});
var payment = mongoose.model('schedule', paymentSchema);*/

//Static Folder
app.use(express.static(__dirname + '/public/dist'));

app.get('/api/schedule', (req, res, next) => {
    schedulewithoutinvoice.find((err,docs)=>{
        res.json(docs);
        
    })
})
/*app.get('/api/schedule/:ScheduleId', (req, res, next) => {
    console.log(req.params);
    schedulewithoutinvoice.find((err,docs)=>{
        res.json(docs);
    })
})*/


app.get('/api/schedule/update', (req, res, next) => {
    console.log(data[0].ScheduleId)
     schedulewithoutinvoice.find({ ScheduleId: { $eq: data[0].ScheduleId} }, (err,docs)=>{
            console.log(docs);
            //res.json(docs);
        })
    for (var i = 0; i < data.length;i++) {
        console.log(i, data[i].ScheduleId);
        schedulewithoutinvoice.find({ ScheduleId: { $eq: data[i].ScheduleId} },(err,docs)=>{
            console.log(err, docs);
            if (docs == undefined) {
                console.log('No Records Found', i);
            } else {
                console.log('Record(s) Found', i);
                console.log(docs.ScheduleId, data[i].ScheduleId)
            }
        })
    }
    
    //console.log("api/schedule/update");
    //schedulewithoutinvoice.collection.insertMany(data,(err,res)=>{
    //console.log(err,res);
 //});
})

app.post("/forms/:name", (req, res, next) => {
    console.log("Server > POST '/forms' > forms", req.body);
})

//app.get('/users/:userId-:bookId', (req, res, next) => {
 //res.send(req.params);
 //next()},(res,req) => {res.send('praveen')}
 //res.send('praveen');
 //res.sendfile(path.resolve("./public/dist/assets/images/icon_n.jpg"));
 //res.send(req.body);
//)

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.listen(2000, () => console.log("Server runnnig @ 1337 Praveen"));