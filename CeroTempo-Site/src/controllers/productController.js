const db = require("../database/models");
const { Op } = require("sequelize");
module.exports = {
  pMain: (req, res) => {
    db.Product.findAll({
      include: ["images"],
    })
      .then((products) => {
        return res.render("productMain", {
          products,
        });
      })
      .catch((error) => console.log(error));
  },
  pCart: (req, res) => {
    res.render("productCart");
  },
  pDetail: (req, res) => {
    db.Product.findByPk(req.params.id, {
      include: ["images"],
    })
      .then((product) => {
        return res.render("productDetail", {
          product,
        });
      })
      .catch((error) => console.log(error));
  },
  pSearch: (req, res) => {
    const { keywords } = req.query;
    db.Product.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.substring]: keywords,
            },
          },
          {
            description: {
              [Op.substring]: keywords,
            },
          },
        ],
      },
      include: ["images"],
    })
      .then((products) => {
        return res.render("search", {
          products,
          keywords,
        });
      })
      .catch((error) => console.log(error));
  },
  pStrings: (req, res) => {
    db.Product.findAll({
      include: ["images"],
    })
      .then((products) => {
        let categories = products.filter((product) => product.categoryId === 1);
        res.render("categoryStrings", {
          categories,
        });
      })
      .catch((error) => console.log(error));
  },
  pWind: (req, res) => {
    db.Product.findAll({
      include: ["images"],
    })
      .then((products) => {
        let categories = products.filter((product) => product.categoryId === 2);
        res.render("categoryWind", {
          categories,
        });
      })
      .catch((error) => console.log(error));
  },
  pPercussion: (req, res) => {
    db.Product.findAll({
      include: ["images"],
    })
      .then((products) => {
        let categories = products.filter((product) => product.categoryId === 3);
        res.render("categoryPercussion", {
          categories,
        });
      })
      .catch((error) => console.log(error));
  },
  pIdiophones: (req, res) => {
    db.Product.findAll({
      include: ["images"],
    })
      .then((products) => {
        let categories = products.filter((product) => product.categoryId === 4);
        res.render("categoryIdiophones", {
          categories,
        });
      })
      .catch((error) => console.log(error));
  },
  pElectronics: (req, res) => {
    db.Product.findAll({
      include: ["images"],
    })
      .then((products) => {
        let categories = products.filter((product) => product.categoryId === 5);
        res.render("categoryElectronics", {
          categories,
        });
      })
      .catch((error) => console.log(error));
  },
  brandCremona: (req, res) => {
    db.Product.findAll({
      include: ["images"],
    })
      .then((products) => {
        let categories = products.filter((product) =>
          product.name.includes("Cremona")
        );
        res.render("brandCremona", {
          categories,
        });
      })
      .catch((error) => console.log(error));
  },
  brandFender: (req, res) => {
    db.Product.findAll({
      include: ["images"],
    })
      .then((products) => {
        let categories = products.filter((product) =>
          product.name.includes("Fender")
        );
        res.render("brandFender", {
          categories,
        });
      })
      .catch((error) => console.log(error));
  },
  brandMapex: (req, res) => {
    db.Product.findAll({
      include: ["images"],
    })
      .then((products) => {
        let categories = products.filter((product) =>
          product.name.includes("Mapex")
        );
        res.render("brandMapex", {
          categories,
        });
      })
      .catch((error) => console.log(error));
  },
  brandYamaha: (req, res) => {
    db.Product.findAll({
      include: ["images"],
    })
      .then((products) => {
        let categories = products.filter((product) =>
          product.name.includes("Yamaha")
        );
        res.render("brandYamaha", {
          categories,
        });
      })
      .catch((error) => console.log(error));
  },
};
