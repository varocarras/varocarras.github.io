var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/command', function(req, res, next) {
    console.log(req.query.commandname === 'parse');  // true
    console.log(req.query.commandarg1 === '2'); // true
    
    return res.status(200).send('Hello, world!');
    
});

module.exports = router;