const db = require('../db');

exports.getMenuByRestaurant = async (req, res) => {
  const { restaurantId } = req.params;
  try {
    const result = await db.query('SELECT * FROM menu_items WHERE restaurant_id = $1', [restaurantId]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addMenuItem = async (req, res) => {
  const { restaurantId } = req.params;
  const { name, price, is_available } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO menu_items (restaurant_id, name, price, is_available) VALUES ($1, $2, $3, $4) RETURNING *',
      [restaurantId, name, price, is_available]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMenuItem = async (req, res) => {
  const { id } = req.params;
  const { name, price, is_available } = req.body;
  try {
    const result = await db.query(
      'UPDATE menu_items SET name = $1, price = $2, is_available = $3 WHERE id = $4 RETURNING *',
      [name, price, is_available, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMenuItem = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM menu_items WHERE id = $1', [id]);
    res.json({ message: 'Menu item deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};