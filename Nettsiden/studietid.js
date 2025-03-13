// Modal elementer
var registerModal = document.getElementById("registerModal");
var loginModal = document.getElementById("loginModal");

// Knapper for åpning
var registerBtn = document.getElementById("registerBtn");
var loginBtn = document.getElementById("loginBtn");

// <span> for lukking
var closeRegister = document.getElementsByClassName("close")[0];
var closeLogin = document.getElementsByClassName("closeLogin")[0];

// Åpne modal
registerBtn.onclick = function() {
    registerModal.style.display = "block";
}
loginBtn.onclick = function() {
    loginModal.style.display = "block";
}

// Lukk modal
closeRegister.onclick = function() {
    registerModal.style.display = "none";
}
closeLogin.onclick = function() {
    loginModal.style.display = "none";
}

// Lukk når man klikker utenfor modal
window.onclick = function(event) {
    if (event.target == registerModal) {
        registerModal.style.display = "none";
    } else if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}

// Registrer bruker
document.getElementById("registerForm").onsubmit = function(event) {
    event.preventDefault();

    var username = document.querySelector('input[name="username"]').value;
    var password = document.querySelector('input[name="password"]').value;

    if (localStorage.getItem(username)) {
        alert("Brukernavnet er allerede i bruk.");
    } else {
        localStorage.setItem(username, password);
        alert("Bruker registrert: " + username);
        registerModal.style.display = "none";
    }
}

// Innlogging
document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault();

    var username = document.querySelector('input[name="loginUsername"]').value;
    var password = document.querySelector('input[name="loginPassword"]').value;

    var storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        alert("Innlogging vellykket!");
        loginModal.style.display = "none";
        window.location.href = "core.html";
    } else {
        alert("Feil brukernavn eller passord. Prøv igjen.");
    }
}

// Forhåndsvis bilde ved opplasting
function previewImage(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(){
        var imagePreview = document.getElementById("imagePreview");
        imagePreview.src = reader.result;
        imagePreview.style.display = "block";
    }

    if (file) {
        reader.readAsDataURL(file);
    }
}

//ADMIN LOGIN
var objPeople = [ 
    {
        username : "Admin", 
        password : "Admin"
    },
    {
        username : "Admin2",
        password : "Admin2"
    }
]

function getInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

for (var i = 0 ; i< objPeople.length;i++) {
    if (username == objPeople [i].username && password == objPeople [i].password) {
        console.log(username + "er nå innlogget!")
        window.location.href = "LEDER.html"; 
        return
    }

}
console.log('feil brukernavn eller passord')
}