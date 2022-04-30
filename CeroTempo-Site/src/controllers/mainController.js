module.exports = {
    index : (req, res) => {
        return res.render('index');
    },
    courses : (req, res) => {
        return res.render('courses');
    },
    luthiers : (req, res) => {
        return res.render('luthiers');
    }
}