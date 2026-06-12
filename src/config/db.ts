import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
dotenv.config();

const connectionString =
  process.env.NODE_ENV === "test"
    ? process.env.DATABASE_TEST_URL!
    : process.env.DATABASE_URL!;

const db = new Sequelize(connectionString, {
  models: [__dirname + "/../models/**/*"],
  logging: false,
});

export default db;
