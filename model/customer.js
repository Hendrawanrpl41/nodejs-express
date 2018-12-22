module.exports = (sequelize, type) => {
    return sequelize.define('customer', {
        customerNumber: {
            field: 'customerNumber',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            field: 'firstName',
            type: type.STRING
        },
        lastName: {
            field: 'lastName',
            type: type.STRING
        },
        birthDate: {
            field: 'birthDate',
            type: type.DATE
        },
        username: type.STRING,
        password: type.STRING,
        phoneNumber: {
            field: 'phoneNumber',
            type: type.STRING
        },
        phoneType: {
            field: 'phoneType',
            type: type.STRING
        }
    }, {
            tableName: 'customer',
            timestamps: false
        })
}
