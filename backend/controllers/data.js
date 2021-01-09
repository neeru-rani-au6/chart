const Data = require('../models/data')

module.exports = {
    addData: async (req, res, next) => {
        try {
            let errors = {}
            const {_id} = req.user
            const { name, email, value, criteria, activeDay, priceSignal  } = req.body;
            const newData = await new Data({
                name,
                email,
                value,
                criteria,
                activeDay,
                priceSignal,
                createdBy: _id
            })
            await newData.save()
            return res.status(201).json({
                success: true,
                message: "Data addedd successfully",
                result: newData
            })
        }
        catch (err) {
            console.log("Error in addData", err.message)
            return res.status(400).json({ message: `Error in addData ${err.message}` })
        }
    },
    updateData: async (req, res, next) => {
        try {
            let errors = {}
            const { id } = req.params
            const { name, value, criteria, activeDay, priceSignal } = req.body
            const data = await Data.findById(id)
            if (!data) {
                errors.data = "Data not found"
                return res.status(404).json(errors)
            }
            if (name) {
                data.name = name
            }
            if (value) {
                data.value = value
            }
            if (criteria) {
                data.criteria = criteria
            }
            if (activeDay) {
                data.activeDay = activeDay
            }
            if (priceSignal) {
                data.priceSignal = priceSignal
            }
            await data.save()
            return res.status(200).json({
                success: true,
                message: "Data updated successfully",
                result: data
            })
        }
        catch (err) {
            console.log("Error in updateUser", err.message)
            return res.status(400).json({ message: `Error in updateUser ${err.message}` })
        }
    },
    getData: async (req, res, next) => {
        try {
            let errors = {}
            const { _id } = req.user
            const allData = await Data.find({ createdBy: _id }).sort({ createdAt: -1 })
            return res.status(200).json({
                success: true,
                message: `${allData.length} data found `,
                result: allData
            })
        }
        catch (err) {
            console.log("Error in getData", err.message)
            return res.status(400).json({ message: `Error in getData ${err.message}` })
        }
    },
    deleteData: async (req, res, next) => {
        try {
            let errors = {}
            const { id } = req.params
            console.log("id",id)
            const data = await Data.findByIdAndRemove(id)
            if (!data) {
                errors.data = "Data not found"
                return res.status(404).json(errors)
            }
            return res.status(200).json({
                success: true,
                message: "Data deleted successfully",
                result: data
            })
        }
        catch (err) {
            console.log("Error in deleteUser", err.message)
            return res.status(400).json({ message: `Error in deleteUser ${err.message}` })
        }
    }
}
