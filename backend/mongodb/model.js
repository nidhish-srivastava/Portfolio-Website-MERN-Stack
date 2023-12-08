import mongoose, { Schema, model, Types } from "mongoose";

const projectSchema = new Schema({
   name : {type : String,required:true},
   description : {type : String,required:true},
   technologiesUsed : [{type : String,required:true}],
   images : [{type : String,required : true}],
   repoLink : {type : String},
   deploymentLink : {type : String},
//    startDate : {type : Date},
//    endDate : {type : Date},
//    inProgress : {type : Boolean}
},{
    timestamps : true
})

const Project = model("Project",projectSchema)

export {Project}