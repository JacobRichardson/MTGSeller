var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    flash           = require("connect-flash"),
    methodOverride  = require("method-override"),
    Card            = require("./models/cards.js");
    
var url = "mongodb://localhost:27017/mtg_seller";
mongoose.connect(url, { useNewUrlParser: true });
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));
app.use(flash());

// Card.create({
//     name: "Path to Exile",
//     price: 9.00,
//     image: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=179235&type=card"
// })

app.get("/", function(req, res){
    res.render("index");
});

//INDEX - shows all cards
app.get("/cards", function(req, res){
    Card.find({}, function(err, cards){
        if(err){
            console.log(err);
        }
        res.render("cards/index", {cards:cards});
    })
});

//CREATE - create a new card
app.post("/cards", function(req, res){
    res.send("POST CARDS ROUTE");
});

//NEW - shows form to create a new card
app.get("/cards/new", function(req, res){
    res.render("cards/new");
});
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Server Started!");
});
