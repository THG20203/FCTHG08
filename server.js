import app from "./app.js";

// This is our starting file where everything starts -  listen to our server
const port = 3000;

// specify port and callback for when server is ready to go
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
