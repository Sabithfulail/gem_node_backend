const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const db = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./src/routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/",router);

// Connect to the database
db.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database is Connected");

    // Start the server
    app.listen(process.env.PORT, () => {
      console.log(`Server started on port ${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log("Error in connecting to database");
  });
