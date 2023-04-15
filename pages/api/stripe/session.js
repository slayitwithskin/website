const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { price, slots } = req.body;

        try {
            const product = await stripe.products.create({
                name: 'New Appointment',
                description: 'Online appointment with Slayitwithskin',
                images: ['https://slayitwithskin.com/logo.png'],
            });
            const stripePrice = await stripe.prices.create({
                product: product.id,
                unit_amount: price * 100,
                currency: 'inr',
            });
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [
                    {
                        // description: 'Online appointment with Slayitwithskin',
                        price: stripePrice.id,
                        quantity: 1,
                    }
                ],
                mode: 'payment',
                success_url: `${req.headers.origin}/payment/success?status=success`,
                cancel_url: `${req.headers.origin}/payment/failed?status=failed`,
            });

            res.json({ id: session.id });

        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}