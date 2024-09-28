const { use } = require('../router/user.router');
const {User} = require('./../models/index')

module.exports = {
  get: async(req, res) => {
    try{
      const user = await User.findAll();
      console.log(user);
      return res.send({
        errorCode: 200,
        message: "User resource",
        data: user
      })
    }catch(error) {
      return res.send({
        errorCode: 500,
        message: error.message
      })
    }
  },
  post: async(req, res) => {
    try {
      const body = req.body;
      const user = await User.create(body);
      return res.status(201).send({
        message: "Create User resource",
        data: user
      })
    }catch(error) {
      return res.send({
        errorCode: 500,
        message: error.message
      })
    }
    
  },
  put: async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).send({
          message: "User not found",
        });
      }

      await user.update(body);
      return res.send({
        message: "Update User resource",
        data: user,
      });
    } catch (error) {
      return res.status(500).send({
        errorCode: 500,
        message: error.message,
      });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).send({
          message: "User not found",
        });
      }

      await user.destroy(); // Delete the user
      return res.send({
        message: `Delete User resource with id ${id}`,
      });
    } catch (error) {
      return res.status(500).send({
        errorCode: 500,
        message: error.message,
      });
    }
  },
};