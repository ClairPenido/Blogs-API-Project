const { User } = require('../models');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const enterLogin = await User.create({ displayName, email, password, image });

    if (!enterLogin) {
      return res.status(404).send({ message: 'Erro ao cadastrar uma conta!' });
    }
    
    return res.status(200).json({ message: 'Conta cadastrada com sucesso' });
  } catch (err) {
    console.log('qual o erro:', err.message);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

module.exports = {
  createUser,
};