const express = require('express')
const mongoose = require('mongoose');

const PORT = 5000;
const DB_URL = `mongodb://localhost:27017`

const app = express()
app.use(express.json())

app.post('/', (req, res) => {
    console.log(req.body)

    res.status(200).json('Сервер работает12')
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('Сервер запущен на порту' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp();
