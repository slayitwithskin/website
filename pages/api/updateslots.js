import mongoose from "mongoose";
import Main from "../../config/connection";
import appointmentModel from "../../config/schema";

export default async function (bookingDate, slots) {
    Main().catch(error => console.error(error))
    const create = new appointmentModel({
        fulldate: bookingDate,
        bookings: slots.split(","),
    })
    create.save().then(console.log("New Booking Added!"))

}