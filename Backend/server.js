import express from "express";
import { connectDB } from "./config/mongo.js";
import productRoute from "./routes/product.routes.js";
import path from "path";

const app = express();

app.use(express.json()); // it is used to accept json data in body in req.body

app.use("/api/products", productRoute);

const port = process.env.PORT || 5000;

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(port, () => {
  connectDB();
  console.log("Server started on http://localhost:" + port);
});
