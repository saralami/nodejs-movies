module.exports = function(app) {
    const crtl = require('./movies.controller');
    app.route('/movies/')
        .post(crtl.insertOne)
        // .get(crtl.getMoviesByYear)

    app.route('/movies/:id')
        .get(crtl.findOneMovie)
        .put(crtl.updateOneMovie)
        .delete(crtl.deleteOneMovie)

}