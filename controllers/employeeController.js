const Employee = require('../models/employee');

const employeeController = {};

// Index action to list all employees
employeeController.index = (req, res) => {
    Employee.find({})
        .then(employees => {
            res.render('employees/index', { employees });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error retrieving employees from database');
        });
};

// New action to render the form for creating a new employee
employeeController.new = (req, res) => {
    res.render('employees/new');
};

// Create action to add a new employee
employeeController.create = (req, res) => {
    Employee.create(req.body)
        .then(() => {
            res.redirect('/employees');
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error creating a new employee');
        });
};

// Edit action to render the form for updating an employee
employeeController.edit = (req, res) => {
    const id = req.params.id 
    Employee.findById(id)
        .then(employee => {
            res.render('employees/edit', { employee });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error retrieving employee for editing');
        });
};

// Update action to save the updated employee details
employeeController.update = (req, res) => {
    Employee.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(() => {
            res.redirect('/employees');
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error updating employee');
        });
};

// Delete action to remove an employee
employeeController.delete = (req, res) => {
    Employee.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect('/employees');
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error deleting employee');
        });
};

module.exports = employeeController;
