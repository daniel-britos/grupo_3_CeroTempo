module.exports = {
    panel : (req, res) => {
        return res.render('admin/panel');
    },
    create : (req, res) => {
        return res.render('admin/create');
    },
    edit : (req, res) => {
        return res.render('admin/edit');
    },
}