const AutomobileSchema = require("../schema/cars.schema")
const CustomErrorHandler = require("../utils/custom-error-handler")


const getAllCars = async (req, res, next) => {
    try {
        const automobiles = await AutomobileSchema.find()
        res.status(200).json(automobiles)
    }catch(error){
        next(error)
    }
}

const addCar = async (req, res, next) => {
    try {
       const {automobile_name,brend_name,horse_power,year,transmission,seats,price,country,color,fuel_type} = req.body
       await AutomobileSchema.create({automobile_name,brend_name,horse_power,year,transmission,seats,price,country,color,fuel_type})

       res.status(201).json({
        message: "Added new automobile"
       })
    }catch(error){
        next(error)
    }
}

const getCarsByBrand = async (req, res, next) => {
    try {
        const { brandId } = req.params
        const cars = await AutomobileSchema.find({ brand: brandId }).populate("brand")
        res.status(200).json(cars)
    } catch (error) {
        next(error)
    }
}

const getOneCar = async (req, res, next) => {
    try{
        const {id} = req.params

    const automobile = await AutomobileSchema.findById(id).populate("brand")
    if(!automobile){
        throw CustomErrorHandler.NotFound("Automobile not found")
    }

    res.status(200).json(automobile)
    }catch(error){
        next(error)
    }
}


const updateCar = async (req, res, next) => {
   try{
     const {id} = req.params
    
    const {price, distance, tonirovka} = req.body
    const foundedCar = await AutomobileSchema.findById(id)

    if(!foundedCar){
        throw CustomErrorHandler.NotFound("Automobile not found")
    }
    await AutomobileSchema.findByIdAndUpdate(id, 
       {price, distance}, { new: true }
    )

    res.status(200).json({
        message: "Automobile updated"
    })
   }catch(error){
    next(error)
   }
}


const deleteCar = async (req, res, next) => {
    try{
        const {id} = req.params

    const automobile = await AutomobileSchema.findById(id)

    if(!automobile){
        throw CustomErrorHandler.NotFound("Automobile not found")
    }

    await AutomobileSchema.findByIdAndDelete(id)

    res.status(200).json({
        message: "Automobile deleted"
    })
    }catch(error){
        next(error)
    }
}


module.exports = {
    getAllCars,
    getOneCar,
    addCar,
    updateCar,
    deleteCar,
    getCarsByBrand
}