const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { cart } = req.body;

        try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [{
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            images: ['https://slayitwithskin.com/logo.png'],
                            name: 'Online Appointment',
                        },
                        unit_amount: cart.price * 100,
                    },
                    description: 'New appointment from '+cart.name,
                    quantity: cart.slots
                }
                ],
                mode: 'payment',
                success_url: `${req.headers.origin}/payment/success`,
                cancel_url: `${req.headers.origin}/payment/failed`,
            });

            res.redirect(303, session.url);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}