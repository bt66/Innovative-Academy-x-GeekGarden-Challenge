const roomController = require('../controllers/room.controller');

const roomRouter = require('express').Router();

roomRouter.get("/", roomController.get);
roomRouter.post("/", roomController.post);
roomRouter.put("/:id", roomController.put);
roomRouter.delete("/:id", roomController.delete);

module.exports = roomRouter;


