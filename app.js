const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')


const restaurantRoutes = require('./routes/restaurantRoutes');
const menuRoutes = require('./routes/menuRoutes');
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use(bodyParser.json());

app.use('/restaurants', restaurantRoutes);
app.use('/menu', menuRoutes);
app.use('/customers', customerRoutes);
app.use('/orders', orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
