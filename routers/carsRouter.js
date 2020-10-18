const express = require('express');
const database = require('../data/config');
const {validateUserId} = require('../middleware/carsMiddleware');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        const cars = await database.select('*').from('car-dealer');
        return res.status(200).json(cars);
    } catch(error){
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        return res.status(200).json(await validateUserId(req.params.id))
    } catch(error){
        next(error)
    }
})



module.exports = router;