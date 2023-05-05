import dotenv from "dotenv";
import express from "express";
import MongoConnect from "./db/db.js";
import routes from "./routes/routes.js";
import cors from "cors";
dotenv.config();

const app = express();
const port = 8080;

MongoConnect();
app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
routes(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
