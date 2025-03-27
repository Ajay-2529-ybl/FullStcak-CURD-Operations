const Product = require('../models/product.model');

// Create new product
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
        return;
    }

    // Create a Product
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    });

    // Save Product in the database
    Product.create(product, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Product."
            });
        } else {
            res.send(data);
        }
    });
};

// Retrieve all Products
exports.findAll = (req, res) => {
    Product.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving products."
            });
        } else {
            res.send(data);
        }
    });
};

// Find a single Product
exports.findOne = (req, res) => {
    Product.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: 'Product not found with id ${req.params.id}'
                });
            } else {
                res.status(500).send({
                    message: 'Error retrieving Product with id ${req.params.id}'
                });
            }
        } else {
            res.send(data);
        }
    });
};

// Update a Product
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
        return;
    }

    Product.updateById(
        req.params.id,
        new Product(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: 'Product not found with id ${req.params.id}'
                    });
                } else {
                    res.status(500).send({
                        message: 'Error updating Product with id ${req.params.id}'
                    });
                }
            } else {
                res.send(data);
            }
        }
    );
};

// Delete a Product
exports.delete = (req, res) => {
    Product.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: 'Product not found with id ${req.params.id}'
                });
            } else {
                res.status(500).send({
                    message: 'Could not delete Product with id ${req.params.id}'
                });
            }
        } else {
            res.send({ message: "Product was deleted successfully!" });
        }
    });
};