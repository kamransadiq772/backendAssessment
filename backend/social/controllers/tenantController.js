const Tenant = require('../db/modals/tenant')
const asyncHandler = require('express-async-handler')

const getAll = asyncHandler(async(req,res,next)=>{
    try {
        const tenant = await Tenant.query().select()
        res.status(200).json(tenant)
    } catch (error) {
        res.status(200)
        throw new Error(error)
    }
})
const getOne = asyncHandler(async(req,res,next)=>{
    try {
        const {id} = req.params
        const tenants = await Tenant.query().findById(id)
        res.status(200).json(tenants)
    } catch (error) {
        res.status(200)
        throw new Error(error)
    }
})
const insertOne = asyncHandler(async (req, res, next) => {
    try {
        const { tanant_name, address, city, state, country, zip_code, phone, web_url } = req.body
        if(!tanant_name||!web_url){
            throw new Error("Some Missing Fields are Required!")
        }
        const tenant = await Tenant.query().insert({
            tanant_name,address,city,state,country,zip_code,phone,web_url
        })
        res.status(200).json(tenant)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})
const updateOne = asyncHandler(async (req, res, next) => {
    try {
        const { id,tanant_name, address, city, state, country, zip_code, phone, web_url } = req.body
        if(!id||!tanant_name||!web_url){
            throw new Error("Some Missing Fields are Required!")
        }
        const tenant = await Tenant.query().findById(id).patch({
            tanant_name,address,city,state,country,zip_code,phone,web_url
        })
        res.status(200).json(tenant)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})
const deleteOne = asyncHandler(async(req,res,next)=>{
    try {
        const {id} = req.params
        const tenant = await Tenant.query().deleteById(id)
        res.status(200).json(tenant)
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