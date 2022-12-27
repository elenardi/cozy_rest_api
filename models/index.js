const dbConfig = require('../config/database')
const Sequelize = require('sequelize')

const Space = require('./spaceModel')

const sequelizeInstance = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})

const db = {};
db.sequelizeInstance = sequelizeInstance
db.Space = Space(sequelizeInstance)

module.exports = db