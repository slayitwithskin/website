import axios from "axios"

export default function async(req, res) {
    const now = new Date()
    const { orderAmount, phone, email } = req.body
    if (req.method == 'POST') {
        let orderId = `order_${now.getTime()}`
        axios.post(`https://sandbox.cashfree.com/pg/orders`, {
            order_id: orderId,
            order_amount: orderAmount,
            order_currency: 'INR',
            customer_details: {
                customer_id: phone,
                customer_email: email,
                customer_phone: phone,
            }
        }, {
            headers: {
                'x-client-id': 'TEST355450ff0efee99997add555ba054553',
                'x-client-secret': 'TEST41aad472314645a1ac4c46abbbd57a7f4d691e0b',
                'x-api-version': '2022-09-01',

            }
        }).then(result => {
            res.status(200).json(result.data)
        }).catch(err => {
            res.status(500).json({ message: err.message })
        })
    }
    else {
        return res.status(403).json({ "message": "Method not allowed" })
    }
}