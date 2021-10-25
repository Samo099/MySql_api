const express = require("express");
const router = express.Router();
const db = require("../models");
const funcs = require("../funcs/crud_funcs") ;

const findProfAndDep = async(req,res)=>{
    try {
        
        const result = await funcs.findProfAndDep()
        
        if(result){
            res.send(result)
        }
        return result
    } catch (error) {
        return(error)
        
    }
}

module.exports ={  findProfAndDep } ;