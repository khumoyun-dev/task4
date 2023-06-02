// This file contains the Sequelize model definition for the User entity
import { DataTypes } from  'sequelize';
import sequelize from '../config/db';

const User = sequelize.define(
    'User',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastLoginTime: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW,
        },
        registrationTime: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        status: {
            type: DataTypes.ENUM('active', 'blocked'),
            allowNull: false,
            defaultValue: 'active',
        },
    },
    {
        tableName: 'users',
    }
);

module.exports = User;
