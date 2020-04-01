const secret = require('./secret');

module.exports = {
    username: 'root',
    password: secret.DATABASE_PASSWORD,
    database: 'pinty_delivery',
    host: '127.0.0.1',
    port: '3306',
    dialect: process.env.NODE_ENV == 'DEV' ? 'mysql' : 'postgres',
    // dialect: 'mysql',
    define: {
        timestamps: true,
        underscored: true,
    },
}