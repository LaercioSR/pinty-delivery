require("dotenv").config();

const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOSTNAME, DB_PORT } = process.env;

if (!DB_USERNAME || !DB_PASSWORD || !DB_NAME || !DB_HOSTNAME || !DB_PORT) {
  throw new Error("Missing or incomplete database environment variables.");
}

module.exports = {
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_HOSTNAME,
  port: Number(DB_PORT),
  dialect: "postgres",
  // dialectOptions: {
  //   ssl: {
  // require: true,
  //     rejectUnauthorized: false,
  //   },
  // },
  define: {
    timestamps: true,
    underscored: true,
  },
};
