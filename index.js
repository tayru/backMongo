import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js";
import Post from "./Post.js";

const PORT = 5000;
const DB_URL = `mongodb://localhost:27017`

const app = express()
app.use(express.json())
app.use('/api', router)

// app.post('/',
//     async (req, res) => {
//     try {
//         console.log(req.body)
//         const {author, title, content, picture} = req.body
//         const post = await Post.create({author, title, content, picture})
//         res.json(post)
//     } catch (e) {
//         res.status(500).json(e)
//     }
// })


async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('Сервер запущен на порту' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp();
