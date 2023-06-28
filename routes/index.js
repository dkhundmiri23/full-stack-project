var express = require('express');
var router = express.Router();
const employeeController = require('../controllers/employeeController');
const linkController = require('../controllers/linkController');
const technologyController = require('../controllers/technologyController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/employees', employeeController.index);
router.get('/links', linkController.index);
router.get('/technologies', technologyController.index);

// employee routes
router.get('/employees', employeeController.index);
router.get('/employees/new', employeeController.new);
router.post('/employees', employeeController.create);
router.get('/employees/edit/:id', employeeController.edit);
router.post('/employees/update/:id', employeeController.update);
router.post('/employees/delete/:id', employeeController.delete);

// link routes
router.get('/links', linkController.index);
router.get('/links/new', linkController.new);
router.post('/links', linkController.create);
router.get('/links/edit/:id', linkController.edit);  
router.post('/links/update/:id', linkController.update);
router.post('/links/delete/:id', linkController.delete);

// Technology routes
router.get('/technologies', technologyController.index);
router.get('/technologies/new', technologyController.new);
router.post('/technologies', technologyController.create);
router.get('/technologies/edit/:id', technologyController.edit);
router.post('/technologies/update/:id', technologyController.update);
router.post('/technologies/delete/:id', technologyController.delete);


module.exports = router;

