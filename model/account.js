module.exports = (sequelize, type) => {
  return sequelize.define(
    "account", {
      accountNumber: {
        field: "accountNumber",
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      balance: {
        field: "balance",
        type: type.INTEGER
      },
      openDate: {
        field: "openDate",
        type: type.DATE
      },
      customerNumber: {
        type : type.INTEGER,
        onDelete : "CASCADE",
        references: {
          model: "customer",
          key: "customerNumber"
        }
      },
    },
    {
      tableName: "account",
      timestamps: false
    }
  );
};
