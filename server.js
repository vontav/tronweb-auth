// server.js
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from tronweb-auth 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
