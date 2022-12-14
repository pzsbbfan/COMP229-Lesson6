let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

let passport = require('passport');
let orderController = require('../controllers/order');

//helper function for guard purposes
function requireAuth(req,res,next)
{
    //check if the user if logged in
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}

/* GET Order List page --READ Operation */
router.get('/',orderController.displayOrderList);

// POST route for processing the add order page
router.post('/add',orderController.processAddPage);

/*POST Request- Update the database with data from the Edit Order page*/
router.post('/edit/:id',passport.authenticate('jwt',{session:false}),orderController.processEditPage);

/*GET Request- perform the delete Order Action*/
router.get('/delete/:id',passport.authenticate('jwt',{session:false}),orderController.performDelete);

module.exports = router;