module.exports = (app) => {
    const Ctrl = require('./users.controller');
    app.route('/users')
        .get(Ctrl.list);
}