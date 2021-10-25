module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define("Todo", {
    
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    text: {
      type: DataTypes.STRING,
      
      allowNull: false,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    }
  });
  return Todo;
};