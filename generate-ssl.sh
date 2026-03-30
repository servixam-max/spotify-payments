#!/bin/bash

# Generar certificados SSL autosignados
mkdir -p ./ssl

# Generar certificado válido por 10 años
openssl req -x509 -nodes -days 3650 -newkey rsa:2048 \
  -keyout ./ssl/server.key \
  -out ./ssl/server.crt \
  -subj "/C=ES/ST=Spain/L=Madrid/O=Spotify Payments/CN=spotify-payments.local"

echo "✅ Certificados SSL generados en ./ssl/"
echo ""
echo "⚠️ Tu navegador mostrará una advertencia de seguridad (es normal, es autosignado)"
echo "   Acepta el riesgo y continúa"
