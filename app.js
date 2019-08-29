let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let db=[];
// let ejs=require('ejs');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static("public/images"));
app.use(express.static("public/styles"));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.get("/", (req, res) => {
    res.render("index.html");
})

app.get("/addtask.html", (req, res) => {
    res.render("addtask.html");
})

app.get("/alltasks.html", (req, res) => {
    res.render("alltasks.html", { task: db});
})

app.post("/newTask", (req, res) => {
    console.log(req.body);
    // console.log(req.body.taskName);
    
    db.push(req.body);
    console.log(db);
    
    //res.render("addtask.html", { task: db});
    res.redirect('/alltasks.html')
});

app.listen(8080);




