import axios from "axios";

export default async function mojoToken(req, res) {
    if (req.method == "POST") {

        const encodedParams = new URLSearchParams();
        encodedParams.set('grant_type', 'client_credentials');
        encodedParams.set('client_id', process.env.NEXT_PUBLIC_MOJO_CLIENT_ID);
        encodedParams.set('client_secret', process.env.NEXT_PUBLIC_MOJO_CLIENT_SECRET);

        const options = {
            method: 'POST',
            url: 'https://api.instamojo.com/oauth2/token/',
            headers: {
                accept: 'application/json',
                'content-type': 'application/x-www-form-urlencoded'
            },
            data: encodedParams,
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                res.json({access_token: response.data.access_token})
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    else {
        res.json({ message: `${req.method} Method Not Allowed` })
    }
}