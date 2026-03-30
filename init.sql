-- Crear tabla payments
CREATE TABLE IF NOT EXISTS payments (
  id SERIAL PRIMARY KEY,
  member TEXT NOT NULL,
  payment_date DATE NOT NULL,
  months INTEGER NOT NULL DEFAULT 1,
  notes TEXT,
  method TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index para búsquedas rápidas
CREATE INDEX IF NOT EXISTS idx_payments_member ON payments(member);
CREATE INDEX IF NOT EXISTS idx_payments_date ON payments(payment_date);
