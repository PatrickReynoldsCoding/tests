const express = require("express");
const path = require("path");
const { json, urlencoded } = express;
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();

// db
mongoose
  .connect(process.env.MONGO_URI, {
    // connects to your .env file and loads the MONGO_URI value
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERROR", err));

// middleware
app.use(morgan("dev")); //logs requests. helps with debugging
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true })); //communicating between front and back end

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// Put all API endpoints under '/api'
app.use("/api/animals/", require("./routes/animals"));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
