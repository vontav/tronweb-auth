import express from "express";

const app = express();
const PORT = process.env.PORT || 10000; // Render will set PORT automatically

// Middleware so server understands JSON
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

// Example auth routes
app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  // TODO: save to database (for now, just respond)
  res.json({ message: `User ${username} signed up!` });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  // TODO: check database (for now, just respond)
  res.json({ message: `User ${username} logged in!` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
