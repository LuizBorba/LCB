'use stric';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.post = (req, res, next) => {
    var product = new Product(req.body);
    product
    .save()
    .them(x => {
        res.status(201).send({
            massage: 'Produto cadastrado com sucesso!'
        });

    }).catch(e => {
        res.status(400).send({
            massage: 'Falha ao cadastrar o produto',
            data: e
        });
    });

};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(201).send(req.body);
};
