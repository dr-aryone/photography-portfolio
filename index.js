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

app.get('/explore', (req, res) => {
  res.render('explore');
})

app.get('/edinburgh-text', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'edinburgh-text.html'));
})

app.get("/france-text", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "france-text.html"));
});

app.get("/vietnam-text", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "vietnam-text.html"));
});

app.get("/scotland-text", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "scotland-text.html"));
});

app.get("/edinburgh", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "edinburgh.html"));
});

app.get("/france", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "france.html"));
});

app.get("/vietnam", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "vietnam.html"));
});

app.get("/scotland", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "scotland.html"));
});

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));