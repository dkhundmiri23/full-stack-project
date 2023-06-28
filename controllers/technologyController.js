const Technology = require('../models/technology');

const technologyController = {};

// Index action to list all technologies
technologyController.index = (req, res) => {
    Technology.find({})
        .then(technologies => {
            res.render('technologies/index', { technologies });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error retrieving technologies from database');
        });
};

// New action to render the form for creating a new technology
technologyController.new = (req, res) => {
    res.render('technologies/new');
};

// Create action to add a new technology
technologyController.create = (req, res) => {
    Technology.create(req.body)
        .then(() => {
            res.redirect('/technologies');
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error creating a new technology');
        });
};
technologyController.edit = (req, res) => {
    const id = req.params.id;

    Technology.findById(id)
        .then(technology => {
            // Note how the view is specified here
            res.render('technologies/edit', { technology }); // Specify the subdirectory
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error retrieving technology');
        });
};

// Update action to save the updated technology details
technologyController.update = (req, res) => {
    Technology.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(() => {
            res.redirect('/technologies'); // Redirect to the technologies list
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error updating technology');
        });
};

// Delete action to remove a technology
technologyController.delete = (req, res) => {
    Technology.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect('/technologies');
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error deleting technology');
        });
};

module.exports = technologyController;
