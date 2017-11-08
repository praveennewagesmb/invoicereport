var express = require('express');
var router = express.Router();
var schema = require('../lib/schema');

data = [
 {
   "empId": 1112,
   "empName": "Deepak Prakash",
   "roleGroup": {
      "designation": "PM"
   },
   "ctcDetails": {
      "salary": 76000,
      "epf": 2042,
      "wf": 20,
      "cl": 3800,
      "insurance": 450,
      "gratuity": 1462,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1112,
   "empName": "Deepak Prakash",
   "roleGroup": {
      "designation": "PM"
   },
   "ctcDetails": {
      "salary": 79000,
      "epf": 2042,
      "wf": 20,
      "cl": 3950,
      "insurance": 450,
      "gratuity": 1519,
      "month": "2/1/2016"
   }
},
 {
   "empId": 1112,
   "empName": "Deepak Prakash",
   "roleGroup": {
      "designation": "PM"
   },
   "ctcDetails": {
      "salary": 92250,
      "epf": 2042,
      "wf": 20,
      "cl": 4613,
      "insurance": 450,
      "gratuity": 1774,
      "month": "9/1/2016"
   }
},
 {
   "empId": 1112,
   "empName": "Deepak Prakash",
   "roleGroup": {
      "designation": "PM"
   },
   "ctcDetails": {
      "salary": 92250,
      "epf": 2004,
      "wf": 20,
      "cl": 4613,
      "insurance": 450,
      "gratuity": 1685,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1120,
   "empName": "Praveen Kumar C",
   "roleGroup": {
      "designation": "PM"
   },
   "ctcDetails": {
      "salary": 77000,
      "epf": 2042,
      "wf": 20,
      "cl": 3850,
      "insurance": 450,
      "gratuity": 1481,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1120,
   "empName": "Praveen Kumar C",
   "roleGroup": {
      "designation": "PM"
   },
   "ctcDetails": {
      "salary": 80000,
      "epf": 2042,
      "wf": 20,
      "cl": 4000,
      "insurance": 450,
      "gratuity": 1538,
      "month": "2/1/2016"
   }
},
 {
   "empId": 1120,
   "empName": "Praveen Kumar C",
   "roleGroup": {
      "designation": "PM"
   },
   "ctcDetails": {
      "salary": 90000,
      "epf": 2042,
      "wf": 20,
      "cl": 4500,
      "insurance": 450,
      "gratuity": 1731,
      "month": "9/1/2016"
   }
},
 {
   "empId": 1120,
   "empName": "Praveen Kumar C",
   "roleGroup": {
      "designation": "PM"
   },
   "ctcDetails": {
      "salary": 90000,
      "epf": 2004,
      "wf": 20,
      "cl": 4500,
      "insurance": 450,
      "gratuity": 1644,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1122,
   "empName": "Retheesh Kumar",
   "roleGroup": {
      "designation": "PM"
   },
   "ctcDetails": {
      "salary": 66300,
      "epf": 2042,
      "wf": 20,
      "cl": 3315,
      "insurance": 450,
      "gratuity": 1275,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1122,
   "empName": "Retheesh Kumar",
   "roleGroup": {
      "designation": "PM"
   },
   "ctcDetails": {
      "salary": 69300,
      "epf": 2042,
      "wf": 20,
      "cl": 3465,
      "insurance": 450,
      "gratuity": 1333,
      "month": "2/1/2016"
   }
},
 {
   "empId": 1122,
   "empName": "Retheesh Kumar",
   "roleGroup": {
      "designation": "PM"
   },
   "ctcDetails": {
      "salary": 77700,
      "epf": 2042,
      "wf": 20,
      "cl": 3885,
      "insurance": 450,
      "gratuity": 1494,
      "month": "9/1/2016"
   }
},
 {
   "empId": 1122,
   "empName": "Retheesh Kumar",
   "roleGroup": {
      "designation": "PM"
   },
   "ctcDetails": {
      "salary": 77700,
      "epf": 2004,
      "wf": 20,
      "cl": 3885,
      "insurance": 450,
      "gratuity": 1420,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1130,
   "empName": "Pratheesh Kuriakose",
   "roleGroup": {
      "designation": "AD"
   },
   "ctcDetails": {
      "salary": 31000,
      "epf": 1339,
      "wf": 20,
      "cl": 1550,
      "insurance": 550,
      "gratuity": 537,
      "month": "1/1/2016"
   }
},
 {
   "empId": 1130,
   "empName": "Pratheesh Kuriakose",
   "roleGroup": {
      "designation": "AD"
   },
   "ctcDetails": {
      "salary": 33500,
      "epf": 1447,
      "wf": 20,
      "cl": 1675,
      "insurance": 550,
      "gratuity": 580,
      "month": "2/1/2016"
   }
},
 {
   "empId": 1130,
   "empName": "Pratheesh Kuriakose",
   "roleGroup": {
      "designation": "AD"
   },
   "ctcDetails": {
      "salary": 37400,
      "epf": 1616,
      "wf": 20,
      "cl": 1870,
      "insurance": 550,
      "gratuity": 647,
      "month": "4/1/2016"
   }
},
 {
   "empId": 1130,
   "empName": "Pratheesh Kuriakose",
   "roleGroup": {
      "designation": "AD"
   },
   "ctcDetails": {
      "salary": 40900,
      "epf": 2004,
      "wf": 20,
      "cl": 2045,
      "insurance": 550,
      "gratuity": 747,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1135,
   "empName": "Shinu T",
   "roleGroup": {
      "designation": "TL"
   },
   "ctcDetails": {
      "salary": 46000,
      "epf": 0,
      "wf": 20,
      "cl": 2300,
      "insurance": 450,
      "gratuity": 885,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1135,
   "empName": "Shinu T",
   "roleGroup": {
      "designation": "TL"
   },
   "ctcDetails": {
      "salary": 48500,
      "epf": 0,
      "wf": 20,
      "cl": 2425,
      "insurance": 450,
      "gratuity": 933,
      "month": "2/1/2016"
   }
},
 {
   "empId": 1135,
   "empName": "Shinu T",
   "roleGroup": {
      "designation": "TL"
   },
   "ctcDetails": {
      "salary": 56300,
      "epf": 0,
      "wf": 20,
      "cl": 2815,
      "insurance": 450,
      "gratuity": 1083,
      "month": "9/1/2016"
   }
},
 {
   "empId": 1135,
   "empName": "Shinu T",
   "roleGroup": {
      "designation": "TL"
   },
   "ctcDetails": {
      "salary": 56300,
      "epf": 0,
      "wf": 20,
      "cl": 2815,
      "insurance": 450,
      "gratuity": 1029,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1161,
   "empName": "Jinson P L",
   "roleGroup": {
      "designation": "TL"
   },
   "ctcDetails": {
      "salary": 50000,
      "epf": 2042,
      "wf": 20,
      "cl": 2500,
      "insurance": 450,
      "gratuity": 962,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1161,
   "empName": "Jinson P L",
   "roleGroup": {
      "designation": "TL"
   },
   "ctcDetails": {
      "salary": 54000,
      "epf": 2042,
      "wf": 20,
      "cl": 2700,
      "insurance": 450,
      "gratuity": 1038,
      "month": "2/1/2016"
   }
},
 {
   "empId": 1161,
   "empName": "Jinson P L",
   "roleGroup": {
      "designation": "TL"
   },
   "ctcDetails": {
      "salary": 62700,
      "epf": 2042,
      "wf": 20,
      "cl": 3135,
      "insurance": 450,
      "gratuity": 1206,
      "month": "9/1/2016"
   }
},
 {
   "empId": 1161,
   "empName": "Jinson P L",
   "roleGroup": {
      "designation": "TL"
   },
   "ctcDetails": {
      "salary": 62700,
      "epf": 2004,
      "wf": 20,
      "cl": 3135,
      "insurance": 450,
      "gratuity": 1145,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1161,
   "empName": "Jinson P L",
   "roleGroup": {
      "designation": "TL"
   },
   "ctcDetails": {
      "salary": 62700,
      "epf": 2004,
      "wf": 20,
      "cl": 3135,
      "insurance": 0,
      "gratuity": 1145,
      "month": "8/1/2017"
   }
},
 {
   "empId": 1172,
   "empName": "Jaison Francis",
   "roleGroup": {
      "designation": "AD"
   },
   "ctcDetails": {
      "salary": 30000,
      "epf": 1296,
      "wf": 20,
      "cl": 1500,
      "insurance": 450,
      "gratuity": 519,
      "month": "1/1/2016"
   }
},
 {
   "empId": 1172,
   "empName": "Jaison Francis",
   "roleGroup": {
      "designation": "AD"
   },
   "ctcDetails": {
      "salary": 32500,
      "epf": 1404,
      "wf": 20,
      "cl": 1625,
      "insurance": 450,
      "gratuity": 563,
      "month": "2/1/2016"
   }
},
 {
   "empId": 1172,
   "empName": "Jaison Francis",
   "roleGroup": {
      "designation": "AD"
   },
   "ctcDetails": {
      "salary": 36500,
      "epf": 1577,
      "wf": 20,
      "cl": 1825,
      "insurance": 450,
      "gratuity": 632,
      "month": "3/1/2016"
   }
},
 {
   "empId": 1172,
   "empName": "Jaison Francis",
   "roleGroup": {
      "designation": "AD"
   },
   "ctcDetails": {
      "salary": 39500,
      "epf": 2042,
      "wf": 20,
      "cl": 1975,
      "insurance": 450,
      "gratuity": 760,
      "month": "12/1/2016"
   }
},
 {
   "empId": 1172,
   "empName": "Jaison Francis",
   "roleGroup": {
      "designation": "AD"
   },
   "ctcDetails": {
      "salary": 40000,
      "epf": 2004,
      "wf": 20,
      "cl": 2000,
      "insurance": 450,
      "gratuity": 731,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1172,
   "empName": "Jaison Francis",
   "roleGroup": {
      "designation": "AD"
   },
   "ctcDetails": {
      "salary": 44000,
      "epf": 2004,
      "wf": 20,
      "cl": 2200,
      "insurance": 450,
      "gratuity": 804,
      "month": "9/1/2017"
   }
},
 {
   "empId": 1177,
   "empName": "Shine Kumar",
   "roleGroup": {
      "designation": "TL"
   },
   "ctcDetails": {
      "salary": 39700,
      "epf": 2042,
      "wf": 20,
      "cl": 1985,
      "insurance": 550,
      "gratuity": 763,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1177,
   "empName": "Shine Kumar",
   "roleGroup": {
      "designation": "TL"
   },
   "ctcDetails": {
      "salary": 42200,
      "epf": 2042,
      "wf": 20,
      "cl": 2110,
      "insurance": 550,
      "gratuity": 812,
      "month": "2/1/2016"
   }
},
 {
   "empId": 1177,
   "empName": "Shine Kumar",
   "roleGroup": {
      "designation": "TL"
   },
   "ctcDetails": {
      "salary": 48200,
      "epf": 2042,
      "wf": 20,
      "cl": 2410,
      "insurance": 550,
      "gratuity": 927,
      "month": "7/1/2016"
   }
},
 {
   "empId": 1177,
   "empName": "Shine Kumar",
   "roleGroup": {
      "designation": "TL"
   },
   "ctcDetails": {
      "salary": 48200,
      "epf": 2004,
      "wf": 20,
      "cl": 2410,
      "insurance": 550,
      "gratuity": 881,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1177,
   "empName": "Shine Kumar",
   "roleGroup": {
      "designation": "TL"
   },
   "ctcDetails": {
      "salary": 53400,
      "epf": 2004,
      "wf": 20,
      "cl": 2670,
      "insurance": 550,
      "gratuity": 976,
      "month": "7/1/2017"
   }
},
 {
   "empId": 1184,
   "empName": "Eldho K Abraham",
   "roleGroup": {
      "designation": "TL"
   },
   "ctcDetails": {
      "salary": 37700,
      "epf": 0,
      "wf": 20,
      "cl": 1885,
      "insurance": 450,
      "gratuity": 725,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1184,
   "empName": "Eldho K Abraham",
   "roleGroup": {
      "designation": "TL"
   },
   "ctcDetails": {
      "salary": 40200,
      "epf": 0,
      "wf": 20,
      "cl": 2010,
      "insurance": 450,
      "gratuity": 773,
      "month": "2/1/2016"
   }
},
 {
   "empId": 1184,
   "empName": "Eldho K Abraham",
   "roleGroup": {
      "designation": "TL"
   },
   "ctcDetails": {
      "salary": 45900,
      "epf": 0,
      "wf": 20,
      "cl": 2295,
      "insurance": 450,
      "gratuity": 883,
      "month": "7/1/2016"
   }
},
 {
   "empId": 1184,
   "empName": "Eldho K Abraham",
   "roleGroup": {
      "designation": "TL"
   },
   "ctcDetails": {
      "salary": 45900,
      "epf": 0,
      "wf": 20,
      "cl": 2295,
      "insurance": 450,
      "gratuity": 839,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1184,
   "empName": "Eldho K Abraham",
   "roleGroup": {
      "designation": "TL"
   },
   "ctcDetails": {
      "salary": 51100,
      "epf": 0,
      "wf": 20,
      "cl": 2555,
      "insurance": 450,
      "gratuity": 934,
      "month": "7/1/2017"
   }
},
 {
   "empId": 1203,
   "empName": "Bibin Das",
   "roleGroup": {
      "designation": "SL"
   },
   "ctcDetails": {
      "salary": 47000,
      "epf": 2042,
      "wf": 20,
      "cl": 2350,
      "insurance": 450,
      "gratuity": 904,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1203,
   "empName": "Bibin Das",
   "roleGroup": {
      "designation": "SL"
   },
   "ctcDetails": {
      "salary": 51000,
      "epf": 2042,
      "wf": 20,
      "cl": 2550,
      "insurance": 450,
      "gratuity": 981,
      "month": "2/1/2016"
   }
},
 {
   "empId": 1203,
   "empName": "Bibin Das",
   "roleGroup": {
      "designation": "SL"
   },
   "ctcDetails": {
      "salary": 61000,
      "epf": 2042,
      "wf": 20,
      "cl": 3050,
      "insurance": 450,
      "gratuity": 1173,
      "month": "11/1/2016"
   }
},
 {
   "empId": 1203,
   "empName": "Bibin Das",
   "roleGroup": {
      "designation": "SL"
   },
   "ctcDetails": {
      "salary": 61000,
      "epf": 2004,
      "wf": 20,
      "cl": 3050,
      "insurance": 450,
      "gratuity": 1114,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1226,
   "empName": "Abin Joy",
   "roleGroup": {
      "designation": "ATL"
   },
   "ctcDetails": {
      "salary": 36500,
      "epf": 1560,
      "wf": 20,
      "cl": 1825,
      "insurance": 550,
      "gratuity": 625,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1226,
   "empName": "Abin Joy",
   "roleGroup": {
      "designation": "ATL"
   },
   "ctcDetails": {
      "salary": 41500,
      "epf": 2042,
      "wf": 20,
      "cl": 2075,
      "insurance": 550,
      "gratuity": 798,
      "month": "2/1/2016"
   }
},
 {
   "empId": 1226,
   "empName": "Abin Joy",
   "roleGroup": {
      "designation": "ATL"
   },
   "ctcDetails": {
      "salary": 41500,
      "epf": 2004,
      "wf": 20,
      "cl": 2075,
      "insurance": 550,
      "gratuity": 758,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1226,
   "empName": "Abin Joy",
   "roleGroup": {
      "designation": "ATL"
   },
   "ctcDetails": {
      "salary": 45500,
      "epf": 2004,
      "wf": 20,
      "cl": 2275,
      "insurance": 550,
      "gratuity": 831,
      "month": "2/1/2017"
   }
},
 {
   "empId": 1229,
   "empName": "Joseph Antony Arun C P",
   "roleGroup": {
      "designation": "PM"
   },
   "ctcDetails": {
      "salary": 56800,
      "epf": 2042,
      "wf": 20,
      "cl": 2840,
      "insurance": 450,
      "gratuity": 1092,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1229,
   "empName": "Joseph Antony Arun C P",
   "roleGroup": {
      "designation": "PM"
   },
   "ctcDetails": {
      "salary": 59800,
      "epf": 2042,
      "wf": 20,
      "cl": 2990,
      "insurance": 450,
      "gratuity": 1150,
      "month": "2/1/2016"
   }
},
 {
   "empId": 1229,
   "empName": "Joseph Antony Arun C P",
   "roleGroup": {
      "designation": "PM"
   },
   "ctcDetails": {
      "salary": 67000,
      "epf": 2042,
      "wf": 20,
      "cl": 3350,
      "insurance": 450,
      "gratuity": 1288,
      "month": "10/1/2016"
   }
},
 {
   "empId": 1229,
   "empName": "Joseph Antony Arun C P",
   "roleGroup": {
      "designation": "PM"
   },
   "ctcDetails": {
      "salary": 67000,
      "epf": 2004,
      "wf": 20,
      "cl": 3350,
      "insurance": 450,
      "gratuity": 1224,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1262,
   "empName": "Arun M Nair",
   "roleGroup": {
      "designation": "TL"
   },
   "ctcDetails": {
      "salary": 34000,
      "epf": 1469,
      "wf": 20,
      "cl": 1700,
      "insurance": 550,
      "gratuity": 588,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1262,
   "empName": "Arun M Nair",
   "roleGroup": {
      "designation": "TL"
   },
   "ctcDetails": {
      "salary": 37000,
      "epf": 1598,
      "wf": 20,
      "cl": 1850,
      "insurance": 550,
      "gratuity": 640,
      "month": "2/1/2016"
   }
},
 {
   "empId": 1262,
   "empName": "Arun M Nair",
   "roleGroup": {
      "designation": "TL"
   },
   "ctcDetails": {
      "salary": 37000,
      "epf": 1780,
      "wf": 20,
      "cl": 1850,
      "insurance": 550,
      "gratuity": 640,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1262,
   "empName": "Arun M Nair",
   "roleGroup": {
      "designation": "TL"
   },
   "ctcDetails": {
      "salary": 42500,
      "epf": 2042,
      "wf": 20,
      "cl": 2125,
      "insurance": 550,
      "gratuity": 817,
      "month": "2/1/2017"
   }
},
 {
   "empId": 1262,
   "empName": "Arun M Nair",
   "roleGroup": {
      "designation": "TL"
   },
   "ctcDetails": {
      "salary": 41500,
      "epf": 2004,
      "wf": 20,
      "cl": 2075,
      "insurance": 550,
      "gratuity": 758,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1276,
   "empName": "Basil Baby",
   "roleGroup": {
      "designation": "ATL"
   },
   "ctcDetails": {
      "salary": 27700,
      "epf": 1263,
      "wf": 20,
      "cl": 1385,
      "insurance": 0,
      "gratuity": 506,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1276,
   "empName": "Basil Baby",
   "roleGroup": {
      "designation": "ATL"
   },
   "ctcDetails": {
      "salary": 32200,
      "epf": 1391,
      "wf": 20,
      "cl": 1610,
      "insurance": 0,
      "gratuity": 557,
      "month": "2/1/2016"
   }
},
 {
   "empId": 1276,
   "empName": "Basil Baby",
   "roleGroup": {
      "designation": "ATL"
   },
   "ctcDetails": {
      "salary": 37200,
      "epf": 1607,
      "wf": 20,
      "cl": 1860,
      "insurance": 0,
      "gratuity": 644,
      "month": "11/1/2016"
   }
},
 {
   "empId": 1276,
   "empName": "Basil Baby",
   "roleGroup": {
      "designation": "ATL"
   },
   "ctcDetails": {
      "salary": 37200,
      "epf": 1789,
      "wf": 20,
      "cl": 1860,
      "insurance": 0,
      "gratuity": 644,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1276,
   "empName": "Basil Baby",
   "roleGroup": {
      "designation": "ATL"
   },
   "ctcDetails": {
      "salary": 41200,
      "epf": 2004,
      "wf": 20,
      "cl": 2060,
      "insurance": 0,
      "gratuity": 753,
      "month": "8/1/2017"
   }
},
 {
   "empId": 1277,
   "empName": "Ranjith Kumar",
   "roleGroup": {
      "designation": "AD"
   },
   "ctcDetails": {
      "salary": 29000,
      "epf": 1322,
      "wf": 20,
      "cl": 1450,
      "insurance": 550,
      "gratuity": 530,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1277,
   "empName": "Ranjith Kumar",
   "roleGroup": {
      "designation": "AD"
   },
   "ctcDetails": {
      "salary": 31500,
      "epf": 1361,
      "wf": 20,
      "cl": 1575,
      "insurance": 550,
      "gratuity": 545,
      "month": "2/1/2016"
   }
},
 {
   "empId": 1277,
   "empName": "Ranjith Kumar",
   "roleGroup": {
      "designation": "AD"
   },
   "ctcDetails": {
      "salary": 34500,
      "epf": 1490,
      "wf": 20,
      "cl": 1725,
      "insurance": 450,
      "gratuity": 597,
      "month": "5/1/2016"
   }
},
 {
   "empId": 1277,
   "empName": "Ranjith Kumar",
   "roleGroup": {
      "designation": "AD"
   },
   "ctcDetails": {
      "salary": 37000,
      "epf": 1780,
      "wf": 20,
      "cl": 1850,
      "insurance": 450,
      "gratuity": 640,
      "month": "2/1/2017"
   }
},
 {
   "empId": 1278,
   "empName": "Rejeesh Rajan",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 25000,
      "epf": 0,
      "wf": 20,
      "cl": 1250,
      "insurance": 450,
      "gratuity": 481,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1278,
   "empName": "Rejeesh Rajan",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 33000,
      "epf": 0,
      "wf": 20,
      "cl": 1650,
      "insurance": 450,
      "gratuity": 571,
      "month": "2/1/2016"
   }
},
 {
   "empId": 1278,
   "empName": "Rejeesh Rajan",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 37500,
      "epf": 0,
      "wf": 20,
      "cl": 1875,
      "insurance": 450,
      "gratuity": 721,
      "month": "11/1/2016"
   }
},
 {
   "empId": 1278,
   "empName": "Rejeesh Rajan",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 40400,
      "epf": 0,
      "wf": 20,
      "cl": 2020,
      "insurance": 450,
      "gratuity": 738,
      "month": "8/1/2017"
   }
},
 {
   "empId": 1285,
   "empName": "Jibin Joy",
   "roleGroup": {
      "designation": "ATL"
   },
   "ctcDetails": {
      "salary": 24000,
      "epf": 1152,
      "wf": 20,
      "cl": 1200,
      "insurance": 0,
      "gratuity": 462,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1285,
   "empName": "Jibin Joy",
   "roleGroup": {
      "designation": "ATL"
   },
   "ctcDetails": {
      "salary": 26500,
      "epf": 1272,
      "wf": 20,
      "cl": 1325,
      "insurance": 0,
      "gratuity": 510,
      "month": "2/1/2016"
   }
},
 {
   "empId": 1285,
   "empName": "Jibin Joy",
   "roleGroup": {
      "designation": "ATL"
   },
   "ctcDetails": {
      "salary": 35500,
      "epf": 1534,
      "wf": 20,
      "cl": 1775,
      "insurance": 0,
      "gratuity": 614,
      "month": "5/1/2016"
   }
},
 {
   "empId": 1285,
   "empName": "Jibin Joy",
   "roleGroup": {
      "designation": "ATL"
   },
   "ctcDetails": {
      "salary": 35500,
      "epf": 1534,
      "wf": 20,
      "cl": 1775,
      "insurance": 450,
      "gratuity": 614,
      "month": "6/1/2016"
   }
},
 {
   "empId": 1285,
   "empName": "Jibin Joy",
   "roleGroup": {
      "designation": "ATL"
   },
   "ctcDetails": {
      "salary": 40000,
      "epf": 2004,
      "wf": 20,
      "cl": 2000,
      "insurance": 450,
      "gratuity": 731,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1291,
   "empName": "Golwin Antony",
   "roleGroup": {
      "designation": "ATL"
   },
   "ctcDetails": {
      "salary": 23000,
      "epf": 1104,
      "wf": 20,
      "cl": 1150,
      "insurance": 0,
      "gratuity": 442,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1291,
   "empName": "Golwin Antony",
   "roleGroup": {
      "designation": "ATL"
   },
   "ctcDetails": {
      "salary": 25500,
      "epf": 1224,
      "wf": 20,
      "cl": 1275,
      "insurance": 0,
      "gratuity": 490,
      "month": "2/1/2016"
   }
},
 {
   "empId": 1291,
   "empName": "Golwin Antony",
   "roleGroup": {
      "designation": "ATL"
   },
   "ctcDetails": {
      "salary": 30500,
      "epf": 1318,
      "wf": 20,
      "cl": 1525,
      "insurance": 0,
      "gratuity": 528,
      "month": "6/1/2016"
   }
},
 {
   "empId": 1291,
   "empName": "Golwin Antony",
   "roleGroup": {
      "designation": "ATL"
   },
   "ctcDetails": {
      "salary": 36000,
      "epf": 1731,
      "wf": 20,
      "cl": 1800,
      "insurance": 0,
      "gratuity": 623,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1292,
   "empName": "Umesh KK",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 19000,
      "epf": 912,
      "wf": 20,
      "cl": 950,
      "insurance": 0,
      "gratuity": 365,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1292,
   "empName": "Umesh KK",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 23800,
      "epf": 1142,
      "wf": 20,
      "cl": 1190,
      "insurance": 0,
      "gratuity": 458,
      "month": "5/1/2016"
   }
},
 {
   "empId": 1292,
   "empName": "Umesh KK",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 28300,
      "epf": 1290,
      "wf": 20,
      "cl": 1415,
      "insurance": 0,
      "gratuity": 517,
      "month": "11/1/2016"
   }
},
 {
   "empId": 1292,
   "empName": "Umesh KK",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 28300,
      "epf": 1437,
      "wf": 20,
      "cl": 1415,
      "insurance": 0,
      "gratuity": 517,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1292,
   "empName": "Umesh KK",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 30700,
      "epf": 1477,
      "wf": 20,
      "cl": 1535,
      "insurance": 0,
      "gratuity": 531,
      "month": "8/1/2017"
   }
},
 {
   "empId": 1293,
   "empName": "Shijil K",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 28500,
      "epf": 1320,
      "wf": 20,
      "cl": 1425,
      "insurance": 0,
      "gratuity": 529,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1293,
   "empName": "Shijil K",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 33500,
      "epf": 1447,
      "wf": 20,
      "cl": 1675,
      "insurance": 0,
      "gratuity": 580,
      "month": "2/1/2016"
   }
},
 {
   "empId": 1293,
   "empName": "Shijil K",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 38500,
      "epf": 2042,
      "wf": 20,
      "cl": 1925,
      "insurance": 0,
      "gratuity": 740,
      "month": "11/1/2016"
   }
},
 {
   "empId": 1293,
   "empName": "Shijil K",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 38500,
      "epf": 2004,
      "wf": 20,
      "cl": 1925,
      "insurance": 0,
      "gratuity": 740,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1293,
   "empName": "Shijil K",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 41500,
      "epf": 2004,
      "wf": 20,
      "cl": 2075,
      "insurance": 0,
      "gratuity": 758,
      "month": "8/1/2017"
   }
},
 {
   "empId": 1311,
   "empName": "Metcy Varghese",
   "roleGroup": {
      "designation": "PC"
   },
   "ctcDetails": {
      "salary": 16000,
      "epf": 768,
      "wf": 20,
      "cl": 800,
      "insurance": 0,
      "gratuity": 308,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1311,
   "empName": "Metcy Varghese",
   "roleGroup": {
      "designation": "PC"
   },
   "ctcDetails": {
      "salary": 19500,
      "epf": 936,
      "wf": 20,
      "cl": 975,
      "insurance": 0,
      "gratuity": 375,
      "month": "2/1/2016"
   }
},
 {
   "empId": 1311,
   "empName": "Metcy Varghese",
   "roleGroup": {
      "designation": "PC"
   },
   "ctcDetails": {
      "salary": 23500,
      "epf": 1128,
      "wf": 20,
      "cl": 1175,
      "insurance": 0,
      "gratuity": 452,
      "month": "11/1/2016"
   }
},
 {
   "empId": 1311,
   "empName": "Metcy Varghese",
   "roleGroup": {
      "designation": "PC"
   },
   "ctcDetails": {
      "salary": 23500,
      "epf": 1256,
      "wf": 20,
      "cl": 1175,
      "insurance": 0,
      "gratuity": 452,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1311,
   "empName": "Metcy Varghese",
   "roleGroup": {
      "designation": "PC"
   },
   "ctcDetails": {
      "salary": 27900,
      "epf": 1416,
      "wf": 20,
      "cl": 1395,
      "insurance": 0,
      "gratuity": 510,
      "month": "8/1/2017"
   }
},
 {
   "empId": 1312,
   "empName": "Ardra Mohan",
   "roleGroup": {
      "designation": "XEMP"
   },
   "ctcDetails": {
      "salary": 16000,
      "epf": 768,
      "wf": 20,
      "cl": 800,
      "insurance": 0,
      "gratuity": 308,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1312,
   "empName": "Ardra Mohan",
   "roleGroup": {
      "designation": "XEMP"
   },
   "ctcDetails": {
      "salary": 19500,
      "epf": 936,
      "wf": 20,
      "cl": 975,
      "insurance": 0,
      "gratuity": 375,
      "month": "2/1/2016"
   }
},
 {
   "empId": 1312,
   "empName": "Ardra Mohan",
   "roleGroup": {
      "designation": "XEMP"
   },
   "ctcDetails": {
      "salary": 23500,
      "epf": 1128,
      "wf": 20,
      "cl": 1175,
      "insurance": 0,
      "gratuity": 452,
      "month": "11/1/2016"
   }
},
 {
   "empId": 1312,
   "empName": "Ardra Mohan",
   "roleGroup": {
      "designation": "XEMP"
   },
   "ctcDetails": {
      "salary": 23500,
      "epf": 1256,
      "wf": 20,
      "cl": 1175,
      "insurance": 0,
      "gratuity": 452,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1313,
   "empName": "Abhijith Gopi",
   "roleGroup": {
      "designation": "ATL"
   },
   "ctcDetails": {
      "salary": 24700,
      "epf": 1186,
      "wf": 20,
      "cl": 1235,
      "insurance": 0,
      "gratuity": 475,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1313,
   "empName": "Abhijith Gopi",
   "roleGroup": {
      "designation": "ATL"
   },
   "ctcDetails": {
      "salary": 30000,
      "epf": 1296,
      "wf": 20,
      "cl": 1500,
      "insurance": 0,
      "gratuity": 519,
      "month": "2/1/2016"
   }
},
 {
   "empId": 1313,
   "empName": "Abhijith Gopi",
   "roleGroup": {
      "designation": "ATL"
   },
   "ctcDetails": {
      "salary": 36000,
      "epf": 1555,
      "wf": 20,
      "cl": 1800,
      "insurance": 0,
      "gratuity": 623,
      "month": "11/1/2016"
   }
},
 {
   "empId": 1313,
   "empName": "Abhijith Gopi",
   "roleGroup": {
      "designation": "ATL"
   },
   "ctcDetails": {
      "salary": 36000,
      "epf": 1731,
      "wf": 20,
      "cl": 1800,
      "insurance": 0,
      "gratuity": 623,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1313,
   "empName": "Abhijith Gopi",
   "roleGroup": {
      "designation": "ATL"
   },
   "ctcDetails": {
      "salary": 39100,
      "epf": 2004,
      "wf": 20,
      "cl": 1955,
      "insurance": 0,
      "gratuity": 752,
      "month": "8/1/2017"
   }
},
 {
   "empId": 1319,
   "empName": "Bibin P Varghese",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 13000,
      "epf": 624,
      "wf": 20,
      "cl": 650,
      "insurance": 617,
      "gratuity": 250,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1319,
   "empName": "Bibin P Varghese",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 17000,
      "epf": 816,
      "wf": 20,
      "cl": 850,
      "insurance": 807,
      "gratuity": 327,
      "month": "3/1/2016"
   }
},
 {
   "empId": 1319,
   "empName": "Bibin P Varghese",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 17000,
      "epf": 816,
      "wf": 20,
      "cl": 850,
      "insurance": 0,
      "gratuity": 327,
      "month": "5/1/2016"
   }
},
 {
   "empId": 1319,
   "empName": "Bibin P Varghese",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 21000,
      "epf": 1008,
      "wf": 20,
      "cl": 1050,
      "insurance": 0,
      "gratuity": 404,
      "month": "9/1/2016"
   }
},
 {
   "empId": 1319,
   "empName": "Bibin P Varghese",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 25000,
      "epf": 1336,
      "wf": 20,
      "cl": 1250,
      "insurance": 0,
      "gratuity": 481,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1319,
   "empName": "Bibin P Varghese",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 26800,
      "epf": 1432,
      "wf": 20,
      "cl": 1340,
      "insurance": 0,
      "gratuity": 515,
      "month": "9/1/2017"
   }
},
 {
   "empId": 1326,
   "empName": "Soumya G Nair",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 17500,
      "epf": 840,
      "wf": 20,
      "cl": 875,
      "insurance": 0,
      "gratuity": 337,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1326,
   "empName": "Soumya G Nair",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 20000,
      "epf": 960,
      "wf": 20,
      "cl": 1000,
      "insurance": 0,
      "gratuity": 385,
      "month": "2/1/2016"
   }
},
 {
   "empId": 1326,
   "empName": "Soumya G Nair",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 22500,
      "epf": 1080,
      "wf": 20,
      "cl": 1125,
      "insurance": 0,
      "gratuity": 433,
      "month": "8/1/2016"
   }
},
 {
   "empId": 1326,
   "empName": "Soumya G Nair",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 25500,
      "epf": 1224,
      "wf": 20,
      "cl": 1275,
      "insurance": 0,
      "gratuity": 490,
      "month": "2/1/2017"
   }
},
 {
   "empId": 1326,
   "empName": "Soumya G Nair",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 25500,
      "epf": 1363,
      "wf": 20,
      "cl": 1275,
      "insurance": 0,
      "gratuity": 490,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1329,
   "empName": "Kiran Shaji",
   "roleGroup": {
      "designation": "PC"
   },
   "ctcDetails": {
      "salary": 15500,
      "epf": 744,
      "wf": 20,
      "cl": 775,
      "insurance": 0,
      "gratuity": 298,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1329,
   "empName": "Kiran Shaji",
   "roleGroup": {
      "designation": "PC"
   },
   "ctcDetails": {
      "salary": 21500,
      "epf": 1032,
      "wf": 20,
      "cl": 1075,
      "insurance": 0,
      "gratuity": 413,
      "month": "9/1/2016"
   }
},
 {
   "empId": 1329,
   "empName": "Kiran Shaji",
   "roleGroup": {
      "designation": "PC"
   },
   "ctcDetails": {
      "salary": 21500,
      "epf": 1149,
      "wf": 20,
      "cl": 1075,
      "insurance": 0,
      "gratuity": 413,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1329,
   "empName": "Kiran Shaji",
   "roleGroup": {
      "designation": "PC"
   },
   "ctcDetails": {
      "salary": 26500,
      "epf": 1416,
      "wf": 20,
      "cl": 1325,
      "insurance": 0,
      "gratuity": 510,
      "month": "5/1/2017"
   }
},
 {
   "empId": 1331,
   "empName": "Laya Geever",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 13000,
      "epf": 624,
      "wf": 20,
      "cl": 650,
      "insurance": 618,
      "gratuity": 250,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1331,
   "empName": "Laya Geever",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 17000,
      "epf": 816,
      "wf": 20,
      "cl": 850,
      "insurance": 808,
      "gratuity": 327,
      "month": "6/1/2016"
   }
},
 {
   "empId": 1331,
   "empName": "Laya Geever",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 21000,
      "epf": 1008,
      "wf": 20,
      "cl": 1050,
      "insurance": 0,
      "gratuity": 327,
      "month": "12/1/2016"
   }
},
 {
   "empId": 1331,
   "empName": "Laya Geever",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 21100,
      "epf": 1013,
      "wf": 20,
      "cl": 1055,
      "insurance": 0,
      "gratuity": 406,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1331,
   "empName": "Laya Geever",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 21100,
      "epf": 1128,
      "wf": 20,
      "cl": 1055,
      "insurance": 0,
      "gratuity": 406,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1331,
   "empName": "Laya Geever",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 23600,
      "epf": 1261,
      "wf": 20,
      "cl": 1180,
      "insurance": 0,
      "gratuity": 454,
      "month": "6/1/2017"
   }
},
 {
   "empId": 1332,
   "empName": "Hrishikesh Menon",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 15100,
      "epf": 725,
      "wf": 20,
      "cl": 755,
      "insurance": 0,
      "gratuity": 290,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1332,
   "empName": "Hrishikesh Menon",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 17500,
      "epf": 840,
      "wf": 20,
      "cl": 875,
      "insurance": 0,
      "gratuity": 337,
      "month": "6/1/2016"
   }
},
 {
   "empId": 1332,
   "empName": "Hrishikesh Menon",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 18000,
      "epf": 864,
      "wf": 20,
      "cl": 900,
      "insurance": 0,
      "gratuity": 346,
      "month": "7/1/2016"
   }
},
 {
   "empId": 1332,
   "empName": "Hrishikesh Menon",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 21000,
      "epf": 1008,
      "wf": 20,
      "cl": 1050,
      "insurance": 0,
      "gratuity": 404,
      "month": "12/1/2016"
   }
},
 {
   "empId": 1332,
   "empName": "Hrishikesh Menon",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 21100,
      "epf": 1013,
      "wf": 20,
      "cl": 1055,
      "insurance": 0,
      "gratuity": 406,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1332,
   "empName": "Hrishikesh Menon",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 21100,
      "epf": 1128,
      "wf": 20,
      "cl": 1055,
      "insurance": 0,
      "gratuity": 406,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1332,
   "empName": "Hrishikesh Menon",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 24100,
      "epf": 1288,
      "wf": 20,
      "cl": 1205,
      "insurance": 0,
      "gratuity": 463,
      "month": "6/1/2017"
   }
},
 {
   "empId": 1333,
   "empName": "Rajeev Radhakrishnan",
   "roleGroup": {
      "designation": "XEMP"
   },
   "ctcDetails": {
      "salary": 16000,
      "epf": 768,
      "wf": 20,
      "cl": 800,
      "insurance": 0,
      "gratuity": 308,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1333,
   "empName": "Rajeev Radhakrishnan",
   "roleGroup": {
      "designation": "XEMP"
   },
   "ctcDetails": {
      "salary": 19000,
      "epf": 912,
      "wf": 20,
      "cl": 950,
      "insurance": 0,
      "gratuity": 365,
      "month": "7/1/2016"
   }
},
 {
   "empId": 1334,
   "empName": "Arun Basil Issac",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 15100,
      "epf": 725,
      "wf": 20,
      "cl": 755,
      "insurance": 0,
      "gratuity": 290,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1334,
   "empName": "Arun Basil Issac",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 17500,
      "epf": 840,
      "wf": 20,
      "cl": 875,
      "insurance": 0,
      "gratuity": 337,
      "month": "6/1/2016"
   }
},
 {
   "empId": 1334,
   "empName": "Arun Basil Issac",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 18000,
      "epf": 864,
      "wf": 20,
      "cl": 900,
      "insurance": 0,
      "gratuity": 346,
      "month": "7/1/2016"
   }
},
 {
   "empId": 1334,
   "empName": "Arun Basil Issac",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 21000,
      "epf": 1008,
      "wf": 20,
      "cl": 1050,
      "insurance": 0,
      "gratuity": 404,
      "month": "12/1/2016"
   }
},
 {
   "empId": 1334,
   "empName": "Arun Basil Issac",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 21100,
      "epf": 1013,
      "wf": 20,
      "cl": 1055,
      "insurance": 0,
      "gratuity": 406,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1334,
   "empName": "Arun Basil Issac",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 21100,
      "epf": 1128,
      "wf": 20,
      "cl": 1055,
      "insurance": 0,
      "gratuity": 406,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1334,
   "empName": "Arun Basil Issac",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 24000,
      "epf": 1283,
      "wf": 20,
      "cl": 1200,
      "insurance": 0,
      "gratuity": 462,
      "month": "8/1/2017"
   }
},
 {
   "empId": 1340,
   "empName": "Arun Kurian Ninan",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 14000,
      "epf": 0,
      "wf": 0,
      "cl": 0,
      "insurance": 0,
      "gratuity": 269,
      "month": "3/1/2016"
   }
},
 {
   "empId": 1340,
   "empName": "Arun Kurian Ninan",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 16000,
      "epf": 768,
      "wf": 20,
      "cl": 800,
      "insurance": 0,
      "gratuity": 308,
      "month": "6/1/2016"
   }
},
 {
   "empId": 1340,
   "empName": "Arun Kurian Ninan",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 19000,
      "epf": 912,
      "wf": 20,
      "cl": 950,
      "insurance": 0,
      "gratuity": 365,
      "month": "12/1/2016"
   }
},
 {
   "empId": 1340,
   "empName": "Arun Kurian Ninan",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 19000,
      "epf": 912,
      "wf": 20,
      "cl": 950,
      "insurance": 902.5,
      "gratuity": 365,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1340,
   "empName": "Arun Kurian Ninan",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 19000,
      "epf": 1015,
      "wf": 20,
      "cl": 950,
      "insurance": 859,
      "gratuity": 365,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1340,
   "empName": "Arun Kurian Ninan",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 22000,
      "epf": 1176,
      "wf": 20,
      "cl": 1100,
      "insurance": 994,
      "gratuity": 423,
      "month": "7/1/2017"
   }
},
 {
   "empId": 1341,
   "empName": "Tissa George",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 12000,
      "epf": 0,
      "wf": 0,
      "cl": 0,
      "insurance": 0,
      "gratuity": 231,
      "month": "12/1/2015"
   }
},
 {
   "empId": 1341,
   "empName": "Tissa George",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 15100,
      "epf": 725,
      "wf": 20,
      "cl": 755,
      "insurance": 0,
      "gratuity": 290,
      "month": "3/1/2016"
   }
},
 {
   "empId": 1341,
   "empName": "Tissa George",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 17500,
      "epf": 840,
      "wf": 20,
      "cl": 875,
      "insurance": 0,
      "gratuity": 290,
      "month": "10/1/2016"
   }
},
 {
   "empId": 1341,
   "empName": "Tissa George",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 17500,
      "epf": 840,
      "wf": 20,
      "cl": 875,
      "insurance": 831.25,
      "gratuity": 290,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1341,
   "empName": "Tissa George",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 17500,
      "epf": 935,
      "wf": 20,
      "cl": 875,
      "insurance": 791,
      "gratuity": 337,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1341,
   "empName": "Tissa George",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 20000,
      "epf": 1069,
      "wf": 20,
      "cl": 1000,
      "insurance": 904,
      "gratuity": 385,
      "month": "4/1/2017"
   }
},
 {
   "empId": 1342,
   "empName": "Nigesh Venu",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 13000,
      "epf": 0,
      "wf": 0,
      "cl": 0,
      "insurance": 0,
      "gratuity": 250,
      "month": "3/1/2016"
   }
},
 {
   "empId": 1342,
   "empName": "Nigesh Venu",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 15100,
      "epf": 725,
      "wf": 20,
      "cl": 755,
      "insurance": 0,
      "gratuity": 290,
      "month": "6/1/2016"
   }
},
 {
   "empId": 1342,
   "empName": "Nigesh Venu",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 17500,
      "epf": 840,
      "wf": 20,
      "cl": 875,
      "insurance": 0,
      "gratuity": 337,
      "month": "12/1/2016"
   }
},
 {
   "empId": 1342,
   "empName": "Nigesh Venu",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 17500,
      "epf": 840,
      "wf": 20,
      "cl": 875,
      "insurance": 831.25,
      "gratuity": 337,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1342,
   "empName": "Nigesh Venu",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 17500,
      "epf": 935,
      "wf": 20,
      "cl": 875,
      "insurance": 791,
      "gratuity": 337,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1342,
   "empName": "Nigesh Venu",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 20100,
      "epf": 1074,
      "wf": 20,
      "cl": 1005,
      "insurance": 909,
      "gratuity": 387,
      "month": "9/1/2017"
   }
},
 {
   "empId": 1343,
   "empName": "Vinil Chandran",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 23000,
      "epf": 0,
      "wf": 0,
      "cl": 0,
      "insurance": 0,
      "gratuity": 442,
      "month": "4/1/2016"
   }
},
 {
   "empId": 1343,
   "empName": "Vinil Chandran",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 23000,
      "epf": 0,
      "wf": 0,
      "cl": 0,
      "insurance": 550,
      "gratuity": 442,
      "month": "6/1/2016"
   }
},
 {
   "empId": 1343,
   "empName": "Vinil Chandran",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 23000,
      "epf": 1104,
      "wf": 20,
      "cl": 1150,
      "insurance": 550,
      "gratuity": 442,
      "month": "8/1/2016"
   }
},
 {
   "empId": 1343,
   "empName": "Vinil Chandran",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 27000,
      "epf": 1231,
      "wf": 20,
      "cl": 1350,
      "insurance": 550,
      "gratuity": 493,
      "month": "10/1/2016"
   }
},
 {
   "empId": 1343,
   "empName": "Vinil Chandran",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 27000,
      "epf": 1371,
      "wf": 20,
      "cl": 1350,
      "insurance": 550,
      "gratuity": 493,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1343,
   "empName": "Vinil Chandran",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 30700,
      "epf": 1477,
      "wf": 20,
      "cl": 1535,
      "insurance": 550,
      "gratuity": 531,
      "month": "7/1/2017"
   }
},
 {
   "empId": 1344,
   "empName": "Gibin Thomas",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 20000,
      "epf": 0,
      "wf": 0,
      "cl": 0,
      "insurance": 0,
      "gratuity": 385,
      "month": "4/1/2016"
   }
},
 {
   "empId": 1344,
   "empName": "Gibin Thomas",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 20000,
      "epf": 0,
      "wf": 0,
      "cl": 0,
      "insurance": 550,
      "gratuity": 385,
      "month": "6/1/2016"
   }
},
 {
   "empId": 1344,
   "empName": "Gibin Thomas",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 24000,
      "epf": 1152,
      "wf": 20,
      "cl": 1200,
      "insurance": 550,
      "gratuity": 462,
      "month": "8/1/2016"
   }
},
 {
   "empId": 1344,
   "empName": "Gibin Thomas",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 28000,
      "epf": 1422,
      "wf": 20,
      "cl": 1400,
      "insurance": 450,
      "gratuity": 512,
      "month": "2/1/2017"
   }
},
 {
   "empId": 1347,
   "empName": "Mahesh Mohan",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 10000,
      "epf": 0,
      "wf": 0,
      "cl": 0,
      "insurance": 0,
      "gratuity": 192,
      "month": "5/1/2016"
   }
},
 {
   "empId": 1347,
   "empName": "Mahesh Mohan",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 12500,
      "epf": 600,
      "wf": 20,
      "cl": 625,
      "insurance": 594,
      "gratuity": 240,
      "month": "9/1/2016"
   }
},
 {
   "empId": 1347,
   "empName": "Mahesh Mohan",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 16500,
      "epf": 882,
      "wf": 20,
      "cl": 825,
      "insurance": 746,
      "gratuity": 317,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1347,
   "empName": "Mahesh Mohan",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 18300,
      "epf": 978,
      "wf": 20,
      "cl": 915,
      "insurance": 828,
      "gratuity": 352,
      "month": "9/1/2017"
   }
},
 {
   "empId": 1348,
   "empName": "Shawn Thomas",
   "roleGroup": {
      "designation": "PC"
   },
   "ctcDetails": {
      "salary": 12500,
      "epf": 0,
      "wf": 0,
      "cl": 0,
      "insurance": 0,
      "gratuity": 240,
      "month": "6/1/2016"
   }
},
 {
   "empId": 1348,
   "empName": "Shawn Thomas",
   "roleGroup": {
      "designation": "PC"
   },
   "ctcDetails": {
      "salary": 15100,
      "epf": 725,
      "wf": 20,
      "cl": 755,
      "insurance": 0,
      "gratuity": 290,
      "month": "10/1/2016"
   }
},
 {
   "empId": 1348,
   "empName": "Shawn Thomas",
   "roleGroup": {
      "designation": "PC"
   },
   "ctcDetails": {
      "salary": 15100,
      "epf": 725,
      "wf": 20,
      "cl": 755,
      "insurance": 717.25,
      "gratuity": 290,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1348,
   "empName": "Shawn Thomas",
   "roleGroup": {
      "designation": "PC"
   },
   "ctcDetails": {
      "salary": 15100,
      "epf": 807,
      "wf": 20,
      "cl": 755,
      "insurance": 683,
      "gratuity": 290,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1348,
   "empName": "Shawn Thomas",
   "roleGroup": {
      "designation": "PC"
   },
   "ctcDetails": {
      "salary": 19100,
      "epf": 1021,
      "wf": 20,
      "cl": 955,
      "insurance": 864,
      "gratuity": 367,
      "month": "7/1/2017"
   }
},
 {
   "empId": 1349,
   "empName": "Ragima Ramesh",
   "roleGroup": {
      "designation": "XEMP"
   },
   "ctcDetails": {
      "salary": 12500,
      "epf": 0,
      "wf": 0,
      "cl": 0,
      "insurance": 0,
      "gratuity": 240,
      "month": "6/1/2016"
   }
},
 {
   "empId": 1349,
   "empName": "Ragima Ramesh",
   "roleGroup": {
      "designation": "XEMP"
   },
   "ctcDetails": {
      "salary": 15100,
      "epf": 725,
      "wf": 20,
      "cl": 755,
      "insurance": 0,
      "gratuity": 290,
      "month": "10/1/2016"
   }
},
 {
   "empId": 1349,
   "empName": "Ragima Ramesh",
   "roleGroup": {
      "designation": "XEMP"
   },
   "ctcDetails": {
      "salary": 15100,
      "epf": 725,
      "wf": 20,
      "cl": 755,
      "insurance": 717.25,
      "gratuity": 290,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1349,
   "empName": "Ragima Ramesh",
   "roleGroup": {
      "designation": "XEMP"
   },
   "ctcDetails": {
      "salary": 15100,
      "epf": 807,
      "wf": 20,
      "cl": 755,
      "insurance": 683,
      "gratuity": 290,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1361,
   "empName": "Siby Mathew",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 18000,
      "epf": 0,
      "wf": 0,
      "cl": 0,
      "insurance": 0,
      "gratuity": 346,
      "month": "8/1/2016"
   }
},
 {
   "empId": 1361,
   "empName": "Siby Mathew",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 18000,
      "epf": 0,
      "wf": 0,
      "cl": 0,
      "insurance": 0,
      "gratuity": 0,
      "month": "10/1/2016"
   }
},
 {
   "empId": 1361,
   "empName": "Siby Mathew",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 22500,
      "epf": 0,
      "wf": 0,
      "cl": 0,
      "insurance": 0,
      "gratuity": 0,
      "month": "11/1/2016"
   }
},
 {
   "empId": 1361,
   "empName": "Siby Mathew",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 22500,
      "epf": 1080,
      "wf": 20,
      "cl": 1125,
      "insurance": 0,
      "gratuity": 433,
      "month": "12/1/2016"
   }
},
 {
   "empId": 1361,
   "empName": "Siby Mathew",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 22500,
      "epf": 1202,
      "wf": 20,
      "cl": 1125,
      "insurance": 0,
      "gratuity": 433,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1361,
   "empName": "Siby Mathew",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 26800,
      "epf": 1416,
      "wf": 20,
      "cl": 1325,
      "insurance": 0,
      "gratuity": 510,
      "month": "5/1/2017"
   }
},
 {
   "empId": 1371,
   "empName": "Remya P R",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 12500,
      "epf": 0,
      "wf": 0,
      "cl": 0,
      "insurance": 0,
      "gratuity": 0,
      "month": "10/1/2016"
   }
},
 {
   "empId": 1371,
   "empName": "Remya P R",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 15000,
      "epf": 720,
      "wf": 20,
      "cl": 750,
      "insurance": 713,
      "gratuity": 288,
      "month": "2/1/2017"
   }
},
 {
   "empId": 1371,
   "empName": "Remya P R",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 15000,
      "epf": 802,
      "wf": 20,
      "cl": 750,
      "insurance": 678,
      "gratuity": 288,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1371,
   "empName": "Remya P R",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 17000,
      "epf": 908,
      "wf": 20,
      "cl": 850,
      "insurance": 769,
      "gratuity": 327,
      "month": "8/1/2017"
   }
},
 {
   "empId": 1373,
   "empName": "Sruthija B",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 13500,
      "epf": 0,
      "wf": 0,
      "cl": 0,
      "insurance": 0,
      "gratuity": 0,
      "month": "11/1/2016"
   }
},
 {
   "empId": 1373,
   "empName": "Sruthija B",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 16000,
      "epf": 855,
      "wf": 20,
      "cl": 800,
      "insurance": 724,
      "gratuity": 308,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1373,
   "empName": "Sruthija B",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 17800,
      "epf": 951,
      "wf": 20,
      "cl": 890,
      "insurance": 805,
      "gratuity": 342,
      "month": "9/1/2017"
   }
},
 {
   "empId": 1375,
   "empName": "Bibin Joseph",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 13000,
      "epf": 0,
      "wf": 0,
      "cl": 0,
      "insurance": 0,
      "gratuity": 250,
      "month": "3/1/2016"
   }
},
 {
   "empId": 1375,
   "empName": "Bibin Joseph",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 15100,
      "epf": 725,
      "wf": 20,
      "cl": 755,
      "insurance": 0,
      "gratuity": 290,
      "month": "6/1/2016"
   }
},
 {
   "empId": 1375,
   "empName": "Bibin Joseph",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 17500,
      "epf": 840,
      "wf": 20,
      "cl": 875,
      "insurance": 0,
      "gratuity": 337,
      "month": "12/1/2016"
   }
},
 {
   "empId": 1375,
   "empName": "Bibin Joseph",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 17500,
      "epf": 840,
      "wf": 20,
      "cl": 875,
      "insurance": 831.25,
      "gratuity": 337,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1375,
   "empName": "Bibin Joseph",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 17500,
      "epf": 935,
      "wf": 20,
      "cl": 875,
      "insurance": 791,
      "gratuity": 337,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1375,
   "empName": "Bibin Joseph",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 20500,
      "epf": 1096,
      "wf": 20,
      "cl": 1025,
      "insurance": 927,
      "gratuity": 394,
      "month": "7/1/2017"
   }
},
 {
   "empId": 1377,
   "empName": "Rijin K",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 21000,
      "epf": 0,
      "wf": 0,
      "cl": 0,
      "insurance": 0,
      "gratuity": 404,
      "month": "5/1/2016"
   }
},
 {
   "empId": 1377,
   "empName": "Rijin K",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 21000,
      "epf": 1008,
      "wf": 20,
      "cl": 1050,
      "insurance": 0,
      "gratuity": 404,
      "month": "8/1/2016"
   }
},
 {
   "empId": 1377,
   "empName": "Rijin K",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 26500,
      "epf": 1272,
      "wf": 20,
      "cl": 1325,
      "insurance": 0,
      "gratuity": 510,
      "month": "11/1/2016"
   }
},
 {
   "empId": 1377,
   "empName": "Rijin K",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 26500,
      "epf": 1416,
      "wf": 20,
      "cl": 1325,
      "insurance": 0,
      "gratuity": 510,
      "month": "3/1/2017"
   }
},
 {
   "empId": 1377,
   "empName": "Rijin K",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 30500,
      "epf": 1467,
      "wf": 20,
      "cl": 1525,
      "insurance": 0,
      "gratuity": 528,
      "month": "5/1/2017"
   }
},
 {
   "empId": 1385,
   "empName": "Jayaraj R",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 33000,
      "epf": 0,
      "wf": 0,
      "cl": 0,
      "insurance": 0,
      "gratuity": 0,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1385,
   "empName": "Jayaraj R",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 33000,
      "epf": 1587,
      "wf": 20,
      "cl": 1650,
      "insurance": 450,
      "gratuity": 571,
      "month": "5/1/2017"
   }
},
 {
   "empId": 1386,
   "empName": "Deepa M",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 20000,
      "epf": 0,
      "wf": 0,
      "cl": 0,
      "insurance": 0,
      "gratuity": 0,
      "month": "1/1/2017"
   }
},
 {
   "empId": 1386,
   "empName": "Deepa M",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 22000,
      "epf": 1176,
      "wf": 20,
      "cl": 1100,
      "insurance": 0,
      "gratuity": 423,
      "month": "5/1/2017"
   }
},
 {
   "empId": 1399,
   "empName": "Vinay Paul",
   "roleGroup": {
      "designation": "SL"
   },
   "ctcDetails": {
      "salary": 100000,
      "epf": 0,
      "wf": 0,
      "cl": 0,
      "insurance": 0,
      "gratuity": 0,
      "month": "6/1/2017"
   }
},
 {
   "empId": 1407,
   "empName": "Manu Varghese",
   "roleGroup": {
      "designation": "DEV"
   },
   "ctcDetails": {
      "salary": 22000,
      "epf": 0,
      "wf": 0,
      "cl": 0,
      "insurance": 0,
      "gratuity": 0,
      "month": "7/1/2017"
   }
},
 {
   "empId": 1408,
   "empName": "J Sangeeth",
   "roleGroup": {
      "designation": "SL"
   },
   "ctcDetails": {
      "salary": 25000,
      "epf": 0,
      "wf": 0,
      "cl": 0,
      "insurance": 0,
      "gratuity": 0,
      "month": "7/1/2017"
   }
},
 {
   "empId": 1409,
   "empName": "Surya Prabha B",
   "roleGroup": {
      "designation": "PC"
   },
   "ctcDetails": {
      "salary": 14000,
      "epf": 0,
      "wf": 0,
      "cl": 0,
      "insurance": 0,
      "gratuity": 0,
      "month": "7/1/2017"
   }
},
 {
   "empId": 1410,
   "empName": "Vyshnav Ambadan",
   "roleGroup": {
      "designation": "PC"
   },
   "ctcDetails": {
      "salary": 14000,
      "epf": 0,
      "wf": 0,
      "cl": 0,
      "insurance": 0,
      "gratuity": 0,
      "month": "7/1/2017"
   }
}
]

router.get('/', (req, res, next) => {
  res.send('test');
});

router.get('/import', (req, res, next) => {
 var saveinfo = [];
 schema.emp.collection.insertMany(data,(err,res)=>{
   if(err){
      var message = err;
   }  else {
     var message = res;
   }
 });
 res.status(404).send('praveen')
 res.send(message);
});

router.post('/import/update', (req, res, next)=>{
  console.log("test");
  
  data.forEach(data1=>{
    console.log("Before Update Statement", data1);
    schema.emp.update( { "empId" : data1.empId, "ctcDetails.month": data1.ctcDetails.month }, { $set: { "empId": data1.empId, "empName": data1.empName, "roleGroup": data1.roleGroup, "ctcDetails": data1.ctcDetails}}, {"upsert":true},  (err, saveddata)=>{
      console.log("After Update Statement", data1);
      if (err) {
          console.log(err);
          res.status(500).send(err);
      }
        console.log(saveddata);
       res.status(200).send(saveddata);
    });  
   
  })

});
router.get('/import/updateone', (req, res, next)=>{
  console.log('test');
  var bulk = schema.emp.collection.initializeUnorderedBulkOp();
  data.forEach(data=>{
    bulk.find( { empId : data.empId } ).update( { $set: { ctcDetails : data.ctcDetails } } );  
    console.log(data.empId);
  })
  
  var message = bulk.execute();
  res.status(200).send(message);
});

router.get('/list', (req,res,next) => {
  
  schema.emp.find((err,docs) => {
    res.json(docs)
  })
});
router.get('/list/:id', (req,res,next) => {
  console.log(req.params.id);
schema.emp.findById(req.params.id,(err,docs) => {
    res.json(docs)
  })
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