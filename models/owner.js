// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");

// Creating our Owner model

module.exports = function (sequelize, DataTypes) {
const Owner = sequelize.define("Owner", {

    // The email cannot be null, and must be a proper email before creation

    dogName: {
      type: DataTypes.STRING,
      allowNull: true
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    },

    dogBreed: {
      type: DataTypes.STRING,
      allowNull: true
    },

    dogSize: {
      type: DataTypes.STRING,
      allowNull: true
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    schedule: {
      type: DataTypes.DATE,
      allowNull: true
    }
  });

  Owner.associate = function (models) {
    // Associating Owner with Walker

    Owner.hasMany(models.Walker, {

    });
  };

  // Creating a custom method for our Owner model. This will check if an unhashed password entered by the Owner can be compared to the hashed password stored in our database
  Owner.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the Owner Model lifecycle
  // In this case, before a Owner is created, we will automatically hash their password
  Owner.addHook("beforeCreate", owner => {
    owner.password = bcrypt.hashSync(
      owner.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return Owner;
};
