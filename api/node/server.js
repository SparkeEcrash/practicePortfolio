const express = require('express');

const server = express();

server.get('/sendemail', function(req, res) {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey('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');
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'test@example.com',
    from: 'test@example.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg);

});

server.listen(4444, function(){
  
})
