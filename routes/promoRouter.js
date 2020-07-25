const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.get(`/`, (req, res) => {
    res.end('Will send the all promotions to you');
  });

promoRouter.post('/',(req, res) =>{
    res.end('Will add new promotion with name '+req.body.name +'With Discount of '+req.body.percent+'%');
});

promoRouter.put('/',(req, res) =>{
    res.statusCode= 403;
    res.end('No updates allowed');
});

promoRouter.delete(`/`,(req,res) =>{
    res.end('Deleting all the Promotions!');
});



promoRouter.get('/:promoId', (req, res) => {
    res.end('Promotion with Id'+req.params.promoId+'will sned back to you');
  });

promoRouter.post('/:promoId',(req, res) =>{
    res.statusCode= 403;
    res.end('Post is not allowed');
});

promoRouter.put('/:promoId',(req, res) =>{
    res.write('Updating Promo with Id: '+req.params.promoId);
    res.end(' Will update the Promo: '+req.body.name+
    ' with percent: '+req.body.percent);
});

promoRouter.delete(`/:promoId`,(req,res) =>{
    res.end('Deleting promo with Id '+req.params.promoId);
});

module.exports = promoRouter;