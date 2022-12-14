import Main from "../../config/connection";
import appointmentModel from "../../config/schema";


export default async function (req, res) {
    const { fulldate } = req.body
    if (req.method === 'POST') {
        Main().catch(error => console.error(error))
        const result = await appointmentModel.find({ fulldate: fulldate })
        if (result[0]) {
            const bookedSlots = result[0].bookings
            res.status(200).send(bookedSlots)
        }
        else {
            res.status(404).send("No bookings for this date")
        }
    }
    else res.send(`${req.method} Method Not Allowed`)
}