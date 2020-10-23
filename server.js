const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// //handlebars

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// //controller code

const routes = require("./controllers/orderBurgers.js");

app.use(routes);

app.listen(PORT, () => {
    console.log("Server is listening on PORT: http://localhost:" + PORT);
})