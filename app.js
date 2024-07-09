const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    var today = new Date();
    // var date = today.getDay();
    // var days = ["Monday", "Tuesday", "Wednseday", "Thursday", "Friday", "Saturday", "Sunday"];
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var formatDate = today.toLocaleDateString("en-us", options);

    res.render("list", {date: formatDate, addItem: items});
});

app.post("/", function(req, res) {
    var newItem = req.body.item;
    items.push(newItem);
    // console.log(newItem);
    res.redirect("/");
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
})