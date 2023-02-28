import * as dotenv from "dotenv";
import express from "express";
dotenv.config();

import { databaseLoader } from "./src/loaders/database";
import { appLoader } from "./src/loaders/app";

process.on("uncaughtException", (err) => {
  console.log("uncaught exception");
});
process.on("unhandledRejection", (err) => {
  console.log("unhandled rejection");
});

const app = express();
databaseLoader()
  .then(() => appLoader())
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
