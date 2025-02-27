const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  console.log("Alguien ha accedido al servidor");
  res.send("Bienvenido al servidor ");
});

router.get("/rutaGet", (req, res) => {
  console.log("Alguien ha accedido a la ruta get");
  res.send("hola haciendo pruebas con la ruta get");
});

router.get("/rutaGetJSON", (req, res) => {
  console.log("Alguien ha accedido a la ruta get con un JSON");
  res.json({
    saludo: "hola desde un JSON",
  });
});

router.post("/rutaPOST", (req, res) => {
  console.log("Alguien ha accedido a la ruta POST");
  res.send("hola haciendo pruebas con la ruta POST");
});

// router.post("/rutaPOSTconBody", (req, res) => {
//   res.json({
//     saludo: "hola desde un JSON",
//   });
// });

router.post("/rutaPOSTconBody", (req, res) => {
  console.log(req.body);
  res.send("informacion recibida");
});

module.exports = router;
