module.exports = (sequelize, dataTypes) => {
    const alias = "Product";

    const cols = {
        id : {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
        price:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        discount:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
        description:{
            type: dataTypes.TEXT,
            allowNull: false
        },
        images:{
            type: dataTypes.STRING(45),
            allowNull: true
        },
        category_id:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        brand_id:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        stock:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    }
    const config = {
        tableName: "products",
        timestamps: false
    }


    const Product = sequelize.define(alias,cols,config);
    return Product;
}