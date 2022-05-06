module.exports = {
    index : (req, res) => {
        return res.render('index');
    },
<<<<<<< HEAD
    create : (req, res) => {
        return res.render('admin/create');
    },
    edit : (req, res) => {
        return res.render('admin/edit');
    },
=======
>>>>>>> productCart-fernando
    courses : (req, res) => {
        return res.render('courses');
    },
    luthiers : (req, res) => {
        return res.render('luthiers');
    }
}