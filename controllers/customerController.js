const db = require('../db');

exports.getAllCustomers = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM customers');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addCustomer = async (req, res) => {
  const { name, phone } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO customers (name, phone) VALUES ($1, $2) RETURNING *',
      [name, phone]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { name, phone } = req.body;
  try {
    const result = await db.query(
      'UPDATE customers SET name = $1, phone = $2 WHERE id = $3 RETURNING *',
      [name, phone, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM customers WHERE id = $1', [id]);
    res.json({ message: 'Customer deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};