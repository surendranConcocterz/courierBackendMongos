import { login, register } from "../controllers/authenticationcontroller.js";

export default (router) => {
  router.post("/auth/register", register);
  router.post("/auth/login", login);
};
