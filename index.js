const express = require("express");
const cors = require("cors");

const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors({ origin: "*" }));

router.get("/", (req, res) => {
  res.send(`Query Params: ${JSON.stringify(req.query)}`);
});
router.post("/", (req, res) => {
  res.send(`My Body: ${JSON.stringify(req.body)}`);
});
router.put("/", (req, res) => {
  res.send(`My Body: ${JSON.stringify(req.body)}`);
});
router.delete("/", (req, res) => {
  res.send(`My Body: ${JSON.stringify(req.body)}`);
});

app.use(router);
app.listen(80, () => {
  console.log("App Started");
});
