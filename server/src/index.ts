// import express from "express";
// import http from "http";
// import bodyParser from "body-parser";
// import cookieParser from "cookie-parser";
// import compression from "compression";
// import cors from "cors";

// const app = express();

// app.use(
//   cors({
//     credentials: true,
//   })
// );

// app.use(compression());
// app.use(cookieParser());
// app.use(bodyParser.json());

// const server = http.createServer(app);

// server.listen(3001, () => {
//   console.log("Server running on http://localhost:3001/")
// })

import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import Database from "./config/database";
import UserRoute from "./router/UserRoute";
import cors from "cors";
import compression from "compression"

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.databaseSync();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    this.app.use(compression());
    this.app.use(bodyParser.json());
    this.app.use(
      cors({
        credentials: true,
      })
    );
    // this.app.use(express.json())
    // this.app.use(express.urlencoded({extended: true}))
  }

  protected databaseSync(): void {
    const db = new Database();
    db.sequelize?.sync();
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("Api works!");
    });
    this.app.use("/api/v1/users", UserRoute);
  }
}

const port: number = 8000;
const app = new App().app;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
