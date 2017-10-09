var express = require('express');
var router = express.Router();
var emp = require('../lib/emp');

router.get('/', (req, res, next) => {
  res.send('test');
});

router.get('/import', (req, res, next) => {
  res.send('index');
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