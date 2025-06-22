const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());
app.use(express.static("public"));


const homeRoutes = require("./routes/homeRoutes");
const shopRoutes = require("./routes/shopRoutes");


app.use("/api/home", homeRoutes);
app.use("/api/buahan_shop", shopRoutes);


app.use((req, res) => {
  console.log(`404 Not Found: ${req.method} ${req.url}`);
  res.status(404).send("404 Not Found");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
