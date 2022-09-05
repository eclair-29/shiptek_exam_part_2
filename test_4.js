let database = require("./users");

const getAllData = () => database;

console.log("All Data: ", getAllData());

const addData = (data) => [...database, data];

// console.log("Database before adding of data: ", database);
// console.log(
//   "Database after adding of new data: ",
//   addData({ name: "Miguel De Chavez", age: 26, isMarried: false })
// );

const deleteData = (name) => database.filter((user) => user.name !== name);

// console.log("Database before deletin data: ", database);
// console.log("Database after deleting data: ", deleteData("Cora Rowland"));

const updateData = (name, dataToBeUpdate) =>
  database.map((user) =>
    user.name === name ? { ...user, ...dataToBeUpdate } : user
  );

// console.log("Database before updating a record data: ", database);
// console.log(
//   "Database after updating a record data: ",
//   updateData("Cora Rowland", { age: 38, isMarried: true })
// );

const getData = (name) => database.find((user) => user.name === name);

// console.log("Fetched single data record: ", getData("Cora Rowland"));
