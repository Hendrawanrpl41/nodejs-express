module.exports = (sequelize, type) => {
  return sequelize.define(
    "account",
    {
      accountNumber: {
        field: "accountNumber",
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        field: "balance",
        type: type.INTEGER
      },
      birthDate: {
        field: "openDate",
        type: type.DATE
      },
      customerNumber: {
        field: "customerNumber",
        type: type.INTEGER
      },
    },
    {
      tableName: "account",
      timestamps: false
    }
  );
};
