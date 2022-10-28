const router = require('express').Router()
const {
    getAll,
    getOne,
    insertMany,
    insertOne,
    updateMany,
    updateOne,
    deleteMany,
    deleteOne
} = require('../controllers/userController')

router.route('/')
 .get(getAll)
 .post(insertOne)
 .patch(updateOne)
router.route('/:id')
.get(getOne)
.delete(deleteOne) 

module.exports = router