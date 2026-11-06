import express from "express";
import jwt from "jsonwebtoken";
import usuarios from "./usuarios.js";

const app = express();
const PORT = process.env.PORT;
const SECRET = process.env.SECRET;
app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const usuario = usuarios.find();
});
