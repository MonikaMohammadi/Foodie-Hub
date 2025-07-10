const express = require('express');
const router = express.Router();
const controller = require('../controllers/restaurantController');

router.get('/', controller.getAllRestaurants);
router.post('/', controller.addRestaurant);
router.put('/:id', controller.updateRestaurant);
router.delete('/:id', controller.deleteRestaurant);

module.exports = router;