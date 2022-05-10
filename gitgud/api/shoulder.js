let express = require('express');
let router = express.Router();
let jsonfile = require("jsonfile");
const jsonPath = './data/shoulder.json';

var getDataFromJson = () => {
   return jsonfile.readFileSync(jsonPath);
}

//Routes will go here
router.get('/', function(req, res){
   const jsonData = getDataFromJson();
   res.status(200).send(jsonData);
});

router.post('/', (req, res) => {
   res.setHeader("Access-Control-Allow-Origin", "*")
   res.setHeader("Access-Control-Allow-Credentials", "true");
   res.setHeader("Access-Control-Max-Age", "1800");
   res.setHeader("Access-Control-Allow-Headers", "content-type");
   res.setHeader( "Access-Control-Allow-Methods", "POST, GET" ); 

  

   const curShoulder = req.body.shoulder;
   
   const newJson = {
      shoulder: curShoulder
   };

   jsonfile.writeFile(jsonPath, newJson);
   res.json(newJson);

});

module.exports = router;