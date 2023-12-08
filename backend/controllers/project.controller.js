import { Project } from "../mongodb/model.js"

const fetchAllProjects = async(req,res)=>{
    try {
        const response = await Project.find({})
        if(!response) return res.status(403).json("No projects made")
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error})
    }
}

const fetchSingleProject = async(req,res)=>{
      try {
        const response = await Project.findById(req.params.id)
        if(!response) return res.status(403).json("Project unavailable")
        res.status(200).json(response)
      } catch (error) {
        res.status(500).json({error})
      }
}

export {fetchAllProjects,fetchSingleProject}