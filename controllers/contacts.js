const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db('contacts').collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

const getSingle = async (req, res) => {
    const contactId = new ObjectId(req.params.id)
    const result = await mongodb.getDatabase().db('contacts').collection('contacts').find({_id:contactId});
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]);
    });
};

const createUser = async (req, res) => {
    const contact = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        favoriteColor : req.body.favoriteColor,
        birthday : req.body.birthday
        };
    const response = await mongodb.getDatabase().db('contacts').collection('contacts').insertOne(contact);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error courred while updating the user.')
    }
};

const updateUser = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const contact = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        favoriteColor : req.body.favoriteColor,
        birthday : req.body.birthday
        };
    const response = await mongodb.getDatabase().db('contacts').collection('contacts').replaceOne({_id:contactId}, contact);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error courred while updating the user.')
    }
};

const deleteUser = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db('contacts').collection('contacts').remove({_id:contactId}, true);
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error courred while updating the user.')
    }
};

module.exports = {
    getAll,
    getSingle,
    createUser,
    updateUser,
    deleteUser
}