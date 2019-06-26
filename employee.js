var app = express();
var employeeController=function (req, res) {
var employee=[
            {fName:'Raj',lastName:'deshmukh',age:33},
            {fName:'amar',lastName:'shinde',age:23},
            {fName:'Rohan',lastName:'deshmukh',age:38},
            {fName:'bhagesh',lastName:'patil',age:25},
            {fName:'Manoj',lastName:'desai',age:23}
      ];
  res.send(employee);
};


app.get('/employee',employeeController );

  var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8088", host, port)
})
