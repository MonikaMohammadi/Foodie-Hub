const db = require('../db')

exports.getAllRestaurants = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM restaurants');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addRestaurant = async (req, res) => {
  const { name, address } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO restaurants (name, address) VALUES ($1, $2) RETURNING *',
      [name, address]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateRestaurant = async (req, res) => {
  const { id } = req.params;
  const { name, address } = req.body;
  try {
    const result = await db.query(
      'UPDATE restaurants SET name = $1, address = $2 WHERE id = $3 RETURNING *',
      [name, address, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM restaurants WHERE id = $1', [id]);
    res.json({ message: 'Restaurant deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};