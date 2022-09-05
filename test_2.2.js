const users = require("./users");

const totalUnMarriedUsers = users.filter((user) => !user.isMarried).length;

console.log("Total users that is not married yet: ", totalUnMarriedUsers);
