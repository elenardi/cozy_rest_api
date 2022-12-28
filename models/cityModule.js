const Sequelize = require('sequelize')

const City = (sequelizeInstance) => {
    return sequelizeInstance.define('cities', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        name:{
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "Name Can't be Null!"
                },
                notEmpty: {
                    args: true,
                    msg: "Name Can't be Empty!"
                }
            }
        },
        imageUrl: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "City Can't be Null!"
                },
                notEmpty: {
                    args: true,
                    msg: "City Can't be Empty!"
                }
            }
        },
        isPopular: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            default: false,
        }
    }, {
        freezeTableName: true, //no add s in table name
        paranoid: true, //
        underscored: true,
    })
}

module.exports = City