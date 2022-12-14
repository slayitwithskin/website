import Main from "../../config/connection";
import appointmentModel from "../../config/schema";

export default async function (bookingDate, slots) {
    Main().catch(error => console.error(error))
    // const create = new appointmentModel({
    //     fulldate: bookingDate,
    //     bookings: slots.split(","),
    // })
    try {
        const create = appointmentModel.updateOne(
            { fulldate: bookingDate },
            {
                $push: {
                    bookings: slots.split(",")
                }
            },
            {
                upsert: true,
                new: true
            }
        )
        console.log(create)
        console.log("Booking Updated!")
    } catch (error) {
        console.log(error);
        console.log("Booking was not updated in the database!")
    }
    // create.save().then(console.log("New Booking Added!"))

}