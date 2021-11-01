const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

const sendApplyEmail = async (object) => {
  try {
    const token = await jwt.sign({
      users_name: object.usersName,
      users_email: object.usersEmail,
      supervisor_name: object.supervisorName,
      supervisor_email: object.supervisorEmail,
    }, process.env.JWT_SECRET_KEY);

    const url = `http://localhost:3001/apply/${token}`;

    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'buanaprogramming@gmail.com',
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken
      }
    });

    const mailOptions = {
      from: 'Rice Monitoring 📧 <no-reply@ricemon.com>',
      to: `${object.supervisorEmail}`,
      subject: '[Rice Monitoring] Someone Applying For An Employee!',
      text: '',
      html: `<h3>To: Mr./Mrs. ${object.supervisorName}</h3><br/><p>With this letter, I apply to become an employee at Rice Control, with details:</p></br><p>Name: ${object.usersName}</p></br><p>Email: ${object.usersEmail}</p></br><p>Please click link bellow to verify my application, thank you.</p><a href=${url}>${url}</a></br><p>*The verification link automatically expired or inactive for use when have used once.</p>`
    };

    const result = await transport.sendMail(mailOptions);

    return result;
  } catch (error) {
    return error;
  }
};

exports.sendApplyEmail = sendApplyEmail;