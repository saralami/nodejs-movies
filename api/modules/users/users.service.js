const users = [
    { id: 1, name: 'sophia', pwd: '1234', role: 'Admin' },
    { id: 2, name: 'momo', pwd: '12343', role: 'User' },
    { id: 3, name: 'astou', pwd: '123', role: 'User' }
]

module.exports.listUsers = () => {
    return users;
}

module.exports.findByName = (name) => {
    return users.find((user) => user.name === name);
}

module.exports.newUser = (user) => {
    const newUser = {...newUser, id: users.length + 2, role: 'User' }
}