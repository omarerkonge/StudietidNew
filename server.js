const express = require('express');
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const path = require('path');
const register = require('./Database/insertStudietid')

const app = express();
app.use(bodyParser.json());

const publicvei = path.join(__dirname, '/Nettsiden')
app.use(express.static(publicvei));

app.get ('/side', (req,res) => {
    res.sendFile(publicvei, 'core.html')
})

const port = process.env.PORT

/* Koble til databasen

*/

// API-endepunkt for å registrere studietid
app.post('/api/registrerStudietid', async (req, res) => {
    const { bruker_id, fag_id, rom_id } = req.body;
    console.log(bruker_id,fag_id,rom_id);

    try {
        register.registrerStudietid(bruker_id,fag_id,rom_id)
        /*const newStudyTime = new StudyTime({ bruker_id, fag_id, rom_id });
        await newStudyTime.save();*/
        res.status(200).json({ message: 'Studietid registrert!' });
    } catch (error) {
        console.error('Error while saving study time:', error);
        res.status(500).json({ error: 'Noe gikk galt!' });
    }

});

// Start serveren
app.listen(port, () => {
    console.log('Server kjører på http://localhost:3000');
});


/*
const hapi = require ('hapi')
const server = new hapi.Server()

server.connection ({
    host:'localhost',
    port: 3000
})

server.register ({
    register:require ('inert')
}, (err) => {
    if (err) {
        throw err
    }
} )

server.route({
    method: 'GET',
    path: '/core.js', 
    handler: (request, reply) => {
        reply.file ('Nettsiden/core.js')
    }

})

server.start(function (err){
    if (err) {
        throw err
    }
})

//83
//
*/