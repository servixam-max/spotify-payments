# 🎵 Spotify Payments - Docker Setup

## 🚀 Inicio Rápido

### 1. Iniciar Docker
```bash
cd /Users/servimac/openclaw/spotify-payments
docker-compose up -d
```

### 2. Verificar que está corriendo
```bash
docker-compose ps
```

Deberías ver:
```
NAME                    STATUS
spotify-payments-db     Up
spotify-payments-api    Up
```

### 3. Abrir la App

**Desde tu PC:**
- Frontend: http://localhost:3001 (si usas un servidor web) o abre `index.html` directamente
- API: http://localhost:3000/api/payments

**Desde tu móvil (misma red WiFi):**
- Averigua la IP de tu PC: `ipconfig getifaddr en0` (Mac) o `ip addr` (Linux)
- Abre en el móvil: `http://192.168.X.X:3000` (la API)
- Para la web, necesitas servirla (ver abajo)

---

## 📱 Servir la Web para Móvil

### Opción A: Servidor simple (recomendado)
```bash
# En el PC, en otra terminal:
python3 -m http.server 3001
```

Desde el móvil: `http://IP-DEL-PC:3001`

### Opción B: GitHub Pages (solo lectura)
Sube a GitHub y activa Pages, pero la API necesita estar en tu red local.

---

## 🗄️ Base de Datos

### Conexión
- **Host:** localhost (o IP del PC desde móvil)
- **Puerto:** 5432
- **DB:** spotify_payments
- **User:** admin
- **Password:** spotify2024

### Ver datos directamente
```bash
docker exec -it spotify-payments-db psql -U admin -d spotify_payments
```

```sql
-- Ver todos los pagos
SELECT * FROM payments ORDER BY created_at DESC;

-- Ver por miembro
SELECT member, COUNT(*), SUM(months) FROM payments GROUP BY member;
```

---

## 🛑 Parar Docker
```bash
docker-compose down
```

Los datos **NO se borran** (están en volumen persistente).

---

## 🔄 Reiniciar
```bash
docker-compose restart
```

---

## 📊 Estructura de Archivos

```
spotify-payments/
├── docker-compose.yml    # Configuración Docker
├── init.sql             # Schema de base de datos
├── index.html           # App web frontend
├── api/
│   ├── server.js        # API Express
│   └── package.json     # Dependencias Node
└── README.md            # Este archivo
```

---

## 🔧 Troubleshooting

### Error: "Port 5432 already in use"
PostgreSQL ya está corriendo en tu PC. Cambia el puerto en `docker-compose.yml`:
```yaml
ports:
  - "5433:5432"  # Usa 5433 en vez de 5432
```

### Error: "Cannot connect to API"
1. Verifica que Docker está corriendo: `docker-compose ps`
2. Check logs: `docker-compose logs api`
3. Desde móvil, asegúrate de estar en la misma red WiFi

### Error: "Connection refused" desde móvil
1. Firewall del PC puede estar bloqueando
2. En Mac: System Settings → Network → Firewall → permitir
3. O temporalmente desactiva firewall para test

---

## 💾 Backup de Datos

Los datos están en `postgres_data` volumen de Docker.

### Exportar backup
```bash
docker exec spotify-payments-db pg_dump -U admin spotify_payments > backup.sql
```

### Restaurar backup
```bash
docker exec -i spotify-payments-db psql -U admin -d spotify_payments < backup.sql
```

---

## 🎯 Uso Diario

1. **Iniciar:** `docker-compose up -d`
2. **Abrir app** en móvil: `http://IP-PC:3001`
3. **Registrar pagos**
4. **Parar (opcional):** `docker-compose down`

Los datos persisten aunque pares Docker.
