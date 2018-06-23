var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var PORT = 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

  var Friends = require("./app/data/friends.js");
  $("#makeNewProfile").click(function(){
    var newProfile = {
        Name: $("#reserve-name").val().trim(),
        Photo: $("#reserve-Photo").val().trim(),
        scores: 
            [
                parseInt($('input[name=question1]:checked').val()),
                parseInt($('input[name=question2]:checked').val()),
                parseInt($('input[name=question3]:checked').val()),
                parseInt($('input[name=question4]:checked').val()),
                parseInt($('input[name=question5]:checked').val()),
                parseInt($('input[name=question6]:checked').val()),
                parseInt($('input[name=question7]:checked').val()),
                parseInt($('input[name=question8]:checked').val()),
                parseInt($('input[name=question9]:checked').val()),
                parseInt($('input[name=question10]:checked').val())
            ]
      };
      console.log(newProfile);
      var p = 0;
      var difference = 100;
      var l = 0;
      for(var i = 0; i<Friends.length;i++){
          for(var j = 0; j<Friends[i].scores.length){
            l += Math.abs(Friends[i].scores[j] - newProfile.scores[j]);
          }
          if(l < difference){
              p = i;
          }
     }
     $('#name').text(Friends[p].Name);
     $('#img01').prepend('<img id="theImg" src="'+Friends[p].Photo +'" />');
     $('#caption').text("Here is your new best Friend!")
     
     $("#myModal").modal()

    });
