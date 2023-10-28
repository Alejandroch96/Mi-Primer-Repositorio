const express = require('express');
const router = express.Router();

let array_CategoriaSupermercado = [
  {
    "IdArticulo": 1,
    "Nombre": "Higiene"
  },
  {
    "IdArticulo": 2,
    "Nombre": "Limpieza"
  },
  {
    "IdArticulo": 3,
    "Nombre": "Lácteos"
  },
  {
    "IdArticulo": 4,
    "Nombre": "Almacen"
  },
  {
    "IdArticulo": 5,
    "Nombre": "Bebidas"
  },
  {
    "IdArticulo": 6,
    "Nombre": "Mascotas"
  }
];

router.get('/api/CategoriaSupermercado', async function (req, res) {
res.json(array_CategoriaSupermercado);
});

router.get('/api/CategoriaSupermercado/:id', async function (req, res) {
  let CategoriaSupermercado = array_CategoriaSupermercado.find(
    (x) => x.IdArticulo == req.params.id
  );
  if (articulo) res.json(articulo);
  else res.status(404).json({ message: 'articulo no encontrado' });
});

module.exports = router;
