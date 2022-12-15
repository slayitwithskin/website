import mongoose, { model } from "mongoose";

const AppointmentSchema = new mongoose.Schema({
    fulldate: String,
    bookings: Array
})
const AppointmentModel = mongoose.models.Appointment || mongoose.model('Appointment', AppointmentSchema)

export default AppointmentModel