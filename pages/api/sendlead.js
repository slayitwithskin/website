import { mailOptions, transporter } from "../../config/nodemailer";

export default async function sendlead(req, res) {
  if(req.method === "POST"){
    const data = req.body;
    
    if(!data.name || !data.email){
        return res.status(400).json({message: 'Bad request'})
    }
    
    try{
        await transporter.sendMail({
            ...mailOptions,
            subject: 'New lead from landing page',
            text: `Name: ${data.name}, Phone: ${data.phone}, Email: ${data.email}, Message: ${data.message}`,
            html: `<p>Name: ${data.name}</p> <br/>
            <p>Phone: ${data.phone}</p><br/>
            <p>Email: ${data.email}</p><br/>
            <p>Message: ${data.message}</p>
            `
        })

        return res.status(200).json({success: true})
    }
    catch(err){
        console.log(err)
        return res.status(400).json({message: err.message})
    }

  }

  return res.status(400).json({message: 'Bad request'})
}