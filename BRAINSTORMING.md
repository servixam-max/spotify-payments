# 🎵 Spotify Payments - Brainstorming Mejoras

## ✅ Estado Actual (Verificado)

| Componente | Estado | URL/Dato |
|------------|--------|----------|
| **GitHub Pages** | ✅ Online | `https://servixam-max.github.io/spotify-payments/` |
| **API Local** | ✅ Funcionando | `http://localhost:3000/api` |
| **API Tailscale** | ✅ Funcionando | `https://100.126.164.101/api` |
| **PostgreSQL** | ✅ Corriendo | Puerto 5432 |
| **Nginx (HTTPS)** | ✅ Proxy | Puertos 80, 443 |
| **Datos** | ✅ 1 pago | María (30 mar 2026) |

---

## 🎯 Mejoras Sugeridas (Brainstorming)

### 🔥 PRIORIDAD ALTA (Útiles ya)

#### 1. **Recordatorios Automáticos** ⏰
- Enviar mensaje Telegram/SMS cuando alguien no ha pagado
- Configurar día de recordatorio (ej: día 5 de cada mes)
- Mensaje personalizado: "Hey {nombre}, toca pagar Spotify 💚"

#### 2. **Exportar Datos** 📤
- Botón para descargar CSV/Excel con todos los pagos
- Útil para cuadrar cuentas
- Incluir: nombre, fecha, meses, importe, notas

#### 3. **Importe Total por Persona** 💰
- Mostrar cuánto debe cada uno en total
- Calcular promedio mensual
- Marcar en rojo si debe más de 2 meses

#### 4. **Búsqueda/Filtros** 🔍
- Filtrar por persona (click en nombre)
- Ver historial completo de una persona
- Filtrar por rango de fechas

---

### 🎨 PRIORIDAD MEDIA (Nice to have)

#### 5. **Dashboard Visual** 📊
- Gráfica de pagos por mes (línea o barras)
- Ver quién paga más/menos
- streak de pagos consecutivos por persona

#### 6. **Notas Rápidas** 📝
- Poder añadir nota a un pago existente
- Ej: "Bizum", "Transferencia", "Efectivo"
- Colores por método de pago

#### 7. **Multi-año Mejorado** 📅
- Vista de calendario anual
- Ver meses vacíos vs pagados
- Click en mes para ver detalle

#### 8. **Backup Automático** 💾
- Backup semanal a Google Drive/Dropbox
- O exportar automáticamente a email

---

### 🚀 PRIORIDAD BAJA (Futuro)

#### 9. **Invitar a Otros** 👥
- Cada persona ve SU estado (solo lectura)
- Link único por persona
- Que vean si están al día

#### 10. **Pagos Recurrentes** 🔄
- Configurar pago automático mensual
- Que se marque solo como "pendiente" cada mes
- Recordar fecha de último pago

#### 11. **Estadísticas** 📈
- Mes más caro del año
- Total recaudado por año
- Promedio de pagos por mes

#### 12. **Tema Personalizable** 🎨
- Cambiar color (no solo verde Spotify)
- Subir logo/foto del plan
- Nombre personalizado del plan

---

## 🛠️ Mejoras Técnicas Sugeridas

### Backend
- [ ] **CORS configurado** - Permitir GitHub Pages
- [ ] **Rate limiting** - Evitar spam de peticiones
- [ ] **Logs de errores** - Guardar en archivo
- [ ] **Health check endpoint** - `/api/health`

### Frontend
- [ ] **Loading states** - Spinner mientras carga
- [ ] **Error handling** - Mensajes claros si falla
- [ ] **PWA** - Instalar como app nativa
- [ ] **Offline mode** - Cache de datos recientes

### Docker
- [ ] **Auto-restart** - Si cae, se reinicia solo
- [ ] **Backup volume** - Montar carpeta local para backups
- [ ] **Logs persistentes** - No perder logs al restart

---

## 📋 Lista de Tareas Sugerida

### Sprint 1 (Esta semana)
- [ ] Exportar a CSV
- [ ] Importe total por persona
- [ ] Mejorar mensajes de error

### Sprint 2 (Próxima semana)
- [ ] Recordatorios (Telegram/Email)
- [ ] Dashboard con gráficas
- [ ] Filtros por persona

### Sprint 3 (Futuro)
- [ ] Vista de cada usuario (solo lectura)
- [ ] Pagos recurrentes automáticos
- [ ] PWA instalable

---

## 🎯 Recomendación Personal

**Empezar por:**
1. ✅ **Exportar CSV** - Muy útil, 30 min de trabajo
2. ✅ **Total por persona** - Visual, impacta mucho
3. ✅ **Mejorar errores** - UX más pulida

**Luego:**
4. ⏰ **Recordatorios** - Lo más útil día a día
5. 📊 **Dashboard visual** - Da sensación de control

**Dejar para después:**
- Invitar a otros (complejo, requiere auth)
- Pagos recurrentes (puede dar problemas)

---

## 💡 Ideas Extra

- **Widget iOS** - Ver estado desde home screen
- **Siri Shortcuts** - "Oye Siri, ¿quién debe Spotify?"
- **Integración Bizum** - Detectar automáticamente (difícil)
- **Voice commands** - "Alexa, registra pago de Rubén"

---

**Total mejoras: 12 + 4 técnicas = 16 ideas**
**Recomendado: Empezar por top 3 de Prioridad Alta**
