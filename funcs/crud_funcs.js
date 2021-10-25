const {sequelize, Sequelize} = require("../models")
const { QueryTypes } = require("sequelize");

// export const findAll = async(userId,body) => {
// const findResult = await sequelize.query(`SELECT * FROM orders WHERE userId="${userId}"`,
// type : QueryTypes.SELECT)

// if(!findResult){
//     return true
// }
// return findResult 
// }

//insert in department

const insertDepartment = async(iddepartment,deptName) =>{
    const result = await sequelize.query(`INSERT INTO department(iddepartment,deptName) VALUES(:iddepartment,:deptName)` , 
    {
 replacements: {
                iddepartment,deptName
            },
            type: QueryTypes.INSERT 
    }   
        )

        return "Success";
}

const insertProfessor = async(name,department_iddepartment)=>{
   const result = await sequelize.query(`INSERT INTO professor(name,department_iddepartment) VALUES(:name,:department_iddepartment)` , 
    {
 replacements: {
                name,department_iddepartment
            },
            type: QueryTypes.INSERT 
    }   
        )
        return result;
}

const findProfAndDep = async()=>{
   const result = await sequelize.query(`SELECT professor.name,department.deptName from professor LEFT JOIN department ON professor.department_iddepartment=department.iddepartment` , 
    {

            type: QueryTypes.INSERT 
    }   
        )
        return result;
}



// const createOne = async(body) =>{
//  const {pName} = body
//     const findResult  = await sequelize.query(`INSERT INTO professor(name) VALUES ("${pNmae}")`,type: QueryTypes.INSERT) 

// if(!findResult){
//     return true
// }
// return findResult 
// }

module.exports = {insertDepartment,insertProfessor,findProfAndDep};