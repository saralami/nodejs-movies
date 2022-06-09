const movies = [

    { id: 1, title: 'shrek', description: 'lorem', rate: 4, year: 2000 },
    { id: 2, title: 'Suits', description: 'lorem', rate: 2, year: 2022 },
    { id: 3, title: 'think like a man', description: 'lorem', rate: 5, year: 2022 }
]



module.exports.findAll = (req, res) => {
    let year = req.query.year;
    let moviesByYear = []
    if (year) {
        movies.forEach(el => {
            if (el.year == year) {
                // const movie = movies.find((m) => m.year == year);
                moviesByYear.push(el);
            }

        });

        if (moviesByYear.length > 0) {
            res.send(moviesByYear);
            // moviesByYear = [];
        } else {
            res.send(('No movies for this year'))
        }

    } else {
        res.send(movies);
        // moviesByYear = [];
    }

}

module.exports.insertOne = (req, res) => {
    movies.push(req.body);
    res.json(req.body);
}

module.exports.findOneMovie = (req, res) => {
    const id = req.params.id;
    const movie = movies.find((m) => m.id == id);
    if (movie) {
        res.send(movie);
    } else {
        res.send(404, "this movie doesn't exist")
    }


}

module.exports.updateOneMovie = (req, res) => {
    const id = req.params.id;
    const index = movies.findIndex((m) => m.id == id);
    console.log(movies[index])
    const movie = movies[index] = {...movies[index], ...req.body };
    //const movie = movies[index] = req.body;
    res.send(movie);
}

module.exports.deleteOneMovie = (req, res) => {
    const id = req.params.id;
    const index = movies.findIndex((m) => m.id == id);
    movies.splice(index, 1);
    res.send({ status: true });
}

/*module.exports.getMoviesByYear = (req, res) => {
    const year = req.query.year;
    if (movies.find((m) => m.year == year)) {
        moviesByYear.push(year);
    }

    res.send(year);
}*/