const router = require("express").Router();
const nodemailer = require("nodemailer");

async function main(walker, dog, owner) {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pupperwalker123@gmail.com",
      pass: "Project123$",
    },
  });

  // send mail with defined transport object
  transporter.sendMail({
    from: '"Pupper" <pupperwalker123@gmail.com>', // sender address
    to: `${walker}`, // list of receivers
    subject: "New Match on Pupper ✔", // Subject line
    text: `You matched up with a pupper named 🐾  ${dog} 🐾 ! 
    
Contact their owner to discuss the details of the walk: ${owner} !` // plain text body
    // html: "<b>Hello world?</b>" // html body
  }, (error, info) => {
    if (error) {
      console.log(error);
    }
    else {
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
  });
}

function postMain(req, res) {
  const body = req.body;

  console.log(body.emailW);

  return main(body.emailW, body.dog, body.emailO).catch(console.error);
}

router.route("/")
  .post(postMain);

module.exports = router;
