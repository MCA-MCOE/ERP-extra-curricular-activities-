require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const studenRoutes = require("./routes/student");
// Create our app
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/api/students", studenRoutes);

// Conection

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to DB & Listening on PORT : ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
