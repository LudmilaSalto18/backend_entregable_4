const EmailCode = require("./Emailcode");
const User = require("./User");

EmailCode.belongsTo(User)
User.hasOne(EmailCode)