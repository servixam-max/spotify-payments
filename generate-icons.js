const fs = require('fs');
const { createCanvas } = require('canvas');

// Crear icono 512x512
const canvas512 = createCanvas(512, 512);
const ctx512 = canvas512.getContext('2d');

// Fondo verde Spotify
ctx512.fillStyle = '#1DB954';
ctx512.roundRect(0, 0, 512, 512, 60);
ctx512.fill();

// Nota musical emoji
ctx512.font = '280px Arial';
ctx512.fillStyle = '#000';
ctx512.textAlign = 'center';
ctx512.textBaseline = 'middle';
ctx512.fillText('🎵', 256, 256);

// Guardar 512
const buffer512 = canvas512.toBuffer('image/png');
fs.writeFileSync('icon-512.png', buffer512);

// Crear icono 192x192
const canvas192 = createCanvas(192, 192);
const ctx192 = canvas192.getContext('2d');

ctx192.fillStyle = '#1DB954';
ctx192.roundRect(0, 0, 192, 192, 24);
ctx192.fill();

ctx192.font = '105px Arial';
ctx192.fillStyle = '#000';
ctx192.textAlign = 'center';
ctx192.textBaseline = 'middle';
ctx192.fillText('🎵', 96, 96);

const buffer192 = canvas192.toBuffer('image/png');
fs.writeFileSync('icon-192.png', buffer192);

console.log('✅ Icons generated: icon-192.png, icon-512.png');
