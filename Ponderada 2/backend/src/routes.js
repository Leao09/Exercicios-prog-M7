const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const auth = require("./auth.js");
const jwt = require("jsonwebtoken");

const routes = express.Router();

routes.post("/produtos", auth, async (req, res) => {
  const { Name, Price } = req.body;
  try {
    const produto = await prisma.produtos.create({
      data: {
        Name: Name,
        Price: Price,
      },
    });

    return res.status(200).json(produto);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Erro ao criar o produto.");
  }
});

routes.get("/produtos", async (req, res) => {
  const produtos = await prisma.produtos.findMany();
  return res.status(200).json(produtos);
});

routes.put("/produtos", async (req, res) => {
  const { Id, Name, Price } = req.body;

  if (!Id) {
    return res.status(400).json("Id é obrigatório");
  }

  const produtoExiste = await prisma.produtos.findUnique({ where: { Id } });

  if (!produtoExiste) {
    return res.status(404).json("O produto não existe");
  }

  const produto = await prisma.produtos.update({
    where: {
      Id,
    },
    data: { Name: Name, Price: Price },
  });
  return res.status(200).json(produto);
});

routes.delete("/produtos/:Id", auth, async (req, res) => {
  const { Id } = req.params;
  const intId = parseInt(Id);
  if (!intId) {
    return res.status(400).json("Id é obrigatório");
  }

  const produtoExiste = await prisma.produtos.findUnique({
    where: { Id: intId },
  });

  if (!produtoExiste) {
    return res.status(404).json("O produto não existe");
  }

  await prisma.produtos.delete({ where: { Id: intId } });

  return res.status(200).send();
});

routes.post("/user", async (req, res) => {
  const { Email, password } = req.body;
  const user = await prisma.user.create({
    data: {
      Email: Email,
      password: password,
    },
  });

  const token = jwt.sign({ user_id: user.Id, Email }, "stringsupersecreta", {
    expiresIn: "2h",
  });

  return res.json(token);
});

module.exports = routes;
