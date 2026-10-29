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

app.get("/calculate", (req, res) => {
  const operands = parseOperands(req.query);
  if (!operands) {
    return res.status(400).json({ error: "Query params a and b must be numbers" });
  }
  const { a, b } = operands;
  const operations = {
    add: () => a + b,
    subtract: () => a - b,
    multiply: () => a * b,
    divide: () => a / b,
  };
  const operation = operations[req.query.op];
  if (!operation) {
    return res.status(400).json({
      error: `Query param op must be one of: ${Object.keys(operations).join(", ")}`,
    });
  }
  if (req.query.op === "divide" && b === 0) {
    return res.status(400).json({ error: "Cannot divide by zero" });
  }
  res.json({ result: operation() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
