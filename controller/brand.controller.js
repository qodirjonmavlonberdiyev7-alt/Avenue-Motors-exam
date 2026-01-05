const BrandSchema = require("../schema/brand.schema")
const CustomErrorHandler = require("../utils/custom-error-handler")


const getAllBrands = async (req, res, next) => {
    try {
        const brands = await BrandSchema.find().sort({ name: 1 })
        res.status(200).json(brands)
    } catch (error) {
        next(error)
    }
}

const getOneBrand = async (req, res, next) => {
    try {
        const {id} = req.params

        const foundedBrand = await BrandSchema.findById(id)
        if(!foundedBrand){
            throw CustomErrorHandler.NotFound("Brand not found")
        }
        res.status(200).json(foundedBrand)
    } catch (error) {
        next(error)
    }
}

const addBrand = async(req, res, next) => {
    try {
        const {name, country} = req.body
        await BrandSchema.create({name,country})
        
        res.status(201).json({
            message: "Added new brand"
        })

    } catch (error) {
        next(error)
    }
}


const updateBrand = async(req, res, next) => {
    try {
        const {id} = req.params
        const {name, country} = req.body
        const foundedBrand = await BrandSchema.findById(id)
        if(!foundedBrand){
            throw CustomErrorHandler.NotFound("Brand not found")
        }
        await BrandSchema.findByIdAndUpdate(id, {
            name,
            country
        }, { new: true })

        res.status(200).json({
            message: "Brand updated"
        })
    } catch (error) {
        next(error)
    }
}


const deleteBrand = async(req, res, next) => {
    try {
        const {id} = req.params
        const foundedBrand = await BrandSchema.findById(id)
        if(!foundedBrand){
            throw CustomErrorHandler.NotFound("Brand not found")
        }
        await BrandSchema.findByIdAndDelete(id)
        res.status(200).json({
            message: "Brand deleted"
        })
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAllBrands,
    getOneBrand,
    updateBrand,
    addBrand,
    deleteBrand
}
