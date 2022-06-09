const usersService = require('../users/users.service');
const jwt = require('jsonwebtoken');

module.exports.register = ({ name, pwd }) => {
    return usersService.newUser({ name, pwd });
}

module.exports.login = ({ name, pwd }) => {
    let user = usersService.findByName(name);
    if (!user || user.pwd !== pwd) {
        return null;
    } else {
        user = {...user };
        delete user.pwd;
        const token = jwt.sign(user, 'nodeAngularKey', { expiresIn: 60 * 60 });
        return { user, token };
    }
}



module.exports.verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, 'nodeAngularKey', (error, decoded) => {
            if (error) {
                reject(error);
            } else {
                resolve(decoded);
            }
        })
    })
}