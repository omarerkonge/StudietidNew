// insertStudietid.js
const db = require('./Database'); // Importer databasen fra Database.js

function registrerStudietid(bruker_id, fag_id, rom_id) {
  const registreringsdato = new Date().toISOString().slice(0, 19).replace('T', ' '); // Format: YYYY-MM-DD HH:MM:SS
  const status = 'venter på godkjenning';

console.log(bruker_id,fag_id,rom_id)

  const stmt = db.prepare(`
    INSERT INTO Studietid (bruker_id, fag_id, rom_id, registreringsdato, status)
    VALUES (?, ?, ?, ?, ?)
  `);

  stmt.run(bruker_id, fag_id, rom_id, registreringsdato, status);
}

function hentStudietid() {
  const stmt = db.prepare('SELECT * FROM Studietid');
  return stmt.all();
}

module.exports = { registrerStudietid, hentStudietid };
