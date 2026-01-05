const AutomobileSchema = require("../schema/cars.schema")


const getAllCars = async (req, res) => {
    try {
        const automobiles = await AutomobileSchema.find()
        res.status(200).json(automobiles)
    }catch(error){
        console.log(error.message);
    }
}

const addCar = async (req, res) => {
    try {
       const {automobile_name,brend_name,horse_power,year,transmission,seats,price,country,color,fuel_type} = req.body
       await AutomobileSchema.create({automobile_name,brend_name,horse_power,year,transmission,seats,price,country,color,fuel_type})

       res.status(201).json({
        message: "Added new automobile"
       })
    }catch(error){
        console.log(error.message);
    }
}

const getOneCar = async (req, res) => {
    try{
        const {id} = req.params

    const automobile = await AutomobileSchema.findById(id)
    if(!automobile){
        throw new Error("Automobile not found")
    }

    res.status(200).json(automobile)
    }catch(error){
        console.log(error.message);
    }
}


const updateCar = async (req, res) => {
   try{
     const {id} = req.params
    
    const {price} = req.body
    const foundedCar = await AutomobileSchema.findById(id)

    if(!foundedCar){
        throw new Error("Automobile not found")
    }
    await AutomobileSchema.findByIdAndUpdate(id, 
       {price} 
    )

    res.status(200).json({
        message: "Automobile updated"
    })
   }catch(error){
    console.log(error.message);
   }
}


const deleteCar = async (req, res) => {
    try{
        const {id} = req.params

    const automobile = await AutomobileSchema.findById(id)

    if(!automobile){
        throw new Error("Automobile not founded")
    }

    await AutomobileSchema.findByIdAndDelete(id)

    res.status(200).json({
        message: "Automobile deleted"
    })
    }catch(error){
        console.log(error.message);
    }
}


module.exports = {
    getAllCars,
    getOneCar,
    addCar,
    updateCar,
    deleteCar
}