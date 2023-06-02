import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const db = process.env.DB_NAME;
const db_user = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;




const sequelize = new Sequelize(db, db_user, db_password, {
    logging: false
});

module.exports = sequelize;
