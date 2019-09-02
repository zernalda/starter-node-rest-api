var express = require('express');
var router = express.Router();
// var elasticsearch = require('elasticsearch');
// var client = new elasticsearch.Client({
//     host: 'localhost:9200'
// })

var workouts = [
    {
        id: 1,
        type: 'Weights',
        duration: 45,
        date: "02/09/2019"
    },
    {
        id: 2,
        type: 'Run',
        duration: 30,
        date: "02/09/2019"
    }
]
// router.use('/workouts', (req, res, next) =>  {
//     console.log(req.method, req.url);

//     res.setHeader('akses', 'httpd://localhost:4210')

//     next();
// }) 

router.use((req, res, next) =>  {
    console.log(req.method, req.url);
    next();
})

router.get('/workouts', (req, res) => {
    return res.status(200).send ({
      message: 'sukses',
      workouts: workouts  
    })
})

// router.get((req, res, status) => {
//     return res.status(200).send({
//         message: 'GEt sukses',
//         workouts: workouts
//     })
// });

router.post('/workouts', (req, res) => {
    if (! req.body.id) {
        return res.status(400).send({
            message: 'Id is Required'
        });
    }
    workouts.push(req.body);
    return res.status(200).send({
        message: 'POST workout call sukses '
    })
})

module.exports = router;