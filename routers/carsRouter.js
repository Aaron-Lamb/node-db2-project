const express = require('express');
const database = require('../data/config');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        const cars = await database.select('*').from('car-dealer');
        return res.status(200).json(cars);
    } catch(error){
        next(error)
    }
})

module.exports = router;