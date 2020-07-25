const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/').all((req,res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send all the Leaderes to you!');
})

.post((req,res,next)=>{
    res.end('will add the Leader: '+req.body.name+'with details '+ req.body.description );
})

.put((req,res,next)=>{
    res.statusCode=403;
    res.end('Put Operation not supported on /Leaderes');
})

.delete((req,res,next)=>{
    res.end('Deleting all the Leaderes!');
});



leaderRouter.route('/:leaderId').all((req,res,next) =>{
    res.statusCode=200;
    res.setHeader('Content-type','text/plain');
    next();
})
.get((req,res, next) =>{
    res.end('Leader Router Id '+req.params.leaderId+' to You!');
})

.post((req,res, next) =>{
    res.statusCode=403;
    res.end('Post operation is not supported on /Leaderes/'+req.params.leaderId);
})

.put((req,res, next) =>{
    res.write('Updating the Leader: '+ req.params.leaderId+'\n');
    res.end('Will update the Leader: '+req.body.name+
    ' with details: '+req.body.description);
})

.delete((req,res, next) =>{
    res.end('Deleting Leader: '+req.params.leaderId);
});

module.exports = leaderRouter;