const twilio = require("twilio");

const accountSid = "ACbb62f1897387f9329be01d7cdc5814b0";
const authToken = "ae21c784cb750cb59f800faf82266547";

module.exports = new twilio.Twilio(accountSid, authToken);
