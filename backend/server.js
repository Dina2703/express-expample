const express = require("express");
// const testRoutes = require("./routes/requestRoutes.js");
const path = require("path");
const { engine } = require("express-handlebars");
const colorRouter = require("./routes/api/colors");
const colors = require("../data");

const logger = require("./middleware/logger");

const app = express();

const PORT = process.env.PORT || 8000;

//Handlebars Middleware
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

//Homepage Router for 'express-handlebars' template
app.get("/", (req, res) => {
  res.render("home", {
    title: "Color App",
    colors,
  });
});

//Body Parser Middleware
// express.json() is a body parser for post request except html post form and express.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// //init middleware
// app.use(logger);

//set static folder. it sets 'public' as a static folder
app.use(express.static(path.join(__dirname, "..", "frontend", "public")));

// app.get("/hello", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "frontend", "public", "welcome.jpg"));
// });

// app.use("/api/test", testRoutes);
//Members API Routes
app.use("/api/colors", colorRouter);

//listen specific port
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
