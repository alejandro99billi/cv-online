const fs = require('fs-extra');
const path = require('path');

const sourceDir = path.join(__dirname, 'dist', '_astro');
const destDir = path.join(__dirname, 'dist', 'cv-online', '_astro');

// Asegúrate de que la carpeta de destino exista
fs.ensureDirSync(destDir);

// Copiar archivos
fs.copy(sourceDir, destDir, { overwrite: true }, err => {
  if (err) {
    console.error('Error copying files:', err);
  } else {
    console.log('Files copied successfully!');
  }
});