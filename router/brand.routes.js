const {Router} = require("express")
const { getAllBrands, getOneBrand, addBrand, updateBrand, deleteBrand } = require("../controller/brand.controller")


const brandRouter = Router()

brandRouter.get("/get_all_brands", getAllBrands)
brandRouter.get("/get_one_brand/:id", getOneBrand)
brandRouter.post("/add_brand", addBrand)
brandRouter.put("/update_brand/:id", updateBrand)
brandRouter.delete("/delete_brand/:id", deleteBrand)

module.exports = brandRouter