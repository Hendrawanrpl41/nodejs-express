module.exports = (sequelize, type) => {
    return sequelize.define(
        "Transaction", {
            id: {
                field: "id",
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            type: {
                field: "type",
                type: type.STRING
            },
            amount: {
                field: "amount",
                type: type.STRING
            },
            amountSign: {
                field: "amountSign",
                type: type.STRING
            },
            accountNumber: {
                type: type.INTEGER,
                onDelete: "CASCADE",
                references: {
                    model: "account",
                    key: "accountNumber"
                }
            },
        },
        {
            tableName: "transaction",
            timestamps: false
        }
    );
};
