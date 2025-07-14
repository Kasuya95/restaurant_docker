const {Sequelize} = require("sequelize")
const dbconfig = require("../config/db.config")

const sequelize = new Sequelize(dbconfig.DB,dbconfig.USER,dbconfig.PASSWORD,{
    host:dbconfig.HOST,
    port:dbconfig.PORT,
    dialect: dbconfig.dialect,
    logging:false,
})

testConnection = async () => {
    try{
        await sequelize.authenticate();
        console.log("connect leawwww")
    }
    catch(error){
        console.log("filed")
    }
    
}
testConnection();
module.exports = sequelize;