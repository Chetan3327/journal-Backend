const eboard = {
  Name: String,
  Title: String,
  Area_of_Specialization: String,
  Designation: String,
  Institute: String,
  Email: String,
};

const contacts = {
  Name: String,
  Title: String,
  Bodh: String,
  Designation: String,
  Email: String,
  Phone: String,
};

const memberschema = {
  Name: String,
  Designation: String,
  Institute: String,
};

const issues = {
  Title: String,
  Author: String,
  Year: Number,
};

const advisory_board = {
  Name: String,
  Designation: String,
  Institute: String,
  position: String,
};

const schema = {
  Que: String,
  Ans: String,
};

const receiver = {
  Email: String,
  Full_Name: String,
  Designation: String,
  Contact: Number,
  Area_of_Interest_Discipline: String,
  Institute_Name_Address: String,
  Institute_Website: String,
  CV: Buffer,
};

module.exports = {
  schema,
  advisory_board,
  memberschema,
  issues,
  contacts,
  eboard,
  receiver,
};
