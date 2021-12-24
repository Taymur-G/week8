const { Router } = require("express");
const { addUser, listUsers, updateUser, deleteUser, updateUserNormal } = require("./userController");
const { emailCheck, hashPassword } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", emailCheck, hashPassword, addUser);
userRouter.get("/user", listUsers);
userRouter.put("/user", emailCheck, hashPassword, updateUser);
userRouter.delete("/user", deleteUser);

module.exports = userRouter;