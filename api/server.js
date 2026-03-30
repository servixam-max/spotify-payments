const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://admin:spotify2024@localhost:5432/spotify_payments'
});

// Test conexión
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error conectando a DB:', err);
  } else {
    console.log('✅ Conectado a PostgreSQL:', res.rows[0].now);
  }
});

// GET /payments - Obtener todos los pagos
app.get('/api/payments', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM payments ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching payments:', err);
    res.status(500).json({ error: err.message });
  }
});

// POST /payments - Registrar nuevo pago
app.post('/api/payments', async (req, res) => {
  const { member, payment_date, months, notes, method } = req.body;
  
  try {
    const result = await pool.query(
      'INSERT INTO payments (member, payment_date, months, notes, method) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [member, payment_date, months, notes || null, method || null]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error saving payment:', err);
    res.status(500).json({ error: err.message });
  }
});

// DELETE /payments/:id - Borrar pago
app.delete('/api/payments/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    await pool.query('DELETE FROM payments WHERE id = $1', [id]);
    res.json({ success: true });
  } catch (err) {
    console.error('Error deleting payment:', err);
    res.status(500).json({ error: err.message });
  }
});

// DELETE /payments/member/:member - Borrar todos los pagos de un miembro
app.delete('/api/payments/member/:member', async (req, res) => {
  const { member } = req.params;
  
  try {
    await pool.query('DELETE FROM payments WHERE member = $1', [member]);
    res.json({ success: true });
  } catch (err) {
    console.error('Error deleting member payments:', err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 API corriendo en http://0.0.0.0:${PORT}`);
});
