const express = require('express');
const router = express.Router();
const controller = require('../controllers/menuController');

router.get('/:restaurantId', controller.getMenuByRestaurant);
router.post('/:restaurantId', controller.addMenuItem);
router.put('/:id', controller.updateMenuItem);
router.delete('/:id', controller.deleteMenuItem);

module.exports = router;
