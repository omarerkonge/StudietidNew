// Hent elementer
const form = document.getElementById('studentForm');
const tableBody = document.querySelector('#studentTable tbody');
let studentData = [];
let studentCount = 0;

// Håndter skjema for å legge til ny elev
form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Hent inputverdier
    const name = document.getElementById('studentName').value;
    const hours = document.getElementById('studyHours').value;

    // Legg til elevdata
    if (name && hours) {
        studentCount++;
        studentData.push({ id: studentCount, name: name, hours: hours });
        updateTable();
        form.reset();
    }
});

// Oppdater tabellen med ny data
function updateTable() {
    tableBody.innerHTML = ''; // Tøm tabellen før oppdatering
    studentData.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.hours}</td>
        `;
        tableBody.appendChild(row);
    });
}
