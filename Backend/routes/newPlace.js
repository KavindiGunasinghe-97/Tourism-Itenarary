const express = require('express')
const router = express.Router()
const NewPlace = require('../models/NewPlace')

// Getting all
router.get('/', async (req,res) => {
    try{
        const newPlaces = await NewPlace.find()
        res.json(newPlaces)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:id', getNewPlace , (req,res) => {
    res.json(res.newPlace)
})

// Creating One
router.post('/', async (req,res) => {
    const newPlace = new NewPlace({
        txtName: req.body.txtName,
        txtEmail: req.body.txtEmail,
        txtHighlight: req.body.txtHighlight,
        txtMsg: req.body.txtMsg,
        txtPhone: req.body.txtPhone,
        txtPrice: req.body.txtPrice,
        txtRoute: req.body.txtRoute,
        txtDays: req.body.txtDays
    })

    try{
        const newNewPlace = await newPlace.save()
        res.status(201).json(newNewPlace)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
// Updating One
router.patch('/:id', getNewPlace , async (req,res) => {
    if (req.body.txtName != null) {
        res.newPlace.txtName = req.body.txtName
    }
    if (req.body.txtEmail != null) {
        res.newPlace.txtEmail = req.body.txtEmail
    }
    if (req.body.txtHighlight != null) {
        res.newPlace.txtHighlight = req.body.txtHighlight
    }
    if (req.body.txtMsg != null) {
        res.newPlace.txtMsg = req.body.txtMsg
    }
    if (req.body.txtPhone != null) {
        res.newPlace.txtPhone = req.body.txtPhone
    }
    if (req.body.txtPrice != null) {
        res.newPlace.txtPrice = req.body.txtPrice
    }
    if (req.body.txtRoute != null) {
        res.newPlace.txtRoute = req.body.txtRoute
    }
    if (req.body.txtDays != null) {
        res.newPlace.txtDays = req.body.txtDays
    }
    try {
        const updatedNePlace = await res.newPlace.save()
        res.status(200).json(updatedNePlace)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Update One Using PUT
router.put('/:id', function(req,res,next){
    NewPlace.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        NewPlace.findOne({_id:req.params.id}).then(function(newPlace){
            res.send(newPlace);
        })
    });
});

// Deleting One
router.delete('/:id', getNewPlace , async (req,res) => {
    try{
        await res.newPlace.remove()
        res.status(200).json({message: 'Deleted Place'})
    } catch (err) {
        res.status(500).json({message : err.message})
    }
})

async function getNewPlace (req, res, next) {
    let newPlace
    try {
        newPlace = await NewPlace.findById(req.params.id)
        if ( newPlace == null ) {
            return res.status(404).json({ message: 'Cannot find Itinerary' })
        }
    } catch (err) {
        return res.status(500).json({ message : err.message})
    }

    res.newPlace = newPlace
    next()
}


module.exports = router
