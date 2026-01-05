
const {Router} = require("express")
const { getAllCars, getOneCar, addCar, updateCar, deleteCar } = require("../controller/automobile.controller")

const automobileRouter = Router()

automobileRouter.get("/get_all_cars", getAllCars)
automobileRouter.get("/get_one_car/:id", getOneCar)
automobileRouter.post("/add_car", addCar)
automobileRouter.put("/update_car/:id", updateCar)
automobileRouter.delete("/delete_car/:id", deleteCar)


module.exports = automobileRouter