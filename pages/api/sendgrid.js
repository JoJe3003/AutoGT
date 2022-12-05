import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
	try {
		console.log('REQ.BODY', req.body);
		await sendgrid.send({
			to: 'jfjespersen@gmail.com', // Your email where you'll receive emails
			from: 'jfjespersen@gmail.com', // your website email address here
			subject: `${req.body.fullname} - ${req.body.email}`,
			html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';"></div>
        <div class="container" style="margin-left: 20px;margin-right: 20px;">
          <div style="font-size: 16px;">
            <p>Melding: </p>
            <p>${req.body.message}</p>
            <br>
            
          </div>
          <div>
            <p>${req.body.fullname},</p> mail: ✉️${req.body.email} <p>${req.body.phone}</p></div>
            <p>Denne eposten ble sendt fra kontakt skjemaet til autogt.no</p>
        </div>
      </body>
      </html>`,
		});
	} catch (error) {
		console.log(error);
		return res.status(error.statusCode || 500).json({ error: error.message });
	}

	return res.status(200).json({ error: '' });
}

export default sendEmail;
