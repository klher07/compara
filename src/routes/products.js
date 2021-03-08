const router = require('express').Router();

const productsController = require('../controllers/productsController');

router.get('/', productsController.list);
router.post('/add', productsController.save);
router.get('/update/:id', productsController.edit);
router.post('/update/:id', productsController.update);
router.get('/delete/:id', productsController.delete);
router.get('/resultados', productsController.resultados);

module.exports = router;

