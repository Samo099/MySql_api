
const express = require('express')
const router = express.Router()
// import * as crud_controllers from "../controllers/crud_controllers";
const {  insertDepartment } = require("../controllers/insertDepartment")
const {insertProfessor}  =require("../controllers/insertProffesor")
const {findProfAndDep}  =require("../controllers/findProfAndDep")


router.post("/insertDepartment",insertDepartment)
router.post("/insertProfessor",insertProfessor)
router.post("/findProfAndDep",findProfAndDep)

module.exports = router
