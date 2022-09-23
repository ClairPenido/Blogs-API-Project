const { User } = require('../models');
const errorGenerate = require('../utils/genericError');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const enterLogin = await User.create({ displayName, email, password, image });

    if (enterLogin.displayName.lenght < 8) {
      throw errorGenerate(400,
         '"displayName" length must be at least 8 characters long', 'string.min');
    } 
    
    return res.status(200).json({ message: 'Conta cadastrada com sucesso' });
};

module.exports = {
  createUser,
};