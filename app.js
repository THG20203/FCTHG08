const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

// Use the router
app.use("/", router);

//  Line below exporting the app object that you've created using Express
export default app;
