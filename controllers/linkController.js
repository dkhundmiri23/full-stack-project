const Link = require('../models/link');

const linkController = {};

// Index action to list all links
linkController.index = (req, res) => {
    Link.find({})
        .then(links => {
            res.render('links/index', { links });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error retrieving links from database');
        });
};

// New action to render the form for creating a new link
linkController.new = (req, res) => {
    res.render('links/new');
};

// Create action to add a new link
linkController.create = (req, res) => {
    Link.create(req.body)
        .then(() => {
            res.redirect('/links');
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error creating a new link');
        });
};

// Edit action to render the form for updating a link
linkController.edit = (req, res) => {
    const id = (req.params.id)

    Link.findById(id)
        .then(link => {
            res.render('links/edit', { link });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error retrieving link for editing');
        });
};

// Update action to save the updated link details
linkController.update = (req, res) => {
    Link.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(() => {
            res.redirect('/links');
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error updating link');
        });
};

// Delete action to remove a link
linkController.delete = (req, res) => {
    Link.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect('/links');
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error deleting link');
        });
};

module.exports = linkController;
