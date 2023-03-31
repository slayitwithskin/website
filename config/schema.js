import mongoose, { model } from "mongoose";

const AppointmentSchema = new mongoose.Schema({
    fulldate: String,
    bookings: Array
})
const AppointmentModel = mongoose.models.Appointment || mongoose.model('Appointment', AppointmentSchema)

const CouponSchema = new mongoose.Schema({
    code: String,
    value: Number,
    type: String
})
const CouponModel = mongoose.models.Coupon || mongoose.model('Coupon', CouponSchema)

export {CouponModel}
export default AppointmentModel