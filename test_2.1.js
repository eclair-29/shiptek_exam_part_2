const users = require("./users");

const marriedUsers = users.filter((user) => user.isMarried);

console.log("Married Users: ", marriedUsers);
