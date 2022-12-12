import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    fulldate: String,
    bookings: Array
})

const appointmentModel = mongoose.model('Appointment', appointmentSchema)

export default appointmentModel