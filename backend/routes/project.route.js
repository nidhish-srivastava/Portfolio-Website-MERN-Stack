import express from 'express'
import { fetchAllProjects, fetchSingleProject } from '../controllers/project.controller.js'
import { Project } from '../mongodb/model.js'

const router = express.Router()

router.get('/',fetchAllProjects)
router.get('/:id',fetchSingleProject)

router.post('/',async(req,res)=>{
    const {name,description,technologiesUsed,startDate,images} = req.body
    await Project.create({name,description,technologiesUsed,startDate,images})
})

export default router