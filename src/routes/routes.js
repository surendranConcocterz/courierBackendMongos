import express from "express";
import users from "./users.js";
import authentication from "./authentication.js";
const router = express.Router();

export default () => {
  authentication(router);
  users(router);
  return router;
};
