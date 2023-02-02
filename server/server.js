const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const route = require("./routes");
app.use("/", route);
app.listen(4444);
