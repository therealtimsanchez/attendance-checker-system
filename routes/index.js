var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var connectionstring = "mongodb://TimTest:rangers14@ds129315.mlab.com:29315/timtest";
mongoose.connect('connectionstring', { useMongoClient: true });

mongoose.Promise = global.Promise;

var studentSchema = new mongoose.Schema({
    buffID : String,
    firstName: String,
    lastName: String
});


var student = mongoose.model('Student', studentSchema);

router.get('/addrandomstudent', function (req, res, next)
{
    
var rand = new student({
    buffID: '976273',
    firstName: 'Timothy',
    lastName: 'Sanchez'

});
rand.save(function(err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('The student is saved in the database');
            }
  
});
    
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/greeting', function(req, res, next){
   res.send("Hello, I greet you"); 
});

router.get('/greeting2', function(req, res, next){
   res.send("Hello, I greet you again Timothy"); 
});

module.exports = router;
