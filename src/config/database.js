const secret = require('./secret');

module.exports = {
    username: 'root',
    password: secret.DATABASE_PASSWORD,
    database: 'pinty_delivery',
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: true,
        underscored: true,
    },
    // username: process.env.DB_USERNAME,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
    // host: process.env.DB_HOSTNAME,
    // port: process.env.DB_PORT,
    // dialect: 'mysql',
    // define: {
    //     timestamps: true,
    //     underscored: true,
    // },
}