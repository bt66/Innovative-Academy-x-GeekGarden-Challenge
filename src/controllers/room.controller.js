const { use } = require('../router/room.router');
const {Room, User} = require('./../models/index')

module.exports = {
  get: async(req, res) => {
    try {
      const rooms = await Room.findAll({
        include: [{ model: User, as: 'user' }], // Include user details
      });
      return res.status(200).json({
        errorCode: 200,
        message: "Room resource",
        data: rooms,
      });
    } catch (error) {
      return res.status(500).json({
        errorCode: 500,
        message: error.message,
      });
    }
  },
  post: async(req, res) => {
    try {
      const { roomName, userId } = req.body; // Extract room name and user ID from request body
      const room = await Room.create({ roomName, userId });
      return res.status(201).json({
        message: "Room created successfully",
        data: room,
      });
    } catch (error) {
      return res.status(500).json({
        errorCode: 500,
        message: error.message,
      });
    }
  },
  put: async (req, res) => {
    try {
      const { id } = req.params; // Get room ID from URL parameters
      const { roomName, userId } = req.body; // Extract updated data from request body
  
      const room = await Room.findByPk(id);
      // check if room available
      if (!room) {
        return res.status(404).json({
          message: "Room not found",
        });
      }
  
      await room.update({ roomName, userId });
      return res.json({
        message: "Room updated successfully",
        data: room,
      });
    } catch (error) {
      return res.status(500).json({
        errorCode: 500,
        message: error.message,
      });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params; // Get room ID from URL parameters
      const room = await Room.findByPk(id);
      // check if room available
      if (!room) {
        return res.status(404).json({
          message: "Room not found",
        });
      }
  
      await room.destroy();
      return res.json({
        message: "Room deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        errorCode: 500,
        message: error.message,
      });
    }
  },
};