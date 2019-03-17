const express = require('express');
const exphbs = require('express-handlebars');
const path = require("path");


const app = express();

//Handlebars stuff
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));


app.get('/', (req, res) => {
    res.render('home');
});

app.get("/test", (req, res) => {
  res.render("test");
});


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));