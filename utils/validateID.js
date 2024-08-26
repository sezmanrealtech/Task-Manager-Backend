//Utils is the short for utilities which refers to a collection of helper functions or modules design to perform common tasks or muiltiple function

//These tasks often includes thinhgs like data validation, formatting or other repetitive operation that are used accros different parts of the application

const mongoose = require("mongoose"); // import mongoose

// untilities function to validate mongonDB ObjectIDs
const validateID = (id) => {
  // untilities function to validate mongonDB ObjectIDs
  const isValid = mongoose.Types.ObjectId.isValid(id); // check if the ID is
  return isValid;
};

module.exports = validateID;
