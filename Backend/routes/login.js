const express = require('express');
const router = express.Router();
const AdminUser = require('../models/AdminUser');


// Admin Login Verfication
router.post('/admin', function (req,res,next){
    try{
        AdminUser.findOne(req.body).then(function(adminUser){
            if(adminUser){
                res.status(200).json(adminUser);
            }
            else{
                res.status(404).json({"message":"no user found"});
            }
        });
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


module.exports = router;
