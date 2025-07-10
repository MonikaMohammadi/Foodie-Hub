const express = require('express');
const router = express.Router();
const controller = require('../controllers/orderController');

router.post('/', controller.placeOrder);
router.get('/', controller.getAllOrders);
router.get('/:customerId', controller.getOrdersByCustomer);
router.patch('/:id/status', controller.updateOrderStatus);
router.delete('/:id', controller.deleteOrder);

module.exports = router;