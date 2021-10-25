const express = require("express");
const router = express.Router();
const db = require("../models");
const funcs = require("../funcs/crud_funcs") ;

const insertProfessor = async(req,res)=>{
    try {
        const {name,department_iddepartment} =req.body
        const result = await funcs.insertProfessor(name,department_iddepartment)
        //  res.send("Professor Insert Successful")
        if(!result){
            return("false")
        }
       res.send("Professor Insert Successful")
    } catch (error) {
        return(error)
        
    }
    return result
}

module.exports ={  insertProfessor } ;