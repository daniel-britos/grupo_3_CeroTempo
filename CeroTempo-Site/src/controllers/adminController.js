const { validationResult } = require("express-validator");
const fs = require('fs');
const path = require('path');
const db = require('../database/models'); 

const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
module.exports = {
    panel: (req, res) => {
        return res.render('panel');
    },
    list: (req, res) => {
		db.Product.findAll({
			include : ['images']
		})
			.then(products => {
				return res.send(products)
			})
			.catch(error => console.log(error))
      },
    create: (req, res) => {
        return res.render('create');
    },
    edit: (req, res) => {
	},

    store: (req, res) => {    
    },
    update: (req, res) => {
},
    remove: (req, res) => {

    }
}