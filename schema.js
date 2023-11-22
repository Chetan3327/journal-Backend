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

const manuscript = {
  Author1: String,
  Author2: String,
  Author3: String,
  Author4: String,
  Corresponding_Author_Email: String,
  Address: String,
  City_with_State_or_Province: String,
  Country: String,
  Area_of_Research: String,
  Abstract: String,
  Keywords: String,
  Name_of_First_Reviewer: String,
  Name_of_Second_Reviewer: String,
  Email_of_First_Reviewer: String,
  Email_of_Second_Reviewer: String,
  manuscript_url: String,
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
  pdfUrl: String,
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
  CV: String,
};

module.exports = {
  schema,
  advisory_board,
  memberschema,
  issues,
  contacts,
  eboard,
  receiver,
  manuscript,
};
