var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    flash           = require("connect-flash"),
    methodOverride  = require("method-override");
    
var url = "mongodb://localhost:27017/mtg_seller";
mongoose.connect(url, { useNewUrlParser: true });
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(flash());

app.get("/", function(req, res){
    res.render("index");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Server Started!");
});
