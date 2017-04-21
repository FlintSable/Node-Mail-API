import nodemailer from 'nodemailer';
import {gmail} from '../config/local';

export default (req, res) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL || gmail.email ,
            pass: process.env.PASSWORD || gmail.password
        }
    });

// setup email data with unicode symbols
    let {subject, message} = req.body;
    let mailOptions = {
        from: `"Website/Business Name" <${gmail.email}>`, // gmail does not allow a different from address but can change the name
        to: gmail.email, // contact form therefore email to yourself
        subject, // Subject line
        text: message, // plain text body
        html: `<b>${message}</b>` // html body
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.json({error, info});
        }
        res.json({'message': 'message has been sent.'})
    });
}

