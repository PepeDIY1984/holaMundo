const { Router } = require("express");
const router = Router();
const OpenAI = require("openai");
const dotenv = require("dotenv");

dotenv.config();

console.log(process.env.API_KEY);

//Rutas GET
router.get("/rutaGet", (req, res) => {
  console.log("hola en la consola de node,desde la 1ª ruta GET en el servidor");
  res.send("hola soy la 1ª ruta GET ");
});

router.post("/rutaPOST", (req, res) => {
  console.log("Enviada una peticion POST");
  console.log(req.body);
  // res.json({
  //   id: "001",
  //   nombre: req.body.nombre,
  //   apellido: req.body.apellido,
  // });
  //res.redirect("https://pepediy1984.github.io/web_Frontend/");
});

router.post("/rutaPOST_AI", (req, res) => {
  const openai = new OpenAI({
    apiKey: process.env.API_KEY,
  });

  const completion = openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: true,
    messages: [
      {
        role: "developer",
        content:
          "Eres un ordenador con mala leche y te pregunto: " +
          req.body.pregunta,
      },
    ],
  });

  completion.then((result) => {
    res.send(result.choices[0].message);
  });
});

module.exports = router;
