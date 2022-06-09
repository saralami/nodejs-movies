const UsersService = require('./users.service');

module.exports.list = (req, res) => {
    res.send(UsersService.listUsers());
}