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
   "ScheduleId": 1299,
   "ScheduleName": "On Completion of Milestone 8 (Android)",
   "ScheduleDate": "28 Feb, 2018",
   "ProjectName": "Kick Connect Corp",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$3,500.00 "
 },
 {
   "ScheduleId": 1277,
   "ScheduleName": "On Completion of Milestone 7 (Android)",
   "ScheduleDate": "26 Jan, 2018",
   "ProjectName": "Kick Connect Corp",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$3,500.00 "
 },
 {
   "ScheduleId": 1276,
   "ScheduleName": "On Completion of Milestone 6 (Android)",
   "ScheduleDate": "28 Dec, 2017",
   "ProjectName": "Kick Connect Corp",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$3,500.00 "
 },
 {
   "ScheduleId": 1271,
   "ScheduleName": "On Completion of Milestone 7 (IOS)",
   "ScheduleDate": "27 Dec, 2017",
   "ProjectName": "Kick Connect Corp",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$3,500.00 "
 },
 {
   "ScheduleId": 1406,
   "ScheduleName": "On Completion of Milestone 4",
   "ScheduleDate": "08 Dec, 2017",
   "ProjectName": "Tourist Tracker App - iOS & Android hybrid",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$2,500.00 "
 },
 {
   "ScheduleId": 1270,
   "ScheduleName": "On Completion of Milestone 6 (IOS)",
   "ScheduleDate": "27 Nov, 2017",
   "ProjectName": "Kick Connect Corp",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$3,500.00 "
 },
 {
   "ScheduleId": 1275,
   "ScheduleName": "On Completion of Milestone 5 (Android)",
   "ScheduleDate": "24 Nov, 2017",
   "ProjectName": "Kick Connect Corp",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$4,000.00 "
 },
 {
   "ScheduleId": 1405,
   "ScheduleName": "On Completion of Milestone 3",
   "ScheduleDate": "17 Nov, 2017",
   "ProjectName": "Tourist Tracker App - iOS & Android hybrid",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$2,600.00 "
 },
 {
   "ScheduleId": 1304,
   "ScheduleName": "On Completion of Dev Milestone IV",
   "ScheduleDate": "10 Nov, 2017",
   "ProjectName": "Outbound E5",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$1,200.00 "
 },
 {
   "ScheduleId": 1316,
   "ScheduleName": "remaining payment - 3 to 11",
   "ScheduleDate": "31 Oct, 2017",
   "ProjectName": "Nector - MSL engagement App",
   "ProjectManager": "Deepak Prakash",
   "InvoiceAmount": "$24,580.00 "
 },
 {
   "ScheduleId": 1404,
   "ScheduleName": "On Completion of Milestone 2",
   "ScheduleDate": "27 Oct, 2017",
   "ProjectName": "Tourist Tracker App - iOS & Android hybrid",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$2,500.00 "
 },
 {
   "ScheduleId": 1269,
   "ScheduleName": "On Completion of Milestone 5 (IOS)",
   "ScheduleDate": "27 Oct, 2017",
   "ProjectName": "Kick Connect Corp",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$3,500.00 "
 },
 {
   "ScheduleId": 1274,
   "ScheduleName": "On Completion of Milestone 4 (Android)",
   "ScheduleDate": "26 Oct, 2017",
   "ProjectName": "Kick Connect Corp",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$3,000.00 "
 },
 {
   "ScheduleId": 1401,
   "ScheduleName": "On Completion of the project",
   "ScheduleDate": "26 Oct, 2017",
   "ProjectName": "Revamp of commcarerx.com",
   "ProjectManager": "Retheesh Kumar",
   "InvoiceAmount": "$1,400.00 "
 },
 {
   "ScheduleId": 1260,
   "ScheduleName": "On Completion of the project and prior to going live",
   "ScheduleDate": "24 Oct, 2017",
   "ProjectName": "SWAYE App Ltd",
   "ProjectManager": "Praveen C Kumar",
   "InvoiceAmount": "$1,190.00 "
 },
 {
   "ScheduleId": 1375,
   "ScheduleName": "Milestone 4 (iOS)",
   "ScheduleDate": "21 Oct, 2017",
   "ProjectName": "Statchat v2",
   "ProjectManager": "Deepak Prakash",
   "InvoiceAmount": "$3,000.00 "
 },
 {
   "ScheduleId": 1303,
   "ScheduleName": "On Completion of Dev Milestone III",
   "ScheduleDate": "20 Oct, 2017",
   "ProjectName": "Outbound E5",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$1,200.00 "
 },
 {
   "ScheduleId": 1377,
   "ScheduleName": "milestone 7 to 14",
   "ScheduleDate": "19 Oct, 2017",
   "ProjectName": "Statchat v2",
   "ProjectManager": "Deepak Prakash",
   "InvoiceAmount": "$25,847.00 "
 },
 {
   "ScheduleId": 1376,
   "ScheduleName": "Milestone 5 (iOS)",
   "ScheduleDate": "18 Oct, 2017",
   "ProjectName": "Statchat v2",
   "ProjectManager": "Deepak Prakash",
   "InvoiceAmount": "$3,000.00 "
 },
 {
   "ScheduleId": 1331,
   "ScheduleName": "One completion Project",
   "ScheduleDate": "12 Oct, 2017",
   "ProjectName": "Inlinkers Website & Mobile app",
   "ProjectManager": "Praveen C Kumar",
   "InvoiceAmount": "$1,538.00 "
 },
 {
   "ScheduleId": 1264,
   "ScheduleName": "On Completion of the project and prior to going live",
   "ScheduleDate": "06 Oct, 2017",
   "ProjectName": "BDOT",
   "ProjectManager": "Retheesh Kumar",
   "InvoiceAmount": "$2,880.00 "
 },
 {
   "ScheduleId": 1403,
   "ScheduleName": "On Completion of Milestone 1 - Design phase",
   "ScheduleDate": "05 Oct, 2017",
   "ProjectName": "Tourist Tracker App - iOS & Android hybrid",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$2,500.00 "
 },
 {
   "ScheduleId": 1400,
   "ScheduleName": "On Completion of Design phase",
   "ScheduleDate": "05 Oct, 2017",
   "ProjectName": "Revamp of commcarerx.com",
   "ProjectManager": "Retheesh Kumar",
   "InvoiceAmount": "$1,300.00 "
 },
 {
   "ScheduleId": 1328,
   "ScheduleName": "On Completion of Milestone 3",
   "ScheduleDate": "05 Oct, 2017",
   "ProjectName": "Maintain It -Property Management App (cross platform)",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$2,440.00 "
 },
 {
   "ScheduleId": 1283,
   "ScheduleName": "Android - On Completion of Android app (Milestone 2)",
   "ScheduleDate": "04 Oct, 2017",
   "ProjectName": "AcuPick",
   "ProjectManager": "Retheesh Kumar",
   "InvoiceAmount": "$1,600.00 "
 },
 {
   "ScheduleId": 1259,
   "ScheduleName": "On Completion of 70% of Development",
   "ScheduleDate": "03 Oct, 2017",
   "ProjectName": "SWAYE App Ltd",
   "ProjectManager": "Praveen C Kumar",
   "InvoiceAmount": "$1,190.00 "
 },
 {
   "ScheduleId": 1302,
   "ScheduleName": "On Completion of Dev Milestone II",
   "ScheduleDate": "29 Sep, 2017",
   "ProjectName": "Outbound E5",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$1,600.00 "
 },
 {
   "ScheduleId": 1273,
   "ScheduleName": "On Completion of Milestone 3 (Android)",
   "ScheduleDate": "28 Sep, 2017",
   "ProjectName": "Kick Connect Corp",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$4,000.00 "
 },
 {
   "ScheduleId": 1268,
   "ScheduleName": "On Completion of Milestone 4 (IOS)",
   "ScheduleDate": "27 Sep, 2017",
   "ProjectName": "Kick Connect Corp",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$4,000.00 "
 },
 {
   "ScheduleId": 1327,
   "ScheduleName": "On Completion of Milestone 2",
   "ScheduleDate": "21 Sep, 2017",
   "ProjectName": "Maintain It -Property Management App (cross platform)",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$2,000.00 "
 },
 {
   "ScheduleId": 1374,
   "ScheduleName": "Milestone 3 (iOS)",
   "ScheduleDate": "21 Sep, 2017",
   "ProjectName": "Statchat v2",
   "ProjectManager": "Deepak Prakash",
   "InvoiceAmount": "$3,000.00 "
 },
 {
   "ScheduleId": 1263,
   "ScheduleName": "On Completion of Milestone 3",
   "ScheduleDate": "20 Sep, 2017",
   "ProjectName": "BDOT",
   "ProjectManager": "Retheesh Kumar",
   "InvoiceAmount": "$2,880.00 "
 },
 {
   "ScheduleId": 1280,
   "ScheduleName": "iOS - On Completion of iOS App (Milestone 3)",
   "ScheduleDate": "18 Sep, 2017",
   "ProjectName": "AcuPick",
   "ProjectManager": "Retheesh Kumar",
   "InvoiceAmount": "$2,600.00 "
 },
 {
   "ScheduleId": 1282,
   "ScheduleName": "Android - On Completion of Milestone 1",
   "ScheduleDate": "13 Sep, 2017",
   "ProjectName": "AcuPick",
   "ProjectManager": "Retheesh Kumar",
   "InvoiceAmount": "$2,400.00 "
 },
 {
   "ScheduleId": 1287,
   "ScheduleName": "On Completion of project:",
   "ScheduleDate": "12 Sep, 2017",
   "ProjectName": "OJT App iOS",
   "ProjectManager": "Retheesh Kumar",
   "InvoiceAmount": "$1,945.00 "
 },
 {
   "ScheduleId": 1301,
   "ScheduleName": "On Completion of Dev Milestone I",
   "ScheduleDate": "8 Sep, 2017",
   "ProjectName": "Outbound E5",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$1,200.00 "
 },
 {
   "ScheduleId": 1258,
   "ScheduleName": "On Completion of 30% of Development",
   "ScheduleDate": "5 Sep, 2017",
   "ProjectName": "SWAYE App Ltd",
   "ProjectManager": "Praveen C Kumar",
   "InvoiceAmount": "$1,190.00 "
 },
 {
   "ScheduleId": 1178,
   "ScheduleName": "Post-delivery support for 1 year:",
   "ScheduleDate": "31 Aug, 2017",
   "ProjectName": "Biomarker Cove",
   "ProjectManager": "Retheesh Kumar",
   "InvoiceAmount": "$2,000.00 "
 },
 {
   "ScheduleId": 1262,
   "ScheduleName": "On Completion of Milestone 2",
   "ScheduleDate": "31 Aug, 2017",
   "ProjectName": "BDOT",
   "ProjectManager": "Retheesh Kumar",
   "InvoiceAmount": "$2,880.00 "
 },
 {
   "ScheduleId": 1336,
   "ScheduleName": "Share Feature Android",
   "ScheduleDate": "31 Aug, 2017",
   "ProjectName": "NowiTouch Calm",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$240.00 "
 },
 {
   "ScheduleId": 1279,
   "ScheduleName": "iOS - On Completion of Milestone 2",
   "ScheduleDate": "28 Aug, 2017",
   "ProjectName": "AcuPick",
   "ProjectManager": "Retheesh Kumar",
   "InvoiceAmount": "$2,600.00 "
 },
 {
   "ScheduleId": 1267,
   "ScheduleName": "On Completion of Milestone 3 (IOS)",
   "ScheduleDate": "24 Aug, 2017",
   "ProjectName": "Kick Connect Corp",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$3,000.00 "
 },
 {
   "ScheduleId": 1272,
   "ScheduleName": "On Completion of Milestone 2 (Android)",
   "ScheduleDate": "24 Aug, 2017",
   "ProjectName": "Kick Connect Corp",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$4,250.00 "
 },
 {
   "ScheduleId": 1335,
   "ScheduleName": "Share Feature IOS",
   "ScheduleDate": "11 Aug, 2017",
   "ProjectName": "NowiTouch Calm",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$240.00 "
 },
 {
   "ScheduleId": 1332,
   "ScheduleName": "Edit Services and Flow change",
   "ScheduleDate": "10 Aug, 2017",
   "ProjectName": "Inlinkers Website & Mobile app",
   "ProjectManager": "Praveen C Kumar",
   "InvoiceAmount": "$2,103.00 "
 },
 {
   "ScheduleId": 1177,
   "ScheduleName": "On Completion of the project:",
   "ScheduleDate": "3 Aug, 2017",
   "ProjectName": "Biomarker Cove",
   "ProjectManager": "Retheesh Kumar",
   "InvoiceAmount": "$2,000.00 "
 },
 {
   "ScheduleId": 1312,
   "ScheduleName": "50 % of the Last Invoice Payment 2",
   "ScheduleDate": "31 Jul, 2017",
   "ProjectName": "CashBride",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$750.00 "
 },
 {
   "ScheduleId": 1289,
   "ScheduleName": "ON COMPLETION USER REG, LOGIN, HOME RECEIPTS",
   "ScheduleDate": "26 Jul, 2017",
   "ProjectName": "School Cafe APP",
   "ProjectManager": "Praveen C Kumar",
   "InvoiceAmount": "$2,255.00 "
 },
 {
   "ScheduleId": 1266,
   "ScheduleName": "On Completion of Milestone 2 (IOS)",
   "ScheduleDate": "26 Jul, 2017",
   "ProjectName": "Kick Connect Corp",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$4,000.00 "
 },
 {
   "ScheduleId": 1290,
   "ScheduleName": "ON COMPLETION OF WHOLE PROJECT",
   "ScheduleDate": "26 Jul, 2017",
   "ProjectName": "School Cafe APP",
   "ProjectManager": "Praveen C Kumar",
   "InvoiceAmount": "$2,255.00 "
 },
 {
   "ScheduleId": 1176,
   "ScheduleName": "On Completion of Search module, User-side features:",
   "ScheduleDate": "14 Jul, 2017",
   "ProjectName": "Biomarker Cove",
   "ProjectManager": "Retheesh Kumar",
   "InvoiceAmount": "$2,000.00 "
 },
 {
   "ScheduleId": 1001,
   "ScheduleName": "On Completion of Development Milestone 7",
   "ScheduleDate": "16 Jun, 2017",
   "ProjectName": "AppKast - Android",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$1,500.00 "
 },
 {
   "ScheduleId": 1000,
   "ScheduleName": "On Completion of Development Milestone 6",
   "ScheduleDate": "19 May, 2017",
   "ProjectName": "AppKast - Android",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$2,100.00 "
 },
 {
   "ScheduleId": 999,
   "ScheduleName": "On Completion of Development Milestone 5",
   "ScheduleDate": "21 Apr, 2017",
   "ProjectName": "AppKast - Android",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$2,300.00 "
 },
 {
   "ScheduleId": 1037,
   "ScheduleName": "On Completion of the project",
   "ScheduleDate": "1 Apr, 2017",
   "ProjectName": "Driving Instructors",
   "ProjectManager": "Praveen C Kumar",
   "InvoiceAmount": "$1,251.00 "
 },
 {
   "ScheduleId": 998,
   "ScheduleName": "On Completion of Development Milestone 4",
   "ScheduleDate": "31 Mar, 2017",
   "ProjectName": "AppKast - Android",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$1,850.00 "
 },
 {
   "ScheduleId": 1036,
   "ScheduleName": "On Completion of 80% of development phase",
   "ScheduleDate": "16 March, 2017",
   "ProjectName": "Driving Instructors",
   "ProjectManager": "Praveen C Kumar",
   "InvoiceAmount": "$1,860.00 "
 },
 {
   "ScheduleId": 997,
   "ScheduleName": "On Completion of Development Milestone 3",
   "ScheduleDate": "3 Mar, 2017",
   "ProjectName": "AppKast - Android",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$2,000.00 "
 },
 {
   "ScheduleId": 1095,
   "ScheduleName": "On completion of the project",
   "ScheduleDate": "03 Mar, 2017",
   "ProjectName": "IDEM iPhone App (Phase I)",
   "ProjectManager": "Retheesh Kumar",
   "InvoiceAmount": "$950.00 "
 },
 {
   "ScheduleId": 1035,
   "ScheduleName": "On Completion of 60% of development phase",
   "ScheduleDate": "1 Mar, 2017",
   "ProjectName": "Driving Instructors",
   "ProjectManager": "Praveen C Kumar",
   "InvoiceAmount": "$1,860.00 "
 },
 {
   "ScheduleId": 1034,
   "ScheduleName": "On Completion of 40% of development phase",
   "ScheduleDate": "16 Feb, 2017",
   "ProjectName": "Driving Instructors",
   "ProjectManager": "Praveen C Kumar",
   "InvoiceAmount": "$1,860.00 "
 },
 {
   "ScheduleId": 996,
   "ScheduleName": "On Completion of Development Milestone 2",
   "ScheduleDate": "10 Feb, 2017",
   "ProjectName": "AppKast - Android",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$1,800.00 "
 },
 {
   "ScheduleId": 1062,
   "ScheduleName": "Saving the media files on S3 server",
   "ScheduleDate": "25 Jan, 2017",
   "ProjectName": "Backpacr ios",
   "ProjectManager": "Deepak Prakash",
   "InvoiceAmount": "$300.00 "
 },
 {
   "ScheduleId": 995,
   "ScheduleName": "On Completion of Development Milestone 1",
   "ScheduleDate": "20 Jan, 2017",
   "ProjectName": "AppKast - Android",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$2,000.00 "
 },
 {
   "ScheduleId": 1017,
   "ScheduleName": "On Completion of Milestone 3 (Android)",
   "ScheduleDate": "13 Jan, 2017",
   "ProjectName": "NowiTouch Calm",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$1,200.00 "
 },
 {
   "ScheduleId": 940,
   "ScheduleName": "On Completion of Android app",
   "ScheduleDate": "9 Dec, 2016",
   "ProjectName": "THRIVOLOGY",
   "ProjectManager": "Retheesh Kumar",
   "InvoiceAmount": "$750.00 "
 },
 {
   "ScheduleId": 939,
   "ScheduleName": "On Completion of Milestone 2(Android)",
   "ScheduleDate": "30 Nov, 2016",
   "ProjectName": "THRIVOLOGY",
   "ProjectManager": "Retheesh Kumar",
   "InvoiceAmount": "$1,000.00 "
 },
 {
   "ScheduleId": 938,
   "ScheduleName": "On Completion of Milestone 1 (Android)",
   "ScheduleDate": "16 Nov, 2016",
   "ProjectName": "THRIVOLOGY",
   "ProjectManager": "Retheesh Kumar",
   "InvoiceAmount": "$1,000.00 "
 },
 {
   "ScheduleId": 936,
   "ScheduleName": "On Completion of iPhone app",
   "ScheduleDate": "2 Nov, 2016",
   "ProjectName": "THRIVOLOGY",
   "ProjectManager": "Retheesh Kumar",
   "InvoiceAmount": "$1,390.00 "
 },
 {
   "ScheduleId": 1333,
   "ScheduleName": "Edit Availability / Promotions / Email Marketing",
   "ScheduleDate": "",
   "ProjectName": "Inlinkers Website & Mobile app",
   "ProjectManager": "Praveen C Kumar",
   "InvoiceAmount": "$2,832.00 "
 },
 {
   "ScheduleId": 1399,
   "ScheduleName": "Comments & Opening Jobs in Website",
   "ScheduleDate": "18 Nov, 2017",
   "ProjectName": "Med Shift X-Change/Android/Website",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$800.00 "
 },
 {
   "ScheduleId": 1398,
   "ScheduleName": "Completion Website Features for Medication Staff",
   "ScheduleDate": "31 Oct, 2017",
   "ProjectName": "Med Shift X-Change/Android/Website",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$3,000.00 "
 },
 {
   "ScheduleId": 1350,
   "ScheduleName": "On Completion of 100% of the project - iOS",
   "ScheduleDate": "23 Oct, 2017",
   "ProjectName": "HOP-IN Taxi App (iOS & Android)",
   "ProjectManager": "Retheesh Kumar",
   "InvoiceAmount": "$2,000.00 "
 },
 {
   "ScheduleId": 1341,
   "ScheduleName": "Completion of Milestone 2",
   "ScheduleDate": "20 Oct, 2017",
   "ProjectName": "Med Shift X-Change/Android/Website",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$3,000.00 "
 },
 {
   "ScheduleId": 1397,
   "ScheduleName": "Completion of Design Phase of Website Version of the App",
   "ScheduleDate": "29 Sep, 2017",
   "ProjectName": "Med Shift X-Change/Android/Website",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$2,200.00 "
 },
 {
   "ScheduleId": 1340,
   "ScheduleName": "Completion of Milestone 1",
   "ScheduleDate": "21 Sep, 2017",
   "ProjectName": "Med Shift X-Change/Android/Website",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$3,000.00 "
 },
 {
   "ScheduleId": 1349,
   "ScheduleName": "On Completion of 60% of the project - iOS",
   "ScheduleDate": "20 Sep, 2017",
   "ProjectName": "HOP-IN Taxi App (iOS & Android)",
   "ProjectManager": "Retheesh Kumar",
   "InvoiceAmount": "$2,000.00 "
 },
 {
   "ScheduleId": 1395,
   "ScheduleName": "MO017 - Vimeo Integration - Final 50%",
   "ScheduleDate": "15 Sep, 2017",
   "ProjectName": "MedicalOne",
   "ProjectManager": "Praveen C Kumar",
   "InvoiceAmount": "$1,440.00 "
 },
 {
   "ScheduleId": 1321,
   "ScheduleName": "Milestone 4",
   "ScheduleDate": "31 Aug, 2017",
   "ProjectName": "For Caregivers",
   "ProjectManager": "Deepak Prakash",
   "InvoiceAmount": "$3,000.00 "
 },
 {
   "ScheduleId": 1320,
   "ScheduleName": "Milestone 3",
   "ScheduleDate": "31 Aug, 2017",
   "ProjectName": "For Caregivers",
   "ProjectManager": "Deepak Prakash",
   "InvoiceAmount": "$3,000.00 "
 },
 {
   "ScheduleId": 1319,
   "ScheduleName": "Milestone 2",
   "ScheduleDate": "31 Aug, 2017",
   "ProjectName": "For Caregivers",
   "ProjectManager": "Deepak Prakash",
   "InvoiceAmount": "$3,000.00 "
 },
 {
   "ScheduleId": 1339,
   "ScheduleName": "Completion of Design Phase of Website",
   "ScheduleDate": "31 Aug, 2017",
   "ProjectName": "Med Shift X-Change/Android/Website",
   "ProjectManager": "Arun C",
   "InvoiceAmount": "$2,500.00 "
 },
 {
   "ScheduleId": 1385,
   "ScheduleName": "Milestone 7",
   "ScheduleDate": "31 Aug, 2017",
   "ProjectName": "For Caregivers",
   "ProjectManager": "Deepak Prakash",
   "InvoiceAmount": "$3,000.00 "
 },
 {
   "ScheduleId": 1322,
   "ScheduleName": "Milestone 5",
   "ScheduleDate": "31 Aug, 2017",
   "ProjectName": "For Caregivers",
   "ProjectManager": "Deepak Prakash",
   "InvoiceAmount": "$3,000.00 "
 },
 {
   "ScheduleId": 1381,
   "ScheduleName": "Milestone 5",
   "ScheduleDate": "24 Aug, 2017",
   "ProjectName": "On-Demand Delivery App",
   "ProjectManager": "Deepak Prakash",
   "InvoiceAmount": "$2,000.00 "
 },
 {
   "ScheduleId": 1378,
   "ScheduleName": "Milestone 2",
   "ScheduleDate": "24 Aug, 2017",
   "ProjectName": "On-Demand Delivery App",
   "ProjectManager": "Deepak Prakash",
   "InvoiceAmount": "$2,000.00 "
 },
 {
   "ScheduleId": 1379,
   "ScheduleName": "Milestone 3",
   "ScheduleDate": "24 Aug, 2017",
   "ProjectName": "On-Demand Delivery App",
   "ProjectManager": "Deepak Prakash",
   "InvoiceAmount": "$2,000.00 "
 },
 {
   "ScheduleId": 1380,
   "ScheduleName": "Milestone 4",
   "ScheduleDate": "24 Aug, 2017",
   "ProjectName": "On-Demand Delivery App",
   "ProjectManager": "Deepak Prakash",
   "InvoiceAmount": "$2,000.00 "
 },
 {
   "ScheduleId": 1334,
   "ScheduleName": "PTP064",
   "ScheduleDate": "10 Aug, 2017",
   "ProjectName": "PersonalTouchProducts",
   "ProjectManager": "Praveen C Kumar",
   "InvoiceAmount": "$1,000.00 "
 },
 {
   "ScheduleId": 1314,
   "ScheduleName": "Milestone 2 (on completion)",
   "ScheduleDate": "9 Aug, 2017",
   "ProjectName": "Presentation Delivery Practice app",
   "ProjectManager": "Deepak Prakash",
   "InvoiceAmount": "$1,750.00 "
 },
 {
   "ScheduleId": 1113,
   "ScheduleName": "On Completion of 100% of the project",
   "ScheduleDate": "22 May, 2017",
   "ProjectName": "HOP-IN Taxi App (iOS & Android)",
   "ProjectManager": "Retheesh Kumar",
   "InvoiceAmount": "$2,000.00 "
 },
 {
   "ScheduleId": 1120,
   "ScheduleName": "Project Initialization",
   "ScheduleDate": "15 Mar, 2017",
   "ProjectName": "Real Hospitality Group",
   "ProjectManager": "Deepak Prakash",
   "InvoiceAmount": "$1.00 "
 },
 {
   "ScheduleId": 601,
   "ScheduleName": "L CARD remaining schedule",
   "ScheduleDate": "7 Dec, 2015",
   "ProjectName": "L CARD",
   "ProjectManager": "Deepak Prakash",
   "InvoiceAmount": "$1,750.00 "
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

app.listen(3000, () => console.log("Server runnnig @ 1337 Praveen"));