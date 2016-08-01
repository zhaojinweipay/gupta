'use strict';
var _admin = require('../controllers/admin');


module.exports = function (app) {
    app.post('/admin/login', _admin.login);
    app.get('/admin/api/sellers', _admin.get_sellers);
    app.get('/admin/api/jobs', _admin.get_jobs);
    app.get('/admin/api/seller/:id', _admin.get_seller);
    app.post('/admin/api/filter/', _admin.edit_filter);
    app.delete('/admin/api/filter/:data', _admin.delete_filter);
    app.post('/admin/api/filter/add', _admin.create_filter);
    
    app.get('/admin/api/all/freelancer', _admin.all_freelancer);
    app.get('/admin/api/all/users', _admin.all_users);
    app.get('/admin/api/all/projects', _admin.all_projects);
    app.post('/admin/api/users', _admin.change_user);
    app.post('/admin/api/freelancers', _admin.change_freelancer);
    app.delete('/admin/api/freelancers', _admin.delete_freelancers);
    app.delete('/admin/api/users', _admin.delete_users);
    app.delete('/admin/api/project', _admin.delete_projects);


    app.post('/admin/api/locations/', _admin.edit_location);
    app.post('/admin/api/locations/add', _admin.add_location);
    app.delete('/admin/api/locations/:data', _admin.delete_location);


    app.post('/admin/api/registration/approve/:id', _admin.approve_registration);
    app.post('/admin/api/registration/reject/:id', _admin.reject_registration);
    
    app.post('/admin/api/jobs/approve', _admin.approve_job);
    app.post('/admin/api/jobs/reject', _admin.reject_job);
    
    app.get('/admin/api/business_accounts', _admin.business_accounts);
    
    app.post('/admin/api/business_accounts/approve/:id', _admin.approve_account);
    app.post('/admin/api/business_accounts/reject/:id', _admin.reject_account);
    
};
