'use strict';
var index = require('../controllers/index');


module.exports = function (app) {
    var auth = require('./middlewares/auth');
    app.get('/', index.index);
    app.get('/admin', index.admin);
    app.get('/create-filter', index.create_filter)
    app.get('/get-content', index.get_content)
//    app.get('/unit-tests', index.unit_tests);
//    app.get('/run-tests', index.run_test);
};

