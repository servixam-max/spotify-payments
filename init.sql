-- Crear tabla payments
CREATE TABLE IF NOT EXISTS payments (
  id SERIAL PRIMARY KEY,
  member TEXT NOT NULL,
  payment_date DATE NOT NULL,
  months INTEGER NOT NULL DEFAULT 1,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index para búsquedas rápidas
CREATE INDEX IF NOT EXISTS idx_payments_member ON payments(member);
CREATE INDEX IF NOT EXISTS idx_payments_date ON payments(payment_date);

-- Insertar miembros iniciales (opcional)
-- INSERT INTO payments (member, payment_date, months) VALUES 
--   ('Rubén', CURRENT_DATE, 1),
--   ('María', CURRENT_DATE, 1),
--   ('Litri', CURRENT_DATE, 1),
--   ('Kika', CURRENT_DATE, 1),
--   ('Gordi', CURRENT_DATE, 1);
