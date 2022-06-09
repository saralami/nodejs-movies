module.exports = function(app) {
    const crtl = require('./movies.controller');
    app.route('/movies/')
        .get(crtl.findAll)



}