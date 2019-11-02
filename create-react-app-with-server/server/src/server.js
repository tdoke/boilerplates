const express = require("express");
const app = express();

const employees = require("./routes/employees");

app.use("/api", employees);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
}

app.listen(3001, () => console.log("application started at 3001 port"));
