import { mailOptions, transporter } from "../../config/nodemailer";

export default async function mailer(req, res) {
    const {method} = req
    const msg = req.body
    switch (method) {
        case 'POST':
            await transporter.sendMail({
                ...mailOptions,
                subject: `${msg.name} Has Booked An Appointment With You`,
                html:`<h1>${msg.name}</h1>
                <br>
                <p><b>Email: </b>${msg.email}</p>
                <p><b>Phone: </b>${msg.phone}</p>
                <p><b>Gender: </b>${msg.gender}</p>
                <p><b>Age: </b>${msg.age}</p><br>
                <p><b>Appointment Date: </b>${msg.date}</p>
                <p><b>Slots Booked: </b>${msg.slots}</p>
                <p><b>Description: </b>${msg.details}</p><br>
                <h2>Transaction Details</h2>
                <p><b>Order ID: </b>${msg.orderId}</p>
                <p><b>Payment ID: </b>${msg.paymentId}</p>
                `
            }).then(res.status(200).send('Booking was successful!'+` ${process.env.EMAIL}`+` ${process.env.EMAIL_PASSWORD}`)).catch(error=>res.status(400).json({error: error.message}))
            break;
    
        default:
            res.send(`${method} Method Not Allowed`)
            break;
    }
}
