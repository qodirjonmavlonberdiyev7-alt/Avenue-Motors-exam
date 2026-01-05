
const {Router} = require("express")
const { getAllCars, getOneCar, addCar, updateCar, deleteCar, getCarsByBrand } = require("../controller/automobile.controller")

const automobileRouter = Router()

automobileRouter.get("/get_all_cars", getAllCars)
automobileRouter.get("/get_one_car/:id", getOneCar)
automobileRouter.get("/brand/:brandId", getCarsByBrand)
automobileRouter.post("/add_car", addCar)
automobileRouter.put("/update_car/:id", updateCar)
automobileRouter.delete("/delete_car/:id", deleteCar)


module.exports = automobileRouter