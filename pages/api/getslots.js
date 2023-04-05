import Main from "../../config/connection";
import appointmentModel from "../../config/schema";


export default async function (req, res) {
    const { fulldate } = req.body
    if (req.method == 'POST') {
        Main().catch(error => console.error(error))
        const result = await appointmentModel.find({ fulldate: fulldate })
        if (result.length == 0 || !result) {
            res.status(204)
            return
        }
        const bookedSlots = result[0].bookings
        res.status(200).send(bookedSlots)
    }
    else res.send(`${req.method} Method Not Allowed`)
}