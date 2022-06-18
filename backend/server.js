const express = require("express");
const testRoutes = require("./routes/requestRoutes.js");
const path = require("path");

const colors = require("../data");
const logger = require("./middleware/logger");

const app = express();

const PORT = process.env.PORT || 8000;

//middleware
// express.json() is a body parser for post request except html post form and express.
app.use(express.json());

// //init middleware
// app.use(logger);

//set static folder. it sets 'public' as a static folder
app.use(express.static(path.join(__dirname, "..", "frontend", "public")));

//route handler
// app.get("/hello", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "frontend", "public", "welcome.jpg"));
// });

app.get("/api/colors", (req, res) => {
  res.json(colors);
});

// app.use("/api/test", testRoutes);

//listen specific port
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
