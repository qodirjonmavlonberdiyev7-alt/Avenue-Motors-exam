const {Schema, model} = require("mongoose")


const Brand = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        set: value => value.trim().toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
    },
    country : {
        type: String,
        required: true,
        trim: true
    }
},{
    timestamps: true
})


const BrandSchema = model("Brand", Brand)

module.exports = BrandSchema