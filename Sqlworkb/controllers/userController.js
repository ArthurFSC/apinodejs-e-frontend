const User = require('./models/usersModel');

const getUsers = (req, res) => {
    User.getAllUsers((err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
};

const createUser = (req, res) => {
    const { name, email } = req.body;
    User.createUser(name, email, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ id: result.insertId, name, email });
        }
    });
};

const deleteUser = (req, res) => {
    const userId = req.params.id;
    User.deleteUserById(userId, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.status(204).send(); 
        }
    });
};

const updateUser = (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    User.updateUserById(userId, name, email, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.status(200).json({ id: userId, name, email });
        }
    });
};

module.exports = {
    getUsers,
    createUser,
    deleteUser,
    updateUser
};
