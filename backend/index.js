import express from 'express'
import { connectmongodb } from './mongodb/connect.js'
const app = express()
import cors from 'cors'
import projectRoute from './routes/project.route.js' 
app.use(cors())
app.use(express.json())
const port = 4000 || process.env.PORT

app.use('/project',projectRoute)

const start = async()=>{
   connectmongodb()
   app.listen(port,()=>{
    console.log(`Server is listening at port ${port}`);
})
}

start()