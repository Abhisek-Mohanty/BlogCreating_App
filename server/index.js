let mongoose = require("mongoose");
let express = require("express");
let blogModel = require("./blogdb");
let app = express();
let cors = require("cors");
app.use(cors());
app.use(express.json({ limit: "50mb" }));

mongoose.connect(`mongodb://127.0.0.1/Blogs`);

mongoose.connection
  .once("open", () => {
    console.log("connected");
  })
  .on("error", () => {
    console.log("error");
  });

app.post("/publish", (req, res) => {
  blogModel
    .create(req.body)
    .then((x) => {
      console.log("success");
    })
    .catch(() => {
      console.log("error");
    });
});
app.get("/blog", (req, res) => {
  blogModel
    .find()
    .then((x) => {
      res.json(x);
    })
    .catch(() => {
      console.log("error");
    });
});
app.get("/:abc", (req, res) => {
  blogModel
    .findOne({ _id: req.params.abc })
    .then((x) => {
      res.json(x);
    })
    .catch(() => {
      console.log("error");
    });
});
app.listen(5000, () => {
  console.log("server is connected");
});
