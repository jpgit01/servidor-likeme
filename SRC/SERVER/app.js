import express from "express";
import cors from "cors";

import { findAll, create} from "./models/posts.models.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());

app.get("/posts", async (req, res) => {
  try {
    const result = await findAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ status: false, message: "ha ocurrido error" });
  }
});


app.post("/posts", async (req, res) => {
  const { titulo, url, descripcion } = req.body;

  const result = await create(titulo, url, descripcion);
  res.status(201).json({ status: true, message: result });
});


app.all("*", (req, res) =>
  res.status(404).json({ status: false, message: "Page not found" })
);

app.listen(PORT, () => console.log("server UP"));

export default app;
