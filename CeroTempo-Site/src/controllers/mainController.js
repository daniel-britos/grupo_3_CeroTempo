module.exports = {
    index : (req, res) => {
        return res.render('index');
    },
    panel : (req, res) => {
        return res.render('admin/panel');
    },
    create : (req, res) => {
        return res.render('admin/create');
    },
    edit : (req, res) => {
        return res.render('admin/edit');
    },
    courses : (req, res) => {
        return res.render('courses');
    },
    luthiers : (req, res) => {
        return res.render('luthiers');
    }
}