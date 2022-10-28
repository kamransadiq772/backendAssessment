const User = require('../db/modals/user')
const Tenant = require('../db/modals/tenant')
const asyncHandler = require('express-async-handler')

const getAll = asyncHandler(async(req,res,next)=>{
    try {
        const users = await User.query().select()
        res.status(200).json(users)
    } catch (error) {
        res.status(200)
        throw new Error(error)
    }
})
const getOne = asyncHandler(async(req,res,next)=>{
    try {
        const {id} = req.params
        const users = await User.query().findById(id)
        res.status(200).json(users)
    } catch (error) {
        res.status(200)
        throw new Error(error)
    }
})

const insertOne = asyncHandler(async (req, res, next) => {
    try {
        const { first_name, last_name, department, designation, tanant_id, image_url, city, country, bio, social_links } = req.body
        if (!first_name || !department || !designation || !tanant_id || !bio) {
            throw new Error("Some Required Fields Are Missing.")
        }
        const tenant = await Tenant.query().findById(tanant_id);
        if (!tenant) {
            throw new Error("Invalid Tenant")
        }
        const user = await User.query().insert({
            first_name, last_name, department, designation, tanant_id, image_url, city, country, bio,social_links
        })
        res.status(200).json(user)

    } catch (error) {
        res.status(400)
        throw new Error(error)
    }

})
const updateOne = asyncHandler(async (req, res, next) => {
    try {
        const { id,first_name, last_name, department, designation, tanant_id, image_url, city, country, bio, social_links } = req.body
        if (!id||!first_name || !department || !designation || !tanant_id || !bio) {
            throw new Error("Some Required Fields Are Missing.")
        }
        const tenant = await Tenant.query().findById(tanant_id);
        if (!tenant) {
            throw new Error("Invalid Tenant")
        }
        const user = await User.query().findById(id).patch({
            first_name, last_name, department, designation, tanant_id, image_url, city, country, bio,social_links
        })
        res.status(200).json(user)

    } catch (error) {
        res.status(400)
        throw new Error(error)
    }

})
const deleteOne = asyncHandler(async(req,res,next)=>{
    try {
        const {id} = req.params
        const users = await User.query().deleteById(id)
        res.status(200).json(users)
    } catch (error) {
        res.status(200)
        throw new Error(error)
    }
})
const insertMany = () => { }
const updateMany = () => { }
const deleteMany = () => { }

module.exports = {
    getAll,
    getOne,
    insertOne,
    insertMany,
    updateOne,
    updateMany,
    deleteOne,
    deleteMany
}