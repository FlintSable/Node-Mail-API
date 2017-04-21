import nodemailer from 'nodemailer';
//import {gmail} from '../config/local';

export default (req, res) => {
    // create reusable transporter object using the default SMTP transport
    let email = process.env.EMAIL;
    let password = process.env.PASSWORD;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: email,
            pass: password
        }
    });

// setup email data with unicode symbols
    let {subject, message} = req.body;
    let mailOptions = {
        from: `"Website/Business Name" <${email}>`, // gmail does not allow a different from address but can change the name
        to: email, // contact form therefore email to yourself
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

