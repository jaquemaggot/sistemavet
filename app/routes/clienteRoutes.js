const router = require('express').Router();
const controller = require('../controllers/clienteController');

router.get('/',controller.listar);
router.post('/',controller.inserir);
router.delete('/:id',controller.deletar);
router.post('/:id',controller.atualizar);
module.exports = router;