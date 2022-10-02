var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/',function(req,res) {
  res.sendFile('/Users/varo/Documents/varocarras.github.io/views/index.html');
});

/* GET users listing. */
router.get('/command', function(req, res, next) {
  out = parseCommand(req)
  return res.status(200).send(out);
  // if(req.query.args == 'testi'){
  //   console.log('yess')
  //   return res.status(200).send('!Worked!!');
  // }else{
  //   return res.status(200).send('Not Worked!!');
  // }  // true
  // console.log(req.query.password === '2'); // true
  // let timerVar = setInterval(() => {
  //     clearInterval(timerVar)
  //     return res.status(200).send('Hello, world!');
  // }, 10000)
  
});

const parseCommand = (req) => {
  const command = req.query.command;
  const args = req.query.args;
  commandDict = {"login": logIn(args),"wack": wack(args)}
  return commandDict[command]
}

const logIn = (args) => {
  return 'It works!'
}

const wack = (args) => {
  return 'WACKED!';
}



module.exports = router;
