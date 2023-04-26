import axios from "axios";
const qs = require('qs')

export default async function mojoOrder(req, res) {
    if (req.method == "POST") {
        const { name, email, phone, amount, accessToken } = req.body
        const encodedParams = new URLSearchParams();

        encodedParams.set('buyer_name', name);
        encodedParams.set('email', email);
        encodedParams.set('phone', phone);
        encodedParams.set('amount', amount);

        encodedParams.set('allow_repeated_payments', 'false');
        encodedParams.set('send_email', 'true');
        encodedParams.set('purpose', `appointment`);
        encodedParams.set('redirect_url', 'https://slayitwithskin.com/payment');

        const options = {
            method: 'POST',
            url: 'https://api.instamojo.com/v2/payment_requests',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${accessToken}`,
                'content-type': 'application/x-www-form-urlencoded'
            },
            data: encodedParams
        };

        await axios
            .request(options)
            .then(function (response) {
                res.json(response.data)
                console.log(response.data);
                return
            })
            .catch(function (error) {
                console.log(error);
                res.json(err)
                return
            });

        // await axios.post(`https://api.instamojo.com/v2/payment_requests`, encodedParams, {
        //     headers: {
        //         'Accept': 'application/json',
        //         'Authorization': `Bearer ${accessToken}`,
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     }
        // }).then(response=>{
        //     res.json(response.data)
        //     return
        // }).catch(err=>{
        //     console.log(err)
        //     res.json(err)
        //     return
        // })

    }
    else {
        res.json({ message: `${req.method} Method Not Allowed` })
    }
}