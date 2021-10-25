const express = require("express");
const router = express.Router();
const db = require("../models");
const funcs = require("../funcs/crud_funcs") ;



// const createController = async(req,res)=>{
//  try{
// //  const userId = req.user.id ;
//  const result = await funcs.createOne(req.body)
//  if(!result){
//      return (req,res,"Result Not found")
//  }
//  return (req,res,result)
//     }
//     catch(error){
//         return (req,res,error)
//     }
// }


const insertDepartment = async(req,res)=>{
    try {
        const {iddepartment,deptName} = req.body
        const result = await funcs.insertDepartment(iddepartment,deptName)
        
        if(!result){
            return("false")
        }
        return result
    } catch (error) {
        return(error)
        
    }
}


module.exports ={  insertDepartment } ;