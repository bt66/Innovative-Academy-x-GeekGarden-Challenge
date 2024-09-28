const userController = require('../controllers/user.controller');

const userRouter = require('express').Router();

userRouter.get("/", userController.get);
userRouter.post("/", userController.post);
userRouter.put("/:id", userController.put);
userRouter.delete("/:id", userController.delete);

module.exports = userRouter;


