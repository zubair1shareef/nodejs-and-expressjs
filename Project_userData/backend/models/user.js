const Sequelize=require('sequelize')
const sequelize=require('../util/db')

const Users=sequelize.define('users',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,

    },
    email:{
        type:Sequelize.STRING,

    }
})
module.exports=Users