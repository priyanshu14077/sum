const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Parses query params a and b as numbers. Returns null if either is missing or not numeric.
function parseOperands(query) {
  if (!query.a || !query.b) return null;
  const a = Number(query.a);
  const b = Number(query.b);
  if (!Number.isFinite(a) || !Number.isFinite(b)) return null;
  return { a, b };
}

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.get("/sum", (req, res) => {
  const operands = parseOperands(req.query);
  if (!operands) {
    return res.status(400).json({ error: "Query params a and b must be numbers" });
  }
  res.json({ result: operands.a + operands.b });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
