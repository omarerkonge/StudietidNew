const Database = require('better-sqlite3');
const db = new Database('studetid.db'); // Navnet på databasen din

// Sjekk om tabellen finnes og opprett om ikke
db.exec(`
  CREATE TABLE IF NOT EXISTS Studietid (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    bruker_id TEXT NOT NULL,
    fag_id TEXT NOT NULL,
    rom_id TEXT NOT NULL,
    registreringsdato TEXT NOT NULL,
    status TEXT NOT NULL
  );
`);

module.exports = db;
