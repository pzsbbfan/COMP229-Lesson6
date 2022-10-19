//route for book
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

let bookController = require('../controllers/book')


//helper function for guard purposes
function requireAuth(req,res,next)
{
    //check if the user if logged in
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}

/*Get Route for book list page - READ Operation */
router.get('/',bookController.displayBookList);


/*Get Route for displaying the Add page - CREATE Operation */
router.get('/add',requireAuth, bookController.displayAddPage);

/*Get Route for displaying the processing Add page - CREATE Operation */
router.post('/add',requireAuth, bookController.processAddpage);

/*Get Route for displaying the Edit page - CREATE Operation */
router.get('/edit/:id',requireAuth, bookController.displayEditPage);

/*Get Route for displaying the processing Edit page - CREATE Operation */
router.post('/edit/:id',requireAuth,bookController.processEditPage);

/*Get to perform deletion - DELETE Operation */
router.get('/delete/:id',requireAuth, bookController.performDelete);


module.exports = router;