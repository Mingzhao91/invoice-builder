import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    msg: "welcome to invoice builder backend",
  });
});

app.listen(PORT, function () {
  console.log(`Server is running at ${PORT}`);
});
