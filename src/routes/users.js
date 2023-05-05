import {
  getAllUsers,
  deleteUser,
  updateUser,
} from "../controllers/userscontroller.js";
import { isAuthenticated, isOwner } from "../middlewares/index.js";

export default (router) => {
  router.get("/users", isAuthenticated, getAllUsers);
  router.delete("/users/:id", isAuthenticated, isOwner, deleteUser);
  router.patch("/users/:id", isAuthenticated, isOwner, updateUser);
};
