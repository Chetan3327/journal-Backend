let contacts = [
  {
    id: 1,
    Name: "Prof. Payal Pahwa",
    Title: "Editor-in-Chief",
    Bodh: "BODH: BPIT International Journal of Technology and Management",
    Designation:
      "Principal, Bhagwan Parshuram Institute of Technology  PSP-4, Dr KN Katju Marg, Sector 17, Rohini, New Delhi, Delhi 110089",
    Email: "principal@bpitindia.com",
    Phone: "(011) 2757 2900",
  },
  {
    id: 2,
    Name: "Dr. Narina Thakur",
    Title: "Managing Editor",
    Bodh: "BODH: BPIT International Journal of Technology and Management",
    Designation:
      " Dean R&D and Associate Professor,  CSE  Bhagwan Parshuram Institute of Technology PSP-4 , Dr KN Katju Marg, Sector 17, Rohini, New Delhi, Delhi 110089",
    Email: "narinathakur@bpitindia.com",
    Phone: "0000000000",
  },
];

let advisory_board = [
  {
    Name: "HON’BLE SH. ATAM PRAKASH KAUSHIK",
    Designation: "CHAIRMAN",
    Institute: "Bhagwan Parshuram Institute of Technology Delhi",
    position: "Chief Patron",
  },
  {
    Name: "SH. SURENDRA SHARMA",
    Designation: "Vice President",
    Institute: "Bhagwan Parshuram Institute of Technology Delhi.",
    position: "Patron",
  },
  {
    Name: "SH. VINOD VATS",
    Designation: "General Secretary",
    Institute: "Bhagwan Parshuram Institute of Technology Delhi",
    position: "Patron",
  },
  {
    Name: "PROF. PAYAL PAHWA",
    Designation: "PRINCIPAL",
    Institute: "Bhagwan Parshuram Institute of Technology Delhi",
    position: "Editor-in-Chief ",
  },
  {
    Name: "PROF. A. K. TANDON",
    Designation: "Founder Director",
    Institute: "Bhagwan Parshuram Institute of Technology Delhi",
    position: "Advisor",
  },
  {
    Name: "PROF. Y.D GAUR",
    Designation: "EXECUTIVE",
    Institute: "Bhagwan Parshuram Institute of Technology Delhi",
    position: "Advisor",
  },
];

const members = [
  {
    Name: "Dr. Abid Haleem",
    Designation: "Professor",
    Institute:
      "Department of Mechanical Engineering, College of Engineering and Technology, Jamia Millia Islamia, New Delhi",
  },
  {
    Name: "Dr S K Garg",
    Designation: "Professor",
    Institute:
      "Department of Management Studies, Delhi Technological University, Delhi",
  },
  {
    Name: "Dr. Ajai Agrawal",
    Designation: "Professor",
    Institute:
      "Department of Mechanical Engineering, GB Pant University, Pantnagar",
  },
  {
    Name: "Dr. Sushil",
    Designation: "Professor",
    Institute: "Department of Management Studies, IIT-Delhi",
  },
  {
    Name: "Dr. M C Gupta",
    Designation: "Professor",
    Institute: " Department of Management Studies, IIT-Delhi",
  },
  {
    Name: "Mr. Yatindra Sharma",
    Designation: "Professor",
    Institute:
      "Department of Mechanical Engineering, College of Engineering and Technology, Jamia Millia Islamia, New Delhi",
  },
  {
    Name: "Mr. Saumitra Sharma",
    Designation: "PGDM (I I M Ahmadabad)",
    Institute: "PGDM (I I M Ahmadabad), Professional U S A",
  },
  {
    Name: "Mr. Shantanu Sharma",
    Designation: "PGDM (I I M Ahmadabad)",
    Institute: "PGDM (I I M Ahmadabad), Professional U S A",
  },
  {
    Name: "Professor Chin-Chen Chang",
    Designation: "PROFESSOR",
    Institute:
      "Department of information Engineering and Computer Science, Feng Chia University, Taiwan",
  },
  {
    Name: "Dr Rana Singh",
    Designation: "Assistant Director",
    Institute:
      "Institutional Research and Planning Gulf Medical University, Ajman, UAE",
  },
  {
    Name: "Prof. Arif Suhail",
    Designation: "PROFESSOR",
    Institute:
      " Department of Mechanical Engineering, Aligarh Muslim University",
  },
  {
    Name: "Prof. Sanjeev Mittal",
    Designation: "PROFESSOR",
    Institute:
      " University School of Management Studies, Guru Gobind Singh Indraprastha University, Delhi",
  },
  {
    Name: "Dr. Rajeev Jain",
    Designation: "Professor & Director of Chemistry",
    Institute: "Institute of Engineering, Gwalior",
  },
  {
    Name: "Dr. Neeraj Kaushik",
    Designation: "Associate Professor",
    Institute: "NIT, Kurukshetra",
  },
  {
    Name: "Dr. Chitra Sharma",
    Designation: "Professor",
    Institute: "(Formerly at IGTUW, Delhi) Philadelphia (U S A)",
  },
  {
    Name: "Prof. Rajiv Sharma",
    Designation: "Professor",
    Institute:
      "Deputy Director and HOD (ECE) Bhagwan Parshuram Institute of Technology New Delhi.",
  },
  {
    Name: "Prof. Achal Kaushik",
    Designation: "Professor and Dean Academics",
    Institute: "Bhagwan Parshuram Institute of Technology New Delhi.",
  },
  {
    Name: "Prof. Achal Kaushik",
    Designation: "Professor and HOD (IT)",
    Institute: "Bhagwan Parshuram Institute of Technology New Delhi.",
  },
];

const editorial_board = [
  {
    Name: "Prof. Payal Pahwa",
    Title: "Editor in Chief",
    Area_of_Specialization: "Big data and Computational Intelligence.",
    Designation: "Principal",
    Institute: "Bhagwan Parshuram Institute of Technology (BPIT) Delhi",
    Email: "principal@bpitindia.com",
  },
  {
    Name: "DR. NARINA THAKUR",
    Title: "Senior Editors",
    Area_of_Specialization: "Machine Learning and Deep Learning",
    Designation: "Dean(R&D), Associate Professor,",
    Institute:
      "Department of Computer Science and Engineering, Bhagwan Parshuram Institute of Technology (BPIT) Delhi",
    Email: "narinathakur@bpitindia.com",
  },
  {
    Name: "PROF. SUNDARAM PRIYADARSHINIE",
    Title: "",
    Area_of_Specialization: "Human Resource Management",
    Designation: "Head, School of Business Administration,",
    Institute: " Bhagwan Parshuram Institute of Technology (BPIT) Delhi",
    Email: "hodsba@bpitindia.com",
  },

  {
    Name: "DR. DEEPIKA SANDIL",
    Title: "",
    Area_of_Specialization: "Material Science, Nanotechnology",
    Designation: "Associate Professor APPLIED Physics",
    Institute: " Bhagwan Parshuram Institute of Technology (BPIT) Delhi",
    Email: "deepikasandil@bpitindia.com",
  },

  {
    Name: "Dr. Shweta Taneja",
    Title: "Associated Editors",
    Area_of_Specialization: "Data Science and Computational Intelligence",
    Designation: "Associate Professor CSE ",
    Institute: "Bhagwan Parshuram Institute of Technology (BPIT) Delhi",
    Email: "shwetataneja@bpitindia.com",
  },

  {
    Name: "Dr. Amit Gupta",
    Title: "",
    Area_of_Specialization: " Accounting and Finance",
    Designation: "Associate Professor School of Business Administration",
    Institute: "Bhagwan Parshuram Institute of Technology (BPIT) Delhi",
    Email: "amitgupta@bpitindia.com",
  },

  {
    Name: "Dr. Rachna Jain",
    Title: "",
    Area_of_Specialization: " Machine Learning and Deep Learning",
    Designation: "Associate Professor IT",
    Institute: "Bhagwan Parshuram Institute of Technology (BPIT) Delhi",
    Email: "rachnajain@bpitindia.com",
  },
  {
    Name: "DR. GHANENDRA KUMAR",
    Title: "",
    Area_of_Specialization: "",
    Designation: "Assistant Professor (ECE) ",
    Institute: "Bhagwan Parshuram Institute of Technology (BPIT) Delhi",
    Email: "",
  },

  {
    Name: "MS. RUCHIKA MITTAL",
    Title: "",
    Area_of_Specialization: "",
    Designation: "Assistant Professor (EEE)",
    Institute: "Bhagwan Parshuram Institute of Technology (BPIT) Delhi",
    Email: "",
  },
];

let issues = {
  V1_I1_2015: [
    {
      Title:
        "An Emperical Study on the Imperatives of Knowledge management practices in selected information Technology Enterprises of Delhi North India",
      Author: "Ms. Simran Waraich",
    },
    {
      Title:
        "Evaluation of the effects of Green practices. the Performance of Indian Manufacturing industries using FAHP",
      Author: "Tina Chaudhary, Deepti Chhabra",
    },
    {
      Title: "Student Absenteeism -Causes, Remedies and Consequences",
      Author: "Ms. Ritu Bajaj, Ms. Kriti Kohli, Prof. Payal Pahwa",
    },
    {
      Title: "Health Indexing of Power Transformers",
      Author: "Kushagra Gupta",
    },
    {
      Title: "Modern Vehicles Technology-Advanced Emergency Braking System",
      Author:
        "Dr. Bhawna Suri, Mr. Shailendra Gaur, Rajan Sethi, Shikha Khandelwal",
    },
    {
      Title: "Haptic Technology: The Next Big Revolution",
      Author: "Dr. Deepali Virmani, Charu Ganga, Divya Gupta, Himanshi",
    },

    {
      Title:
        "Measurement of Employee's Motivation Level in Private Banks of Haryana",
      Author: "Dr. Amit Gupta, Dr. Shamsher Singh",
    },
    {
      Title: "Database optimization and Novelty Mining of News articles",
      Author:
        "Shweta Taneja, Charu Gupta, Ankita Mohan Saxena ,Jatn Rijhwani ,Sanya Malhotra",
    },
    {
      Title:
        "Water quality status of River Hindon in Ghaziabad with particular reference to presence of pesticides",
      Author: "Nidhi Sharma, Daisy Bhat",
    },
    {
      Title:
        "A Study on Recent Trends in Training Programmes of Petroleum PSUs in India",
      Author: "Dr. D.k.Chandel, M Sujata, Mr. Vishvadeep Sharma",
    },
    {
      Title: "Neural Network Activation Functions for Image Compression",
      Author: "Anusha Chhabra, Kanika Mittal",
    },
    {
      Title: "Optimal Control of CSTR",
      Author: "Neha Khanduja, Simmi Sharma",
    },
    {
      Title: "A NEWAPPROACH TOWARDS K-MEANs ALGORITHM USING SEGMENTATION",
      Author: "Preeti Arora ,Pooja Mudgil ,Shipra Varshney",
    },
    {
      Title: "Range Monitoring cum Theft Detection System",
      Author: "Vaibhav Bhatia",
    },
    {
      Title: "Resource Mobilization of Regional Rural Banks in India",
      Author: "Dr. Shamsher Singh, Dr. Amit Gupta",
    },
    {
      Title:
        "Network Security Issues with ECC and El-Gamal based Threshold Cryptography",
      Author: "Shailendra Singh Gaur ,Neha Jaitly ,Samruddha Patil",
    },
  ],

  V2_I1_2016: [
    {
      Title: "On Public Private Partnerships in Canada",
      Author: "Yatindra Sharma",
    },
    {
      Title:
        "A Meta analysis and Systematic Review on Microfinance and its Impact",
      Author: "Prof. Sanjiv Mittal, Ms. Aarti Dhanrajani",
    },
    {
      Title:
        "An Analytical Study of Sectoral Distribution of Bank Credit in India",
      Author: "Dr. Anshul Sharma",
    },
    {
      Title: "A Way to Trust Deportment for Security in Distributed Systems",
      Author: "Preeti Arora, Shipra Varshney2",
    },
    {
      Title: "Android Based Irrigation Application Home Genie",
      Author: "Pooja Mudgil , Prakhar Agarwal , Preksha Singla",
    },
    {
      Title: "Crime Cases and Ways of Criminal Detection",
      Author:
        "Dr. Bhawana Suri ,Mrs. Deepti Jain, Alakshender Kumar ,Abharika Kamra ,Rajesh , Shweta Singh",
    },
    {
      Title: "Health and Wellness – A new Market Offering",
      Author: "Dr. Vaishali Sharma ,Ritu Bajaj",
    },
    {
      Title: "Positioning of Starbucks in India: Issues and Challenges",
      Author: "Dr. Prerna Dawar ,Parul Sehrawat ,Shifali Garg",
    },
    {
      Title: "Total Quality Management and Services Marketing",
      Author: "Dr. Neelam Turan",
    },
    {
      Title:
        "A Study on the Impact of Advertising on Purchase of Two Wheelers by Women inPanipat City",
      Author: "Vikram Singh , Yogita Sharma ,Pooja Sharma",
    },
    {
      Title: "Analysis of FTP and TFTP Protocols",
      Author:
        "Dr. Deepali Virmani , Shweta Taneja , Utkarsh Jagga , Koshika Gaur",
    },
  ],
  V2_I1_2017: [
    {
      Title: "On Public Private Partnerships in Canada",
      Author: "Yatindra Sharma",
    },
    {
      Title:
        "A Meta analysis and Systematic Review on Microfinance and its Impact",
      Author: "Prof. Sanjiv Mittal, Ms. Aarti Dhanrajani",
    },
    {
      Title:
        "An Analytical Study of Sectoral Distribution of Bank Credit in India",
      Author: "Dr. Anshul Sharma",
    },
    {
      Title: "A Way to Trust Deportment for Security in Distributed Systems",
      Author: "Preeti Arora, Shipra Varshney2",
    },
    {
      Title: "Android Based Irrigation Application Home Genie",
      Author: "Pooja Mudgil , Prakhar Agarwal , Preksha Singla",
    },
    {
      Title: "Crime Cases and Ways of Criminal Detection",
      Author:
        "Dr. Bhawana Suri ,Mrs. Deepti Jain, Alakshender Kumar ,Abharika Kamra ,Rajesh , Shweta Singh",
    },
    {
      Title: "Health and Wellness – A new Market Offering",
      Author: "Dr. Vaishali Sharma ,Ritu Bajaj",
    },
    {
      Title: "Positioning of Starbucks in India: Issues and Challenges",
      Author: "Dr. Prerna Dawar ,Parul Sehrawat ,Shifali Garg",
    },
    {
      Title: "Total Quality Management and Services Marketing",
      Author: "Dr. Neelam Turan",
    },
    {
      Title:
        "A Study on the Impact of Advertising on Purchase of Two Wheelers by Women inPanipat City",
      Author: "Vikram Singh , Yogita Sharma ,Pooja Sharma",
    },
    {
      Title: "Analysis of FTP and TFTP Protocols",
      Author:
        "Dr. Deepali Virmani , Shweta Taneja , Utkarsh Jagga , Koshika Gaur",
    },
  ],
  V1_I1_2019: [
    {
      Title:
        "MEASURING URBAN’S PERCEPTION ABOUT INDIA HOSTING CRICKET WORLD CUP 2023",
      Author: "Dr. Kirti Singh Dahiya",
    },
    {
      Title: "Performance Evaluation of RRBS in India",
      Author: "Mr. Puneet Kumar ,Dr. Neelam Turan",
    },
    {
      Title: "Predicting Stock Returns of Infosys",
      Author: "Vaishali Agrawal",
    },
    {
      Title:
        "Effect of FDI on Economic Growth - With Special Reference to India",
      Author: " Dr. Ashneet Kaur ,Ms Seema Wadhawan",
    },
    {
      Title:
        "Embracing Of Corporate Social Responsibility by Nifty 100 Companies",
      Author: "Dr. Pankaj Kumar ,Ritika Gupta",
    },
    {
      Title:
        "Mystery Shopping: A Performance Evaluation Technique for Customer- Retailer Experience",
      Author: "Dr. Madhu Arora ,Ms. Princy Gupta",
    },
    {
      Title: "Competency Studies with Unique Referrals to Support Market",
      Author: "Dr. Anshul Sharma",
    },
    {
      Title:
        "An Empirical Study of Market Segmentation & Brand Image in Global Business (With Special Reference to Yamaha Company)",
      Author: "Dr. Sonia Sharda",
    },
    {
      Title:
        "THE EVALUATION OF BOOK-KEEPING AND BASIC ACCOUNTING PROCEDURES IMPLEMENTED AND APPLIED IN SSEs",
      Author: "Dr. Shamsher Singh ,Dr. Neelam Turan",
    },
    {
      Title:
        "A Study on Women Entrepreneurs in India: Challenges &Contribution towards GDP",
      Author: "Neha Gupta",
    },
    {
      Title:
        "Research on Consumer Behavior towards Celebrity Endorsement: With Special Reference to Delhi Region",
      Author: "Dr. Seema Girdhar ,Ms. Malika Singh ,Ms. Amandeep Kaur Singh",
    },
    {
      Title: "Analysis of Growth of Microfinance Sector in India",
      Author: " Ms. Aarti Haswani ,Ms. Ritu Bajaj",
    },
    {
      Title:
        "Brand Awareness of Travel Agents in Hospitality Industry- An Exploratory Study",
      Author: "Dr. Anu Nagpal Chopra ,Ms. Jyotsna Oswal ,Ms. Kamna Chopra",
    },
    {
      Title: "THE INCREASING INCIDENCE OF BANKING SCAMS",
      Author: "Ms. Naina Narang",
    },
    {
      Title: "Integration of Ethics and Social Responsibility in Marketing",
      Author: "Ms. Preeti Goel",
    },
    {
      Title: "Managing Talent: The Eustress Way",
      Author: "Dr. Swaty Wadhwa1 ,Ms. Anuja Thakar",
    },
    {
      Title:
        "A LITERATURE REVIEW ON FACTORS AFFECTING THE INTENTIONS TO BUY HEALTH FOOD",
      Author: "Ms. Ritu Bajaj ,Ms. Aarti Haswani",
    },
    {
      Title: "Labour As a Factor Of Production",
      Author: "Kareena, Mayur and Bhole",
    },
  ],

  V7_I2_2021: [
    {
      Title: "Automatic Image Tagging Using Tensor and Gaussian Filter",
      Author: "Tanisha Madan,Tushar Patnaik,Deepali Virmani Page:1-10",
    },
    {
      Title: "Dynamic Operational Time Traffic Light System",
      Author:
        "Drishti Agarwal,Preeti Nagrath, Rachna Jain,Narina Thakur Page:11-18",
    },
    {
      Title:
        "A Multi-Hierarchical Clustering on Topic Modeling using Latent Dirichlet Allocation",
      Author: "Anusha Chhabra,Monika Arora Page:19-25",
    },
    {
      Title: " A Way to Trust Deportment for Security in Distributed Systems",
      Author: "Preeti Arora,Joy Chugh,Preeti,Tarun Tomar Page:26-30",
    },
    {
      Title:
        "Light Stimulated Rat(LSR) Algorithm Based Multimodal Image Fusion for MRI Images",
      Author: "Jayant Bhardwaj,Pawan Sharma Page:31-37",
    },
    {
      Title:
        "Smart Secured Voting Tool Using Block-Chain Technology in Peer-to-Peer Network",
      Author:
        "Bhawna Suri,Shweta Taneja,Rohan Sharma,Muskaan Dua,Rajneesh Dubey Page:38-45",
    },
    {
      Title: "Smart Agricultural Robot",
      Author: "Usha Sharma,Megha Sharma,Rupal Gargy Page:46-52",
    },
    {
      Title: "Camera Model Identification with Convolution Neural Network",
      Author:
        "Harsh Kaushik,Harshita Chadha,Neelam Sharma,Harsh Nigam,Eklavya Sharma,Komal Bhagat Page:53-61",
    },
    {
      Title:
        "Relevance of Corporate Governance and Profitability in Innovation Policies of Socio-Economic Transformation :A Study in Indian Context",
      Author: "Shamsher Singh, Neela Turan Page:62-68",
    },
    {
      Title:
        "Importance of values and Ethics for teachers: A reality check for the Contemporary Indian Education Sector",
      Author: "Anuja Thakar Page:69-76",
    },
  ],
};

let FAQ = [
  {
    Que: "Can I publish a review or survey paper in BODH?",
    Ans: "There are no restrictions on the type of paper that may be published within BODH. Any article submitted that falls within the aims and scope of a journal will be eligible to be published in BODH.",
  },
  {
    Que: "How much will it cost to publish in BODH?",
    Ans: "Bodh does not charge any amount from the authors for publishing their research papers. Publication is completely free of cost, but the papers should be original",
  },
  {
    Que: "How long does the review process take?",
    Ans: "The papers will be reviewed by two or more independent referees. They may also be read and considered by members of the journal’s editorial board and ultimately by the editor(s) before a decision is rendered. The review result will be sent to you within one month after submission. Do not hesitate to contact us if you would like to know the status of your manuscript. Line spacing: All lines should be double spaced. Double-spacing your lines makes the manuscript easier to read and mark up. Do not add an extra space between paragraphs.",
  },
  {
    Que: "How do I know whether my manuscript submission to BODH worked OK?",
    Ans: "You will receive an automatic confirmation e-mail as soon as you have uploaded the manuscript. Your manuscript will then be checked and forwarded to the editors who will start the preliminary review. If there are any problems with your uploaded manuscript you will be contacted by the editors.",
  },
  {
    Que: "Whom do I contact if I have questions about the status of my manuscript?",
    Ans: "Please contact us via the email: bodhbpitijtm@gmail.com or bodhbpitijtm@bpitindia.com.",
  },
  {
    Que: "What type of file format do you accept?",
    Ans: "At present, Microsoft Word 2010 or higher is the only format for submitting your manuscript.",
  },
  {
    Que: "How many pages is allowed in any submitted paper?",
    Ans: "Submissions should be no less than five pages and should not exceed thirty pages in length.",
  },
  {
    Que: "Why do I need to sign a copyright form?",
    Ans: " It is a legal requirement that we cannot publish any article without receiving a signed copyright form from the author. If we do not receive your signed copyright form, we cannot publish your article.",
  },
  {
    Que: "How many papers can an author submit and what are the restrictions? ",
    Ans: "An author can submit any number of different papers for publication consideration. However, you can only submit one paper to one journal at one time. You cannot submit the same paper to more than one journal at the same time for consideration.",
  },
];

module.exports = {
  advisory_board,
  members,
  contacts,
  editorial_board,
  issues,
  FAQ,
};
