const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = "zxcv";
user.age = 227;
console.log(user, "user");
const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);
