import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

// get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the .well-known directory publicly
app.use(
  "/.well-known",
  express.static(path.join(__dirname, "public/.well-known"))
);

// Health check route
app.get("/", (req, res) => {
  res.send("FestGo Backend Running 🚀");
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
