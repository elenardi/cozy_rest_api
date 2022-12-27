const Sequelize = require('sequelize')

const Space = (sequelizeInstance) => {
    return sequelizeInstance.define('spaces', {
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
        city: {
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
        country: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "Country Can't be Null!"
                },
                notEmpty: {
                    args: true,
                    msg: "Country Can't be Empty!"
                }
            }
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "Price Can't be Null"
                },
                notEmpty: {
                    args: true,
                    msg: "Price Can't be Empty!"
                }
            }
        },
        imageUrl: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "Image Can't be Null"
                },
                notEmpty: {
                    args: true,
                    msg: "Image Can't be Empty!"
                }
            }
        },
        rating: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "Rating Can't be Null"
                },
                notEmpty: {
                    args: true,
                    msg: "Rating Can't be Empty!"
                }
            }
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "Address Can't be Null"
                },
                notEmpty: {
                    args: true,
                    msg: "Address Can't be Empty!"
                }
            }
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "Phone Can't be Null"
                },
                notEmpty: {
                    args: true,
                    msg: "Phone Can't be Empty!"
                }
            }
        },
        mapUrl: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "Map URL Can't be Null"
                },
                notEmpty: {
                    args: true,
                    msg: "Map URL Can't be Empty!"
                }
            }
        },
        photos: { 
            type: Sequelize.STRING, 
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "Photo Can't be Null!"
                },
                notEmpty: {
                    args: true,
                    msg: "Photo Can't be Empty!"
                }
            },
            get: function() {
                return JSON.parse(this.getDataValue('photos'));
            }, 
            set: function(val) {
                return this.setDataValue('photos', JSON.stringify(val));
            }
        },
        numberOfKitchens: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "Kitchen Can't be Null"
                },
                notEmpty: {
                    args: true,
                    msg: "Kitchen Can't be Empty!"
                }
            }
        },
        numberOfBedrooms: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "Bedroom Can't be Null"
                },
                notEmpty: {
                    args: true,
                    msg: "Bedroom Can't be Empty!"
                }
            }
        },
        numberOfCupboards: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "Cupboard Can't be Null"
                },
                notEmpty: {
                    args: true,
                    msg: "Cupboard Can't be Empty!"
                }
            }
        },
    }, {
        freezeTableName: true, //no add s in table name
        paranoid: true, //
        underscored: true,
    })
}

module.exports = Space