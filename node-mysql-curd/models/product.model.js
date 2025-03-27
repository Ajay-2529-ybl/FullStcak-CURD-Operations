const sql = require('../config/db.config');

const Product = function(product) {
    this.name = product.name;
    this.price = product.price;
    this.description = product.description;
};

// Create a new product
Product.create = (newProduct, result) => {
    sql.query("INSERT INTO products SET ?", newProduct, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, { id: res.insertId, ...newProduct });
    });
};

// Get all products
Product.getAll = (result) => {
    sql.query("SELECT * FROM products", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    });
};

// Get product by ID
Product.findById = (productId, result) => {
    sql.query("SELECT * FROM products WHERE id = ?", [productId], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            result(null, res[0]);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};

// Update product
Product.updateById = (id, product, result) => {
    sql.query(
        "UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?",
        [product.name, product.price, product.description, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { id: id, ...product });
        }
    );
};

// Delete product
Product.remove = (id, result) => {
    sql.query("DELETE FROM products WHERE id = ?", [id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }
        result(null, res);
    });
};

module.exports = Product;