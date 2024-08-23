const db = require('../config/db');

// Função para criar um usuário
const createUser = (name, email, callback) => {
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(sql, [name, email], callback);
};

// Função para buscar todos os usuários
const getAllUsers = (callback) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, callback);
};

// Função para deletar um usuário pelo ID
const deleteUserById = (id, callback) => {
    const sql = 'DELETE FROM users WHERE idusers = ?';
    db.query(sql, [id], callback);
};


// Função para atualizar um usuário pelo ID
const updateUserById = (id, name, email, callback) => {
    const sql = 'UPDATE users SET name = ?, email = ? WHERE idusers = ?';
    db.query(sql, [name, email, id], callback);
};

module.exports = {
    createUser,
    getAllUsers,
    deleteUserById,
    updateUserById,
};
