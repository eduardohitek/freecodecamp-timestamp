const express = require("express")
const app = express()
const moment = require("moment")


app.get('/', function (req, res) {
  res.send('<h3>Example usage:</h3>'+
            '<code>https://freecodecamp-api-projects-eduardohitek.c9users.io/December%2015,%202015</code><br>'+
            '<code>https://freecodecamp-api-projects-eduardohitek.c9users.io/1450137600</code>'+
            '<h3>Example output:</h3>'+
            '<code>'+
                '{'+
                  '"unix": 1450137600,'+
                  '"natural": "December 15, 2015"'+
                '}'+
            '</code>')
})

app.get('/:param', function (req, res) {
  const param = req.params.param
  var myDate;
  
  if(isNaN(param)){
    myDate = moment(param, "MMMM D, YYYY")
  }
  else{
    myDate = moment(param, "X")
  }

  if(myDate.isValid()){
    res.json({unix: myDate.format("X"), natural: myDate.format("MMMM D, YYYY")})
  }
    else{
      res.json({unix: null, natural: null})
    }
})


app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})