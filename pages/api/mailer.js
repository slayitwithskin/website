import { mailOptions, transporter } from "../../config/nodemailer";
import appointments from "./appointments";
import updateslots from "./updateslots";

export default async function mailer(req, res) {
    const { method } = req
    const { name, email, phone, gender, age, date, slots, details, orderId, paymentId } = req.body
    const recvDate = new Date(date)
    const fullDate = `${recvDate.getDate()}` + `${recvDate.getMonth() + 1}` + `${recvDate.getFullYear()}`
    switch (method) {
        case 'POST':
            await transporter.sendMail({
                ...mailOptions,
                subject: `${name} Has Booked An Appointment With You`,
                html: `<h1>${name}</h1>
                <br>
                <p><b>Email: </b>${email}</p>
                <p><b>Phone: </b>${phone}</p>
                <p><b>Gender: </b>${gender}</p>
                <p><b>Age: </b>${age}</p><br>
                <p><b>Appointment Date: </b>${date}</p>
                <p><b>Slots Booked: </b>${slots}</p>
                <p><b>Description: </b>${details}</p><br>
                <h2>Transaction Details</h2>
                <p><b>Order ID: </b>${orderId}</p>
                <p><b>Payment ID: </b>${paymentId}</p>
                `
            }).then(async () => {
                const slotsUpdated = await fetch("https://siws.vercel.app/updateslots", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '*'
                    },
                    body: JSON.stringify({
                        fulldate: fullDate,
                        slots
                    })
                })
                if (slotsUpdated.status === 200) res.status(200).send('Bookings were added!')
            }).catch(error => res.status(400).json({ error: error.message }))
            break;

        default:
            res.send(`${method} Method Not Allowed`)
            break;
    }
}
