const express = require("express");
const mongoose = require("mongoose");

// Connect to MongoDB database
mongoose
  .connect("mongodb://localhost:27017/todo-app_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// Init Express app
const app = express();

// Parse JSON content
app.use(express.json());

// Set headers for response
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// Use route for requests
app.use("/api/todos", require("./routes/api/todos"));

// Run app at localhost:5000
const port = 5000;

// Listen for connections
app.listen(port, () => console.log(`Server started on port ${port}`));
