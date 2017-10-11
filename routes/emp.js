var express = require('express');
var router = express.Router();
var emp = require('../lib/emp');

var data = [
  
 {
   "empName": "Deepak Prakash",
   "empId": 1112
 },
 {
   "empName": "Praveen Kumar C",
   "empId": 1120
 },
 {
   "empName": "Retheesh Kumar",
   "empId": 1122
 },
 {
   "empName": "Shinu T",
   "empId": 1135
 },
 {
   "empName": "Jinson P L",
   "empId": 1161
 },
 {
   "empName": "Shine Kumar",
   "empId": 1177
 },
 {
   "empName": "Eldho K Abraham",
   "empId": 1184
 },
 {
   "empName": "Bibin Das",
   "empId": 1203
 },
 {
   "empName": "Abin Joy",
   "empId": 1226
 },
 {
   "empName": "Joseph Antony Arun C P",
   "empId": 1229
 },
 {
   "empName": "Arun M Nair",
   "empId": 1262
 },
 {
   "empName": "Ranjith Kumar",
   "empId": 1277
 },
 {
   "empName": "Basil Baby",
   "empId": 1276
 },
 {
   "empName": "Jibin Joy",
   "empId": 1285
 },
 {
   "empName": "Shijil K",
   "empId": 1293
 },
 {
   "empName": "Rejeesh Rajan",
   "empId": 1278
 },
 {
   "empName": "Nithin Skariah",
   "empId": 1
 },
 {
   "empName": "Golwin Antony",
   "empId": 1291
 },
 {
   "empName": "Umesh KK",
   "empId": 1292
 },
 {
   "empName": "Metcy Varghese",
   "empId": 1311
 },
 {
   "empName": "Ardra Mohan",
   "empId": 1312
 },
 {
   "empName": "Abhijith Gopi",
   "empId": 1313
 },
 {
   "empName": "Aneesh G Nair",
   "empId": 16
 },
 {
   "empName": "Bibin P Varghese",
   "empId": 1319
 },
 {
   "empName": "Ananthu Krishnan",
   "empId": 2
 },
 {
   "empName": "Soumya G Nair",
   "empId": 1326
 },
 {
   "empName": "Kiran Shaji",
   "empId": 1329
 },
 {
   "empName": "Nitu Mary Roy",
   "empId": 3
 },
 {
   "empName": "Rajeev Radhakrishnan",
   "empId": 1333
 },
 {
   "empName": "Arun Basil Issac",
   "empId": 1334
 },
 {
   "empName": "Hrishikesh Menon",
   "empId": 1332
 },
 {
   "empName": "Laya Geever",
   "empId": 1331
 },
 {
   "empName": "Tissa George",
   "empId": 1341
 },
 {
   "empName": "Arun Kurian Ninan",
   "empId": 1340
 },
 {
   "empName": "Bibin Joseph",
   "empId": 1375
 },
 {
   "empName": "Nigesh Venu",
   "empId": 1342
 },
 {
   "empName": "Vinil Chandran",
   "empId": 1343
 },
 {
   "empName": "Gibin Thomas",
   "empId": 1344
 },
 {
   "empName": "Rijin K",
   "empId": 1377
 },
 {
   "empName": "Mahesh Mohan",
   "empId": 1347
 },
 {
   "empName": "Ragima Ramesh",
   "empId": 1349
 },
 {
   "empName": "Shawn Thomas",
   "empId": 1348
 },
 {
   "empName": "Siby Mathew",
   "empId": 1361
 },
 {
   "empName": "Remya P R",
   "empId": 1371
 },
 {
   "empName": "Sruthija B",
   "empId": 1373
 },
 {
   "empName": "Deepa M",
   "empId": 1386
 },
 {
   "empName": "Jaison Francis",
   "empId": 1172
 },
 {
   "empName": "Pratheesh Kuriakose",
   "empId": 1130
 },
 {
   "empName": "Prema Nair",
   "empId": 4
 },
 {
   "empName": "Jayaraj R",
   "empId": 1385
 },
 {
   "empName": "Haripriya PK",
   "empId": 5
 },
 {
   "empName": "Ajesh K S",
   "empId": 6
 },
 {
   "empName": "Sachin Sabu",
   "empId": 7
 },
 {
   "empName": "Anton Joseph",
   "empId": 8
 },
 {
   "empName": "Reshma Revikumar",
   "empId": 9
 },
 {
   "empName": "Rohith Radhakrishnan",
   "empId": 10
 },
 {
   "empName": "Livin Lawrence",
   "empId": 11
 },
 {
   "empName": "Biju George",
   "empId": 12
 },
 {
   "empName": "Jilu Anna",
   "empId": 13
 },
 {
   "empName": "Joyal Reji",
   "empId": 14
 },
 {
   "empName": "Roshith Balendran",
   "empId": 15
 },
 {
   "empName": "Vinay Paul",
   "empId": 1399
 },
 {
   "empName": "Manu Varghese",
   "empId": 1407
 },
 {
   "empName": "J Sangeeth",
   "empId": 1408
 },
 {
   "empName": "Surya Prabha B",
   "empId": 1409
 },
 {
   "empName": "Vyshnav Ambadan",
   "empId": 1410
 },
 {
   "empName": "Mrudula Menon",
   "empId": 1412
 },
 {
   "empName": "Santhosh Joseph",
   "empId": 1413
 },
 {
   "empName": "Murali Krishna T K",
   "empId": 1421
 }

]

router.get('/', (req, res, next) => {
  res.send('test');
});

router.get('/import', (req, res, next) => {
 
  for (var i = 0; i < data.length;i++) {
  console.log(i, data[i].empId, data[i].empName);
  emp.collection.insertMany(data,(err, res)=>{
    console.log(err, res);
  })    
    }
});

router.post('/register', (req, res, next) => {
  
  var newEmp = new emp();
  newEmp.empId = req.body.empId;
  newEmp.empName = req.body.empName;
  newEmp.save((err, saveEmp)=>{
    if(err){
      return res.status(500).send(err);
    }
    return res.status(200).send(saveEmp);
  })
});

module.exports = router;