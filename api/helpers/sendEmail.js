var SibApiV3Sdk = require("sib-api-v3-sdk");
require("dotenv").config();

const sendEmail = async (emailSubject, htmlContent, userEmail, res) => {
  SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
    process.env.SENDINBLUE_API_KEY;

  new SibApiV3Sdk.TransactionalEmailsApi()
    .sendTransacEmail({
      sender: { email: "sendinblue@sendinblue.com", name: "StromaWebApp" },
      subject: `${emailSubject}`,
      htmlContent: `${htmlContent}`,
      messageVersions: [
        {
          to: [
            {
              email: userEmail,
            },
          ],
        },
      ],
    })
    .then(
      function (data) {
        res.status(201).json({ success: true, message: "Signup Success!" });
      },
      function (error) {
        res.status(500).json({ success: false, error });
      }
    );
};

module.exports = sendEmail;
