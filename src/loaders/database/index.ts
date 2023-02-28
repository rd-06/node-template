import mongoose from "mongoose";

const databaseLoader = async () =>
  new Promise<any>((res, rej) => {
    mongoose
      .connect("mongodb://localhost:8000/usersdb", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then((db) => {
        console.log("db connection established");
        res(db);
      })
      .catch(rej);
  });

export { databaseLoader };
