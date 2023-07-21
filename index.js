const express = require('express')
const mongoose = require('mongoose');
const Post = require('./Post');
const router = require('./router');

const PORT = 5000;
const DB_URL = `mongodb://127.0.0.1:27017`

const app = express()
app.use(express.json())
app.use('/api', router)

app.post('/', async (req, res) => {


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
