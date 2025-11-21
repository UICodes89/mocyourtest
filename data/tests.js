import { btBank2024 } from './bt_bank_2024';

export const tests = [
  {
    "id": "acca-bt-mock-1",
    "title": "ACCA BT Final Mock - Set 1",
    "durationMinutes": 120,
    "questions": [
      {
        "section": "Section A: Objective Questions",
        "id": 1,
        "question": "Q1: If the exchange rate falls between the British Pound and the Euro (Pound weakens), which of the following statements are TRUE?",
        "type": "checkbox",
        "options": [
          "Demand for imports from the Eurozone increases",
          "Demand for exports to the Eurozone increases",
          "Demand for imports from the Eurozone decreases",
          "Demand for exports to the Eurozone decreases"
        ],
        "answer": [
          1,
          2
        ],
        "explanation": "A weaker Pound makes UK exports cheaper (increasing demand) and Eurozone imports more expensive (decreasing demand)."
      },
      {
        "id": 2,
        "question": "Q2: With regards to money laundering... The penalty for failing to disclose knowledge or suspicion is up to how many years in prison?",
        "type": "radio",
        "options": [
          "2",
          "5",
          "14",
          "Unlimited"
        ],
        "answer": [
          1
        ],
        "explanation": "Failure to report is 5 years. Tipping off is 2 years. Laundering itself is 14 years."
      },
      {
        "id": 3,
        "question": "Q3: Interview questions that begin with 'Have you...' or 'Did you...' are known as what type of question?",
        "type": "radio",
        "options": [
          "Leading",
          "Open",
          "Closed"
        ],
        "answer": [
          2
        ],
        "explanation": "Closed questions encourage a short 'Yes' or 'No' answer."
      },
      {
        "id": 4,
        "question": "Q4: Which TWO of the following selection tests are NOT types of aptitude test?",
        "type": "checkbox",
        "options": [
          "Numerical reasoning test",
          "Personality test",
          "Clerical ability",
          "Intelligence test"
        ],
        "answer": [
          1,
          3
        ],
        "explanation": "Aptitude tests measure specific skills. Personality tests measure traits. Intelligence tests measure general cognitive ability (g-factor), often distinguished from specific aptitude in this syllabus."
      },
      {
        "id": 5,
        "question": "Q5: Which term describes the skills required for a job to be carried out by a person?",
        "type": "radio",
        "options": [
          "Job analysis",
          "Job description",
          "Job specification"
        ],
        "answer": [
          2
        ],
        "explanation": "Job Specification details the person (skills/attributes). Job Description details the tasks."
      },
      {
        "id": 6,
        "question": "Q6: Shareholders are responsible for determining the duties of internal auditors. True or False?",
        "type": "radio",
        "options": [
          "True",
          "False"
        ],
        "answer": [
          1
        ],
        "explanation": "False. Internal audit scope is determined by management or the Audit Committee. Shareholders appoint *External* auditors."
      },
      {
        "id": 7,
        "question": "Q7: Who argued that the objectives of a company emerge as a consensus of the differing views of stakeholders?",
        "type": "radio",
        "options": [
          "Mendelow",
          "John Lewis",
          "Cyert and March"
        ],
        "answer": [
          2
        ],
        "explanation": "Cyert and March (Behavioral Theory of the Firm)."
      },
      {
        "id": 8,
        "question": "Q8: Peter knows everyone. His team asks him to check his address book for contacts. What Belbin role is this?",
        "type": "radio",
        "options": [
          "Specialist",
          "Resource Investigator",
          "Monitor Evaluator",
          "Completer Finisher"
        ],
        "answer": [
          1
        ],
        "explanation": "Resource Investigators are the networkers who go outside the team to bring back ideas and contacts."
      },
      {
        "id": 9,
        "question": "Q9: Tuckman's Team Stages - Match 'Team members become interdependent' to a stage:",
        "type": "radio",
        "options": [
          "Forming",
          "Storming",
          "Norming",
          "Performing"
        ],
        "answer": [
          3
        ],
        "explanation": "Interdependence and high productivity characterize the Performing stage."
      },
      {
        "id": 10,
        "question": "Q10: Maslow - How is 'Security / Lack of threats' categorized?",
        "type": "radio",
        "options": [
          "Social",
          "Safety",
          "Esteem",
          "Self-actualization"
        ],
        "answer": [
          1
        ],
        "explanation": "Security falls under Safety needs."
      },
      {
        "id": 11,
        "question": "Q11: In the UK, what states that the EU has the force of law in member states?",
        "type": "radio",
        "options": [
          "An Act of Parliament",
          "The Treaty on the Functioning of the EU"
        ],
        "answer": [
          0
        ],
        "explanation": "While Treaties generate the law, in the UK (dualist state), an Act of Parliament (European Communities Act 1972) was required to give it force."
      },
      {
        "id": 12,
        "question": "Q12: Douglas McGregor Theory X - Which is a belief of a Theory X Manager?",
        "type": "radio",
        "options": [
          "Employees seek responsibility",
          "The average employee dislikes work",
          "It is natural to make an effort"
        ],
        "answer": [
          1
        ],
        "explanation": "Theory X assumes workers are lazy and dislike work."
      },
      {
        "id": 13,
        "question": "Q13: PEST Analysis - Growth, Monetary Policy, Taxation refer to:",
        "type": "radio",
        "options": [
          "Political",
          "Economic",
          "Social",
          "Technological"
        ],
        "answer": [
          1
        ],
        "explanation": "These are core Economic factors."
      },
      {
        "id": 15,
        "question": "Q15: Kolb - A combination of 'watching' and 'thinking' produces which learning style?",
        "type": "radio",
        "options": [
          "Accommodating",
          "Diverging",
          "Converging",
          "Assimilating"
        ],
        "answer": [
          3
        ],
        "explanation": "Reflective Observation (Watching) + Abstract Conceptualization (Thinking) = Assimilating."
      },
      {
        "id": 16,
        "question": "Q16: SMART objectives - 'R' stands for:",
        "type": "radio",
        "options": [
          "Realistic",
          "Reasonable",
          "Representative"
        ],
        "answer": [
          0
        ],
        "explanation": "Realistic (sometimes Relevant, but Realistic is the standard option here)."
      },
      {
        "id": 18,
        "question": "Q18: Who distinguished between acts of leadership and authority (acceptance of leader)?",
        "type": "radio",
        "options": [
          "Mintzberg",
          "Heifetz",
          "Kotter"
        ],
        "answer": [
          1
        ],
        "explanation": "Heifetz distinguished between technical authority and adaptive leadership."
      },
      {
        "id": 20,
        "question": "Q20: Who described culture as 'the collection of traditions, values, policies... a pervasive context'?",
        "type": "radio",
        "options": [
          "Schein",
          "Schwartz and Davis",
          "Mullins",
          "McLean and Marshall"
        ],
        "answer": [
          3
        ],
        "explanation": "This is the standard definition by McLean and Marshall often cited in ACCA texts."
      },
      {
        "id": 21,
        "question": "Q21: Handy's 'Power' culture characteristics (Select TWO):",
        "type": "checkbox",
        "options": [
          "Lots of rules",
          "Quick to make decisions",
          "Lots of bureaucracy",
          "Succession problems"
        ],
        "answer": [
          1,
          3
        ],
        "explanation": "Power culture (The Web/Zeus) depends on the center. It is fast but vulnerable if the leader leaves."
      },
      {
        "id": 22,
        "question": "Q22: Which theory states an organisation must align the interests of the agents to the principals?",
        "type": "radio",
        "options": [
          "Accommodation theory",
          "Agency theory",
          "Corporate theory"
        ],
        "answer": [
          1
        ],
        "explanation": "Agency theory deals with the Principal-Agent problem."
      },
      {
        "id": 23,
        "question": "Q23: The head of Treasury reports directly to the shareholders. True or False?",
        "type": "radio",
        "options": [
          "True",
          "False"
        ],
        "answer": [
          1
        ],
        "explanation": "False. They typically report to the Finance Director (CFO)."
      },
      {
        "id": 24,
        "question": "Q24: Which TWO are organisations NOT formed with the intention of generating a profit?",
        "type": "checkbox",
        "options": [
          "Private Limited Company",
          "Public Limited Company",
          "Public Sector Organisation",
          "Non-governmental Organisations"
        ],
        "answer": [
          2,
          3
        ],
        "explanation": "Public sector and NGOs exist for service/social causes, not profit maximization."
      },
      {
        "id": 25,
        "question": "Q25: Which stakeholder group do Non-Executive Directors (NEDs) belong to?",
        "type": "radio",
        "options": [
          "Internal",
          "Connected",
          "External"
        ],
        "answer": [
          0
        ],
        "explanation": "NEDs are members of the board, so they are Internal stakeholders, even though they are independent."
      },
      {
        "id": 26,
        "question": "Q26: The overall responsibility of compliance with Health and Safety lies with whom?",
        "type": "radio",
        "options": [
          "Employers (The Company)",
          "Employees",
          "I and II"
        ],
        "answer": [
          0
        ],
        "explanation": "While everyone has duties, the *overall* legal responsibility lies with the Employer."
      },
      {
        "id": 27,
        "question": "Q27: If household incomes rise and demand for a good falls, it is a:",
        "type": "radio",
        "options": [
          "Normal good",
          "Inferior good"
        ],
        "answer": [
          1
        ],
        "explanation": "Inferior goods (like budget bread) are replaced by better goods when income rises."
      },
      {
        "id": 28,
        "question": "Q28: Leavitt's Communication Patterns - A 5-member team where each communicates with only two others?",
        "type": "radio",
        "options": [
          "Circle",
          "Chain",
          "Y",
          "Wheel"
        ],
        "answer": [
          0
        ],
        "explanation": "In a Circle, everyone talks only to their immediate left and right neighbors."
      },
      {
        "id": 29,
        "question": "Q29: Wrongful Dismissal (Select TWO correct statements):",
        "type": "checkbox",
        "options": [
          "Minimum period of employment required",
          "Can claim damages for breach of contract (notice period)",
          "Only full-time employees can claim",
          "Damages usually calculated by notice period difference"
        ],
        "answer": [
          1,
          3
        ],
        "explanation": "Wrongful dismissal is a contract law issue (breach of notice terms). There is no minimum service required."
      },
      {
        "id": 30,
        "question": "Q30: Joely bought hair straighteners. Pin missing. Returned immediately. Who is responsible?",
        "type": "radio",
        "options": [
          "'AIR' (Manufacturer) is responsible for partial refund",
          "J Ltd (Retailer) is responsible for partial refund",
          "'AIR' is responsible for replacement",
          "J Ltd is responsible for full refund/replacement"
        ],
        "answer": [
          3
        ],
        "explanation": "Under consumer law, the contract is with the Retailer (J Ltd). Since she returned it immediately (short term right to reject), she is entitled to a full refund or replacement from the shop."
      },
      {
        "id": 31,
        "question": "Q31: Workforce 84.2m, Unemployed 2.1m. What is the unemployment rate?",
        "type": "radio",
        "options": [
          "1.50%",
          "2.00%",
          "2.50%"
        ],
        "answer": [
          2
        ],
        "explanation": "(2.1 / 84.2) * 100 = 2.494% -> Rounds to 2.50%."
      },
      {
        "id": 33,
        "question": "Q33: Product X has Substitute Z and Complement Y. Which shifts X demand left (decrease)? (Select TWO)",
        "type": "checkbox",
        "options": [
          "Increase in price of Substitute Z",
          "Decrease in price of Substitute Z",
          "Increase in price of Complement Y",
          "Decrease in price of Complement Y"
        ],
        "answer": [
          1,
          2
        ],
        "explanation": "If Substitute Z gets cheaper, people buy Z instead of X (X demand drops). If Complement Y gets expensive, people stop buying Y, so they don't need X (X demand drops)."
      },
      {
        "id": 34,
        "question": "Q34: Which statement is TRUE?",
        "type": "radio",
        "options": [
          "Demand for inferior goods rises as income rises",
          "Demand for luxury goods falls as household incomes fall",
          "Demand for a product will fall if cost of its complement falls"
        ],
        "answer": [
          1
        ],
        "explanation": "Luxury goods are income elastic; if income drops, demand for luxuries drops significantly."
      },
      {
        "id": 35,
        "question": "Q35: 'Managers can communicate quickly with employees' - Wide or Narrow span?",
        "type": "radio",
        "options": [
          "Wide span of control",
          "Narrow span of control"
        ],
        "answer": [
          0
        ],
        "explanation": "A wide span implies a Flat structure. Flat structures have fewer vertical layers, so communication between top and bottom is faster."
      },
      {
        "id": 37,
        "question": "Q37: Corporate Governance - Which is NOT true for a listed company?",
        "type": "radio",
        "options": [
          "Must comply or explain",
          "Aims should be maximisation of profit",
          "Directors re-election at least every five years",
          "CEO and Chair cannot be same person"
        ],
        "answer": [
          2
        ],
        "explanation": "The UK Code requires annual re-election for FTSE 350 (or every 3 years generally). 'At least every 5 years' is too long."
      },
      {
        "id": 38,
        "question": "Q38: Preparing budgets is a responsibility of:",
        "type": "radio",
        "options": [
          "Financial Accounting",
          "Management Accounting",
          "Treasury"
        ],
        "answer": [
          1
        ],
        "explanation": "Budgeting and forecasting are core Management Accounting functions."
      },
      {
        "id": 39,
        "question": "Q39: Collection of programs to enter/select data in a database?",
        "type": "radio",
        "options": [
          "DBMS",
          "EIS",
          "Spreadsheet"
        ],
        "answer": [
          0
        ],
        "explanation": "Database Management System."
      },
      {
        "id": 40,
        "question": "Q40: Price rises $32 to $36 (+12.5%). Demand falls 4500 to 3600 (-20%). Calculate PED.",
        "type": "radio",
        "options": [
          "-1.6",
          "-2.0",
          "+2.0"
        ],
        "answer": [
          0
        ],
        "explanation": "PED = %Change Q / %Change P = -20% / 12.5% = -1.6."
      },
      {
        "id": 41,
        "question": "Q41: Mintzberg - Who advises the operating core (standardisation)?",
        "type": "radio",
        "options": [
          "Strategic apex",
          "Middle line",
          "Technostructure"
        ],
        "answer": [
          2
        ],
        "explanation": "The Technostructure (analysts, planners) standardizes processes."
      },
      {
        "id": 43,
        "question": "Q43: External auditors are appointed by:",
        "type": "radio",
        "options": [
          "Chief Executive",
          "Shareholders",
          "Finance Director"
        ],
        "answer": [
          1
        ],
        "explanation": "Shareholders appoint them at the AGM."
      },
      {
        "id": 44,
        "question": "Q44: Jack advises new recruits on indirect work topics. He is a:",
        "type": "radio",
        "options": [
          "Coach",
          "Mentor",
          "Counsellor"
        ],
        "answer": [
          1
        ],
        "explanation": "Mentors provide long-term, holistic career support. Coaches focus on specific job tasks."
      },
      {
        "id": 46,
        "question": "Q46: Data Protection - Preventing 'unauthorised disclosure' on laptops. Best TWO measures:",
        "type": "checkbox",
        "options": [
          "Off-site backups",
          "Training users",
          "Encryption",
          "Validation"
        ],
        "answer": [
          1,
          2
        ],
        "explanation": "Encryption prevents data being read if stolen. Training prevents negligence. Backups help availability, not confidentiality."
      },
      {
        "section": "Section B: Multi-Task Questions",
        "id": 47,
        "question": "Q47 (Handy Culture): Identify the feature of Power Culture:",
        "type": "radio",
        "options": [
          "Succession problems",
          "Matrix structure",
          "Lots of rules"
        ],
        "answer": [
          0
        ],
        "explanation": "Power culture revolves around one person (Zeus), causing succession issues."
      },
      {
        "id": 48,
        "question": "Q48 (Committees): 'Review of the financial statements' is done by:",
        "type": "radio",
        "options": [
          "Audit Committee",
          "Remuneration Committee",
          "Nomination Committee"
        ],
        "answer": [
          0
        ],
        "explanation": "The Audit Committee oversees financial reporting and the external audit."
      },
      {
        "id": 49,
        "question": "Q49 (Communication): Which method provides a 'Permanent record'?",
        "type": "radio",
        "options": [
          "Conversation",
          "Report",
          "Phone call"
        ],
        "answer": [
          1
        ],
        "explanation": "Written reports provide a permanent trail."
      },
      {
        "id": 50,
        "question": "Q50 (Conflict): Advantage of arguments/conflict? (Select TWO)",
        "type": "checkbox",
        "options": [
          "Different solutions discussed",
          "Encourages defensive behavior",
          "Focus on individual contributions"
        ],
        "answer": [
          0,
          2
        ],
        "explanation": "Constructive conflict avoids groupthink and brings different solutions to light."
      },
      {
        "id": 51,
        "question": "Q51 (Kotter): 'Inspiring and motivating staff to translate vision into action' is:",
        "type": "radio",
        "options": [
          "Leadership",
          "Management"
        ],
        "answer": [
          0
        ],
        "explanation": "Management deals with complexity/order. Leadership deals with change/vision/motivation."
      },
      {
        "id": 52,
        "question": "Q52 (Ashridge Styles): MD communicates decisions already made by HQ. Style is:",
        "type": "radio",
        "options": [
          "Tells",
          "Sells",
          "Consults",
          "Joins"
        ],
        "answer": [
          0
        ],
        "explanation": "Decisions are already made and just communicated: Tells."
      },
      {
        "id": 53,
        "question": "Q53 (Ethics): What is the course of action of 'last resort' for an ethical dilemma?",
        "type": "radio",
        "options": [
          "Consultation with board",
          "Resignation",
          "Legal advice"
        ],
        "answer": [
          1
        ],
        "explanation": "If all else fails, the accountant must resign."
      },
      {
        "id": 54,
        "question": "Q54 (Personal Qualities): Which TWO are personal qualities required of an accountant?",
        "type": "checkbox",
        "options": [
          "Timeliness",
          "Courtesy",
          "Independence",
          "Accountability"
        ],
        "answer": [
          0,
          1
        ],
        "explanation": "Timeliness and Courtesy are personal qualities. Independence is a professional ethical principle."
      },
      {
        "id": 56,
        "question": "Q56 (Monetary Policy): Which TWO are NOT aspects of monetary policy?",
        "type": "checkbox",
        "options": [
          "Public sector borrowing",
          "Taxation",
          "Interest rates",
          "Exchange rates"
        ],
        "answer": [
          0,
          1
        ],
        "explanation": "Borrowing and Taxation are Fiscal Policy (Government). Interest rates are Monetary Policy (Central Bank)."
      }
    ]
  },
  {
    "id": "acca-bt-mock-2",
    "title": "ACCA BT Final Mock - Set 2",
    "durationMinutes": 120,
    "questions": [
      {
        "id": 1,
        "question": "If the exchange rate falls between the British Pound and the Euro (Pound weakens), which of the following statements are TRUE?",
        "type": "checkbox",
        "options": [
          "Demand for imports from the Eurozone increases",
          "Demand for exports to the Eurozone increases",
          "Demand for imports from the Eurozone decreases",
          "Demand for exports to the Eurozone decreases"
        ],
        "answer": [
          1,
          2
        ],
        "explanation": "A weaker currency makes exports cheaper for foreign buyers (increasing demand) and imports more expensive (decreasing demand). [cite: 86-94]"
      },
      {
        "id": 2,
        "question": "The penalty for failing to disclose knowledge or suspicion of money laundering is up to how many years in prison?",
        "type": "radio",
        "options": [
          "2",
          "5",
          "14",
          "Unlimited"
        ],
        "answer": [
          1
        ],
        "explanation": "Failure to report is 5 years. Tipping off is 2 years. Laundering itself is 14 years. [cite: 96-101]"
      },
      {
        "id": 3,
        "question": "Questions that begin with 'Have you...' or 'Did you...' are known as what type of question?",
        "type": "radio",
        "options": [
          "Leading",
          "Open",
          "Closed"
        ],
        "answer": [
          2
        ],
        "explanation": "Closed questions typically elicit a 'Yes' or 'No' answer. [cite: 119-124]"
      },
      {
        "id": 4,
        "question": "Which TWO of the following selection tests are NOT types of aptitude test?",
        "type": "checkbox",
        "options": [
          "Numerical reasoning test",
          "Personality test",
          "Clerical ability",
          "Intelligence test"
        ],
        "answer": [
          1,
          3
        ],
        "explanation": "Aptitude tests measure specific skills. Personality and Intelligence (IQ) tests measure traits and general cognitive ability. [cite: 128-138]"
      },
      {
        "id": 5,
        "question": "Which term describes the skills required for a job to be carried out by a person?",
        "type": "radio",
        "options": [
          "Job analysis",
          "Job description",
          "Job specification"
        ],
        "answer": [
          2
        ],
        "explanation": "A Job Specification details the person (skills, attributes). A Job Description details the role (tasks). [cite: 157-160]"
      },
      {
        "id": 6,
        "question": "Shareholders are responsible for determining the duties of internal auditors. True or False?",
        "type": "radio",
        "options": [
          "True",
          "False"
        ],
        "answer": [
          1
        ],
        "explanation": "False. Internal audit scope is determined by management or the Audit Committee. Shareholders appoint External auditors. [cite: 172-175]"
      },
      {
        "id": 7,
        "question": "Who argued that the objectives of a company emerge as a consensus of the differing views of the stakeholders?",
        "type": "radio",
        "options": [
          "Mendelow",
          "John Lewis",
          "Cyert and March"
        ],
        "answer": [
          2
        ],
        "explanation": "Cyert and March proposed the behavioral theory of the firm involving stakeholder consensus. [cite: 181-185]"
      },
      {
        "id": 8,
        "question": "Peter is the team member who knows everyone and finds contacts. What Belbin role is this?",
        "type": "radio",
        "options": [
          "Specialist",
          "Resource Investigator",
          "Monitor Evaluator",
          "Completer Finisher"
        ],
        "answer": [
          1
        ],
        "explanation": "Resource Investigators are enthusiastic networkers who explore opportunities outside the team. [cite: 192-200]"
      },
      {
        "id": 9,
        "question": "Tuckman's Stages: In which stage do team members become interdependent?",
        "type": "radio",
        "options": [
          "Forming",
          "Storming",
          "Norming",
          "Performing"
        ],
        "answer": [
          3
        ],
        "explanation": "Interdependence and high productivity characterize the Performing stage. [cite: 222-236]"
      },
      {
        "id": 10,
        "question": "Maslow's Hierarchy: How is 'Security / Lack of threats' categorized?",
        "type": "radio",
        "options": [
          "Social",
          "Safety",
          "Esteem"
        ],
        "answer": [
          1
        ],
        "explanation": "Security and lack of physical threat fall under Safety needs. [cite: 239-248]"
      },
      {
        "id": 11,
        "question": "In the UK, what gives EU law the force of law in member states?",
        "type": "radio",
        "options": [
          "An Act of Parliament",
          "The Treaty on the Functioning of the EU"
        ],
        "answer": [
          0
        ],
        "explanation": "In the UK (a dualist state), an Act of Parliament (European Communities Act 1972) was required. [cite: 251-255]"
      },
      {
        "id": 12,
        "question": "According to McGregor, which is a belief of a Theory X Manager?",
        "type": "radio",
        "options": [
          "Employees seek responsibility",
          "The average employee dislikes work",
          "It is natural to make an effort"
        ],
        "answer": [
          1
        ],
        "explanation": "Theory X assumes workers are lazy. Theory Y assumes they are self-motivated. [cite: 281-289]"
      },
      {
        "id": 13,
        "question": "PEST Analysis: Growth, Monetary Policy, and Taxation refer to which factor?",
        "type": "radio",
        "options": [
          "Political",
          "Economic",
          "Social",
          "Technological"
        ],
        "answer": [
          1
        ],
        "explanation": "These are key macroeconomic variables. [cite: 292-298]"
      },
      {
        "id": 14,
        "question": "Kolb's Learning Cycle: A combination of 'watching' and 'thinking' produces which learning style?",
        "type": "radio",
        "options": [
          "Accommodating",
          "Diverging",
          "Converging",
          "Assimilating"
        ],
        "answer": [
          3
        ],
        "explanation": "Reflective Observation (Watching) + Abstract Conceptualization (Thinking) = Assimilating. [cite: 359-372]"
      },
      {
        "id": 15,
        "question": "In SMART objectives, 'R' stands for:",
        "type": "radio",
        "options": [
          "Realistic",
          "Reasonable",
          "Representative"
        ],
        "answer": [
          0
        ],
        "explanation": "Specific, Measurable, Achievable, Realistic, Time-bound. [cite: 396-400]"
      },
      {
        "id": 16,
        "question": "Which of the following CANNOT be used to describe a service?",
        "type": "radio",
        "options": [
          "Perishable",
          "Inseparable",
          "Tangible",
          "Variable"
        ],
        "answer": [
          2
        ],
        "explanation": "Services are intangible; they cannot be touched or stored. [cite: 406-414]"
      },
      {
        "id": 17,
        "question": "Who distinguished between acts of leadership and the authority/acceptance of a leader?",
        "type": "radio",
        "options": [
          "Mintzberg",
          "Heifetz",
          "Kotter"
        ],
        "answer": [
          1
        ],
        "explanation": "Heifetz distinguished between technical authority and adaptive leadership. [cite: 419-430]"
      },
      {
        "id": 18,
        "question": "According to Anthony, which is a strategic role?",
        "type": "checkbox",
        "options": [
          "Experts",
          "Coordinators",
          "Guardians",
          "Advisors"
        ],
        "answer": [
          2,
          3
        ],
        "explanation": "Guardians (governance) and Advisors (strategy formulation) are strategic roles. [cite: 435-447]"
      },
      {
        "id": 19,
        "question": "Who described culture as 'the collection of traditions, values, policies... a pervasive context'?",
        "type": "radio",
        "options": [
          "Schein",
          "Schwartz and Davis",
          "Mullins"
        ],
        "answer": [
          2
        ],
        "explanation": "This definition is attributed to Mullins. [cite: 451-453]"
      },
      {
        "id": 20,
        "question": "Handy's 'Power' culture has which TWO characteristics?",
        "type": "checkbox",
        "options": [
          "Lots of rules",
          "Quick to make decisions",
          "Lots of bureaucracy",
          "Succession problems"
        ],
        "answer": [
          1,
          3
        ],
        "explanation": "Power culture (Zeus) is central and fast but suffers from succession issues. [cite: 477-488]"
      },
      {
        "id": 21,
        "question": "Which theory states an organisation must align the interests of the agents to the principals?",
        "type": "radio",
        "options": [
          "Accommodation theory",
          "Agency theory",
          "Corporate theory"
        ],
        "answer": [
          1
        ],
        "explanation": "Agency theory addresses the Principal-Agent problem. [cite: 494-502]"
      },
      {
        "id": 22,
        "question": "The head of Treasury reports directly to the shareholders. True or False?",
        "type": "radio",
        "options": [
          "True",
          "False"
        ],
        "answer": [
          1
        ],
        "explanation": "False. The Treasurer typically reports to the Finance Director (CFO). [cite: 510-516]"
      },
      {
        "id": 23,
        "question": "Which TWO are organisations NOT formed with the intention of generating a profit?",
        "type": "checkbox",
        "options": [
          "Private Limited Company",
          "Public Limited Company",
          "Public Sector Organisation",
          "Non-governmental Organisations"
        ],
        "answer": [
          2,
          3
        ],
        "explanation": "Public sector bodies and NGOs have social or service objectives. [cite: 523-537]"
      },
      {
        "id": 24,
        "question": "Which stakeholder group do Non-Executive Directors (NEDs) belong to?",
        "type": "radio",
        "options": [
          "Internal stakeholders",
          "Connected stakeholders",
          "External stakeholders"
        ],
        "answer": [
          0
        ],
        "explanation": "NEDs are members of the board and thus Internal. [cite: 540-543]"
      },
      {
        "id": 25,
        "question": "The overall responsibility of compliance with Health and Safety lies with whom?",
        "type": "radio",
        "options": [
          "Employers (The Company)",
          "Employees",
          "Both"
        ],
        "answer": [
          0
        ],
        "explanation": "The Employer bears the ultimate legal duty. [cite: 567-570]"
      },
      {
        "id": 26,
        "question": "If household incomes rise and demand for a good falls, it is a:",
        "type": "radio",
        "options": [
          "Normal good",
          "Inferior good"
        ],
        "answer": [
          1
        ],
        "explanation": "Inferior goods are replaced by superior goods when income rises. [cite: 581-598]"
      },
      {
        "id": 27,
        "question": "Leavitt's Communication Patterns: A 5-member team where each communicates with only two others?",
        "type": "radio",
        "options": [
          "Circle",
          "Chain",
          "Y",
          "Wheel"
        ],
        "answer": [
          0
        ],
        "explanation": "In a Circle, members communicate only with immediate neighbors. [cite: 600-606]"
      },
      {
        "id": 28,
        "question": "Wrongful Dismissal: Which TWO statements are correct?",
        "type": "checkbox",
        "options": [
          "Minimum period of employment required",
          "Claim damages for breach of contract (notice)",
          "Only full-time employees can claim",
          "Damages calculated by notice period difference"
        ],
        "answer": [
          1,
          3
        ],
        "explanation": "Wrongful dismissal is a contract breach (usually notice). No minimum service needed. [cite: 617-625]"
      },
      {
        "id": 29,
        "question": "Joely bought faulty hair straighteners and returned them immediately. Who is responsible?",
        "type": "radio",
        "options": [
          "'AIR' (Manufacturer) is responsible",
          "J Ltd (Retailer) is responsible for partial refund",
          "J Ltd (Retailer) is responsible for full refund/replacement"
        ],
        "answer": [
          2
        ],
        "explanation": "Consumer rights are against the Retailer. Immediate rejection allows for a full refund. [cite: 655-667]"
      },
      {
        "id": 30,
        "question": "Workforce 84.2m, Unemployed 2.1m. Calculate unemployment rate.",
        "type": "radio",
        "options": [
          "1.50%",
          "2.00%",
          "2.50%"
        ],
        "answer": [
          2
        ],
        "explanation": "(2.1 / 84.2) * 100 = 2.49%. Rounds to 2.50%. [cite: 673-678]"
      },
      {
        "id": 31,
        "question": "Product X has Substitute Z and Complement Y. Which shifts X demand left (decrease)?",
        "type": "checkbox",
        "options": [
          "Increase in price of Substitute Z",
          "Decrease in price of Substitute Z",
          "Increase in price of Complement Y",
          "Decrease in price of Complement Y"
        ],
        "answer": [
          1,
          2
        ],
        "explanation": "Cheaper substitute Z steals demand from X. Expensive complement Y reduces demand for Y and X. [cite: 690-698]"
      },
      {
        "id": 32,
        "question": "Which statement about demand is TRUE?",
        "type": "radio",
        "options": [
          "Demand for inferior goods rises as income rises",
          "Demand for luxury goods falls as household incomes fall",
          "Demand for a product will fall if cost of its complement falls"
        ],
        "answer": [
          1
        ],
        "explanation": "Luxury goods are income elastic; demand drops significantly when income falls. [cite: 699-703]"
      },
      {
        "id": 33,
        "question": "Managers can communicate quickly with employees under them. Wide or Narrow span?",
        "type": "radio",
        "options": [
          "Wide span of control",
          "Narrow span of control"
        ],
        "answer": [
          0
        ],
        "explanation": "Wide span = Flat structure = fewer layers = faster vertical communication. [cite: 716-727]"
      },
      {
        "id": 34,
        "question": "It is the responsibility of the Secretary to ensure the agenda is clear. True or False?",
        "type": "radio",
        "options": [
          "True",
          "False"
        ],
        "answer": [
          0
        ],
        "explanation": "True. The Secretary prepares the agenda in consultation with the Chair. [cite: 732-737]"
      },
      {
        "id": 35,
        "question": "Corporate Governance: Which is NOT true for a listed company?",
        "type": "radio",
        "options": [
          "Must comply or explain",
          "Directors re-election at least every five years",
          "CEO and Chair cannot be same person"
        ],
        "answer": [
          1
        ],
        "explanation": "Directors of listed companies should generally submit for re-election annually or every 3 years. [cite: 739-745]"
      },
      {
        "id": 36,
        "question": "Preparing budgets is a responsibility of which function?",
        "type": "radio",
        "options": [
          "Financial Accounting",
          "Management Accounting",
          "Treasury"
        ],
        "answer": [
          1
        ],
        "explanation": "Budgeting and forecasting are core Management Accounting tasks. [cite: 747-758]"
      },
      {
        "id": 37,
        "question": "A collection of programs to enter, organise and select data in a database is?",
        "type": "radio",
        "options": [
          "DBMS",
          "EIS",
          "Spreadsheet"
        ],
        "answer": [
          0
        ],
        "explanation": "Database Management System. [cite: 767-769]"
      },
      {
        "id": 38,
        "question": "Price rises $32 to $36 (+12.5%). Demand falls 4500 to 3600 (-20%). Calculate PED.",
        "type": "radio",
        "options": [
          "-1.6",
          "-2.0",
          "+2.0"
        ],
        "answer": [
          0
        ],
        "explanation": "PED = -20% / 12.5% = -1.6. [cite: 773-781]"
      },
      {
        "id": 39,
        "question": "Mintzberg: Which component advises the operating core (standardisation)?",
        "type": "radio",
        "options": [
          "Strategic apex",
          "Middle line",
          "Technostructure"
        ],
        "answer": [
          2
        ],
        "explanation": "The Technostructure (analysts/planners) standardises work processes. [cite: 783-786]"
      },
      {
        "id": 40,
        "question": "External auditors are appointed by whom?",
        "type": "radio",
        "options": [
          "Chief Executive",
          "Shareholders",
          "Audit Committee"
        ],
        "answer": [
          1
        ],
        "explanation": "Appointed by Shareholders at the AGM. [cite: 801-802]"
      },
      {
        "id": 41,
        "question": "Jack advises new recruits on indirect work topics. He is a:",
        "type": "radio",
        "options": [
          "Coach",
          "Mentor",
          "Counsellor"
        ],
        "answer": [
          1
        ],
        "explanation": "Mentoring involves holistic, long-term career and personal support. [cite: 814-821]"
      },
      {
        "id": 42,
        "question": "Sophia asks for copies of all information held about her. This is:",
        "type": "radio",
        "options": [
          "Freedom of subject access",
          "Right of subject access"
        ],
        "answer": [
          1
        ],
        "explanation": "A Subject Access Request (SAR) is a right under data protection law. [cite: 823-827]"
      },
      {
        "id": 43,
        "question": "Data Security: Best measures to prevent unauthorised disclosure on laptops? (Select TWO)",
        "type": "checkbox",
        "options": [
          "Off-site backups",
          "Training users",
          "Encryption",
          "Validation"
        ],
        "answer": [
          1,
          2
        ],
        "explanation": "Encryption protects data if stolen. Training reduces human error. [cite: 829-841]"
      },
      {
        "id": 101,
        "question": "Which of the following statements regarding the age diversity of the workforce is true?",
        "type": "radio",
        "options": [
          "An ageing population will lead to a larger supply of labour",
          "Older workers are less committed to the organisation",
          "Older workers are less likely to be absent than younger workers"
        ],
        "answer": [
          2
        ],
        "explanation": "Older workers generally have lower absenteeism and higher retention rates."
      },
      {
        "id": 102,
        "question": "Which of the following is NOT a benefit of a matrix structure?",
        "type": "radio",
        "options": [
          "Flexibility",
          "Dual authority",
          "Improved communication"
        ],
        "answer": [
          1
        ],
        "explanation": "Dual authority (two bosses) is a disadvantage causing conflict."
      },
      {
        "id": 103,
        "question": "Which of the following is a feature of a public limited company (plc)?",
        "type": "radio",
        "options": [
          "Shares can be sold to the general public",
          "Directors must be shareholders",
          "There is no minimum capital requirement"
        ],
        "answer": [
          0
        ],
        "explanation": "PLCs can list on the stock exchange and sell to the public."
      },
      {
        "id": 104,
        "question": "The supply curve for a product shifts to the right. Which of the following could have caused this?",
        "type": "radio",
        "options": [
          "A rise in production costs",
          "A fall in production costs",
          "A rise in consumer income"
        ],
        "answer": [
          1
        ],
        "explanation": "Rightward shift = Increase in supply. Lower costs allow firms to supply more."
      },
      {
        "id": 105,
        "question": "A product has a PED of -2.5. If price rises by 10%, what happens to demand?",
        "type": "radio",
        "options": [
          "Falls by 25%",
          "Rises by 25%",
          "Falls by 4%"
        ],
        "answer": [
          0
        ],
        "explanation": "-2.5 * 10% = -25%. Demand falls by 25%."
      },
      {
        "id": 106,
        "question": "Which of the following is a fiscal policy measure?",
        "type": "radio",
        "options": [
          "Interest rates",
          "Money supply",
          "Taxation"
        ],
        "answer": [
          2
        ],
        "explanation": "Taxation and Government spending are Fiscal. Interest rates are Monetary."
      },
      {
        "id": 107,
        "question": "Data Protection: Responsibility of the 'Data Controller'?",
        "type": "radio",
        "options": [
          "Processing data on behalf of client",
          "Determining the purposes and means of processing",
          "Ensuring encryption"
        ],
        "answer": [
          1
        ],
        "explanation": "The Controller determines the 'why' and 'how'. The Processor acts on their behalf."
      },
      {
        "id": 108,
        "question": "Marketing Mix: 'Place' is concerned with:",
        "type": "radio",
        "options": [
          "Location of HQ",
          "Distribution channels",
          "Packaging"
        ],
        "answer": [
          1
        ],
        "explanation": "Place refers to distribution and logistics."
      },
      {
        "id": 109,
        "question": "Mintzberg: Part of organisation concerned with standardisation of processes?",
        "type": "radio",
        "options": [
          "Strategic Apex",
          "Operating Core",
          "Technostructure"
        ],
        "answer": [
          2
        ],
        "explanation": "Technostructure (analysts) standardises work."
      },
      {
        "id": 110,
        "question": "Porter's Value Chain: Which is a 'Primary Activity'?",
        "type": "radio",
        "options": [
          "Procurement",
          "Technology Development",
          "Outbound Logistics"
        ],
        "answer": [
          2
        ],
        "explanation": "Inbound, Operations, Outbound, Marketing, Service are Primary."
      },
      {
        "id": 111,
        "question": "SWOT: 'Opportunities' are:",
        "type": "radio",
        "options": [
          "Internal strengths",
          "External factors for advantage",
          "Internal weaknesses"
        ],
        "answer": [
          1
        ],
        "explanation": "Opportunities and Threats are External."
      },
      {
        "id": 112,
        "question": "Hofstede: 'Power Distance' is:",
        "type": "radio",
        "options": [
          "Acceptance of unequal power distribution",
          "Avoidance of uncertainty",
          "Preference for individualism"
        ],
        "answer": [
          0
        ],
        "explanation": "Power Distance is the extent to which less powerful members accept inequality."
      },
      {
        "id": 113,
        "question": "Benefit of outsourcing?",
        "type": "radio",
        "options": [
          "Loss of control",
          "Access to specialist skills",
          "Risk to confidentiality"
        ],
        "answer": [
          1
        ],
        "explanation": "Access to expertise not available in-house is a key benefit."
      },
      {
        "id": 114,
        "question": "Positive cross elasticity (XED) means goods are:",
        "type": "radio",
        "options": [
          "Substitutes",
          "Complements",
          "Inferior"
        ],
        "answer": [
          0
        ],
        "explanation": "If Price A goes up, Demand B goes up (consumers switch). They are substitutes."
      },
      {
        "id": 115,
        "question": "Characteristic of Perfect Competition:",
        "type": "radio",
        "options": [
          "Few large sellers",
          "High barriers to entry",
          "Many small buyers/sellers"
        ],
        "answer": [
          2
        ],
        "explanation": "Many participants, homogenous products, perfect information."
      },
      {
        "id": 116,
        "question": "Minimum price (floor) set ABOVE equilibrium results in:",
        "type": "radio",
        "options": [
          "Excess demand",
          "Excess supply",
          "Equilibrium"
        ],
        "answer": [
          1
        ],
        "explanation": "High price encourages supply but discourages demand -> Surplus (Excess supply)."
      },
      {
        "id": 117,
        "question": "Tuckman: Stage where conflicts and confrontations arise?",
        "type": "radio",
        "options": [
          "Forming",
          "Storming",
          "Norming"
        ],
        "answer": [
          1
        ],
        "explanation": "Storming is the conflict stage."
      },
      {
        "id": 118,
        "question": "Belbin role: 'Challenging, dynamic, thrives on pressure'?",
        "type": "radio",
        "options": [
          "Plant",
          "Shaper",
          "Coordinator"
        ],
        "answer": [
          1
        ],
        "explanation": "The Shaper drives the team and overcomes obstacles."
      },
      {
        "id": 119,
        "question": "'Teeming and lading' is fraud involving:",
        "type": "radio",
        "options": [
          "Theft of inventory",
          "Theft of cash concealed by delaying recording receipts"
        ],
        "answer": [
          1
        ],
        "explanation": "Hiding a theft of cash by using subsequent receipts to cover the gap."
      },
      {
        "id": 120,
        "question": "'Layering' in money laundering involves:",
        "type": "radio",
        "options": [
          "Placement",
          "Moving money to disguise origin",
          "Integration"
        ],
        "answer": [
          1
        ],
        "explanation": "Layering is the complex movement of funds to separate them from the crime."
      },
      {
        "id": 121,
        "question": "Definition of Prime Cost:",
        "type": "radio",
        "options": [
          "Direct Material + Direct Labour + Direct Expenses",
          "Total Production Cost",
          "Variable Overheads"
        ],
        "answer": [
          0
        ],
        "explanation": "Prime Cost is the sum of all Direct costs."
      },
      {
        "id": 122,
        "question": "'Span of Control' refers to:",
        "type": "radio",
        "options": [
          "Number of employees in firm",
          "Number of subordinates reporting directly to a manager"
        ],
        "answer": [
          1
        ],
        "explanation": "Direct reports equal the span."
      },
      {
        "id": 123,
        "question": "Responsibility of Audit Committee:",
        "type": "radio",
        "options": [
          "Reviewing internal financial controls",
          "Managing operations",
          "Hiring staff"
        ],
        "answer": [
          0
        ],
        "explanation": "Oversight of controls and reporting."
      },
      {
        "id": 124,
        "question": "Internal Auditor typically reports to:",
        "type": "radio",
        "options": [
          "CEO",
          "Finance Director",
          "Audit Committee"
        ],
        "answer": [
          2
        ],
        "explanation": "Reporting to the Audit Committee ensures independence from the management they audit."
      },
      {
        "id": 125,
        "question": "Cyclical unemployment is caused by:",
        "type": "radio",
        "options": [
          "Lack of aggregate demand",
          "Skills mismatch",
          "Seasonal fluctuations"
        ],
        "answer": [
          0
        ],
        "explanation": "Cyclical (Keynesian) unemployment is due to economic recession (low demand)."
      }
    ]
  }
];

// Build 3 new 50-question ACCA BT tests from the 2024-2025 question bank provided in bt_bank_2024.js
const buildAccaBt2024Sets = () => {
  if (!btBank2024?.questions?.length) return [];
  const chunkSize = 50;
  return Array.from({ length: 3 }, (_, idx) => {
    const start = idx * chunkSize;
    const slice = btBank2024.questions.slice(start, start + chunkSize);
    return {
      id: `acca-bt-2024-set-${idx + 1}`,
      title: `ACCA BT 2024 Mock - Set ${idx + 1}`,
      category: 'acca-bt',
      durationMinutes: 120,
      questions: slice.map((q) => {
        const answer = [];
        q.answerOptions.forEach((opt, i) => {
          if (opt.isCorrect) answer.push(i);
        });
        const explanation =
          q.answerOptions.find((opt) => opt.isCorrect && opt.rationale)?.rationale || '';
        return {
          id: q.questionNumber,
          question: q.question,
          type: answer.length > 1 ? 'checkbox' : 'radio',
          options: q.answerOptions.map((opt) => opt.text),
          answer,
          explanation
        };
      })
    };
  });
};

tests.push(...buildAccaBt2024Sets());

// New 2023-24 mock set (52 questions provided)
tests.push({
  id: 'bt-mock-2qs-2023-24',
  title: 'BT Mock 2-Qs - 2023-24',
  category: 'acca-bt',
  durationMinutes: 120,
  questions: [
    {
      id: 1,
      question: "According to Fiedler, which of the managers are 'psychologically close managers'?",
      type: 'radio',
      options: [
        "A. Olga and Lilia",
        "B. Petr and Lilia",
        "C. Petr only",
        "D. Lilia only"
      ],
      answer: [1],
      explanation: "Psychologically close managers (high LPC) are relationship-oriented; Petr and Lilia fit, Olga does not."
    },
    {
      id: 2,
      question: "According to Herzberg's two-factor theory, which elements provide long-term motivation at SportLand?",
      type: 'checkbox',
      options: [
        "Competitive salaries and free family use of gym facilities",
        "Technical and personal skills training programmes",
        "Safe and pleasant working conditions",
        "Personal supervision and counselling"
      ],
      answer: [1],
      explanation: "Only Motivators (growth/training) drive long-term motivation; the rest are hygiene factors."
    },
    {
      id: 3,
      question: "Which of the following would achieve cost leadership?",
      type: 'radio',
      options: [
        "Products are of superior quality",
        "Purchasing/production match competitor quality at lower price",
        "Inferior 'cheap and cheerful' products",
        "Prices slightly above competitors"
      ],
      answer: [1],
      explanation: "Cost leadership keeps equivalent quality while producing at lower cost, enabling lower prices or higher margins."
    },
    {
      id: 4,
      question: "Which factors could influence the culture of an organisation?",
      type: 'checkbox',
      options: [
        "Industry and external environment",
        "Directors, executives and senior managers",
        "History of the organisation",
        "Information systems and technology used"
      ],
      answer: [0, 1, 2, 3],
      explanation: "Culture is shaped by history, leadership, environment, and technology/systems."
    },
    {
      id: 5,
      question: "Which could raise ethical issues for a sports manufacturer?",
      type: 'checkbox',
      options: [
        "Sourcing of production materials",
        "Quality of raw materials and products",
        "Advertising of products and logo",
        "Working conditions, recruitment, pay and age of employees"
      ],
      answer: [0, 1, 2, 3],
      explanation: "All listed items present ethical risks (sourcing, quality, advertising integrity, labor conditions)."
    },
    {
      id: 6,
      question: "Tax exemptions on dividends/interest to encourage investment most affect which function?",
      type: 'radio',
      options: [
        "Treasury",
        "Management accounting",
        "Financial accounting"
      ],
      answer: [0],
      explanation: "Treasury manages investments and funding strategy affected by tax incentives."
    },
    {
      id: 7,
      question: "Which internal control change is least effective if staff collude with suppliers?",
      type: 'radio',
      options: [
        "Regular supplier value reviews",
        "Improved PO authorisation policy",
        "Sequential numbering of transaction documents",
        "Increased physical security over received goods"
      ],
      answer: [2],
      explanation: "Numbering ensures completeness but not authenticity; collusion can bypass it."
    },
    {
      id: 8,
      question: "What communication pattern is described (central figure receives and returns information)?",
      type: 'radio',
      options: [
        "Circle",
        "Wheel",
        "All channel"
      ],
      answer: [1],
      explanation: "A Wheel has a central hub (the CEO) through which all communication flows."
    },
    {
      id: 9,
      question: "Poor quality lateral communication will result in which of the following?",
      type: 'radio',
      options: [
        "Lack of direction",
        "Lack of coordination",
        "Lack of delegation"
      ],
      answer: [1],
      explanation: "Lateral breakdown creates silos and poor coordination between peers/departments."
    },
    {
      id: 10,
      question: "Which TWO orientations are complementary rather than opposing?",
      type: 'checkbox',
      options: [
        "Sales",
        "Marketing",
        "Product",
        "Production"
      ],
      answer: [0, 3],
      explanation: "Production and Sales orientations both emphasize pushing existing output to market."
    },
    {
      id: 11,
      question: "Who has ultimate responsibility for a sound system of internal control?",
      type: 'radio',
      options: [
        "Board of directors",
        "Audit committee",
        "Finance department",
        "Internal audit team"
      ],
      answer: [0],
      explanation: "The Board owns overall responsibility; committees and teams support/monitor."
    },
    {
      id: 12,
      question: "Which is closely associated with classical economic theory?",
      type: 'radio',
      options: [
        "Keynesian",
        "Interventionist",
        "Laissez-faire"
      ],
      answer: [2],
      explanation: "Classical theory favors minimal intervention: laissez-faire."
    },
    {
      id: 13,
      question: "Purpose of substantive tests in external audit?",
      type: 'radio',
      options: [
        "Identify causes of errors/omissions",
        "Establish internal controls operate",
        "Verify financial statements agree with assertions"
      ],
      answer: [2],
      explanation: "Substantive tests check figures/transactions against management assertions to detect misstatements."
    },
    {
      id: 14,
      question: "Which factor most affects behaviour/performance at work?",
      type: 'radio',
      options: [
        "Perception",
        "Relationships with colleagues",
        "Remuneration level"
      ],
      answer: [0],
      explanation: "Perception is one of the key individual differences influencing behaviour."
    },
    {
      id: 15,
      question: "Organisational arrangement described (grapevine/rumor reliance) is characteristic of:",
      type: 'radio',
      options: [
        "Centralisation",
        "Informal organisation",
        "Decentralisation",
        "Empowerment"
      ],
      answer: [1],
      explanation: "Informal organisation relies on unofficial social networks and grapevine communication."
    },
    {
      id: 16,
      question: "Porter's five forces: proprietary accessories for T4 Mobile respond to which force?",
      type: 'radio',
      options: [
        "Bargaining power of suppliers",
        "Bargaining power of customers",
        "Intensity of competitive rivalry",
        "Threat of new entrants"
      ],
      answer: [1],
      explanation: "Proprietary ecosystem raises switching costs, reducing customer bargaining power."
    },
    {
      id: 17,
      question: "Contingency approach managers believe:",
      type: 'radio',
      options: [
        "Success depends on economic circumstances",
        "Effective management is about managing people",
        "Lessons of earlier theorists should be adapted to circumstances",
        "Managing change depends on clear vision"
      ],
      answer: [2],
      explanation: "Contingency theory: no one best way; adapt methods to the situation."
    },
    {
      id: 18,
      question: "Belbin team roles displayed by Olga and Kim?",
      type: 'radio',
      options: [
        "Shaper / Plant",
        "Monitor evaluator / Shaper",
        "Resource investigator / Monitor evaluator",
        "Plant / Resource investigator"
      ],
      answer: [2],
      explanation: "Olga networks (Resource Investigator); Kim is analytical (Monitor Evaluator)."
    },
    {
      id: 19,
      question: "Best distinction between a group and a team?",
      type: 'radio',
      options: [
        "Groups >10 cannot become teams",
        "Teams always have commonality; groups may not",
        "Formality of interaction and shared task requirement"
      ],
      answer: [2],
      explanation: "Teams are defined by interdependent interaction around a shared goal."
    },
    {
      id: 20,
      question: "Maslow: upgrading Sasha to First Class affects which need?",
      type: 'radio',
      options: [
        "Safety and security",
        "Ego and esteem",
        "Social activity",
        "Physiological"
      ],
      answer: [1],
      explanation: "Upgrade confers status/recognition, satisfying esteem needs."
    },
    {
      id: 21,
      question: "Which characteristic likely led Dima to a wrong decision?",
      type: 'radio',
      options: [
        "Timeliness",
        "Consideration",
        "Courtesy",
        "Cost benefit"
      ],
      answer: [0],
      explanation: "Acting too early without updated info makes the decision untimely."
    },
    {
      id: 22,
      question: "To what type of information system does 'drill down' usually apply?",
      type: 'radio',
      options: [
        "Decision support systems (DSS)",
        "Executive support systems (ESS)",
        "Transaction processing system (TPS)",
        "Knowledge work systems (KWS)"
      ],
      answer: [1],
      explanation: "ESS dashboards allow drill-down from summaries to detail."
    },
    {
      id: 23,
      question: "Which software application is suitable for 'what-if' analysis?",
      type: 'radio',
      options: [
        "Graphics software",
        "Word processing",
        "Database management systems (DBMS)",
        "Spreadsheets"
      ],
      answer: [3],
      explanation: "Spreadsheets are the standard tool for modeling and what-if scenarios."
    },
    {
      id: 24,
      question: "Which data protection principle is applied to the use of cookies?",
      type: 'radio',
      options: [
        "Adequate, relevant and not excessive",
        "Obtained only for specified purposes",
        "Accurate and kept up to date",
        "Processed fairly and lawfully"
      ],
      answer: [3],
      explanation: "Consent/awareness make processing fair and lawful; hidden tracking breaches this."
    },
    {
      id: 25,
      question: "Prices in near perfect market: identify true/false statements.",
      type: 'radio',
      options: [
        "Min price above equilibrium leads to surplus; price above equilibrium causes shortage",
        "Min price above equilibrium leads to surplus; price above equilibrium causes surplus"
      ],
      answer: [1],
      explanation: "Price floors above equilibrium create surplus; prices above equilibrium also cause surplus, not shortage."
    },
    {
      id: 26,
      question: "Price elasticity statements:",
      type: 'radio',
      options: [
        "Elasticity >1 is price insensitive; inelastic demand + price fall lowers revenue",
        "Elasticity >1 is price sensitive; inelastic demand + price fall lowers revenue"
      ],
      answer: [1],
      explanation: "Elasticity >1 means sensitive; with inelastic demand, lowering price reduces revenue."
    },
    {
      id: 27,
      question: "Which country is in the recovery phase of its trade cycle?",
      type: 'radio',
      options: [
        "South (declining GDP)",
        "East (stable rate of growth)",
        "North (slowdown in employment growth)",
        "West (increasing inflationary pressures)"
      ],
      answer: [1],
      explanation: "Stable resumed growth indicates recovery/expansion."
    },
    {
      id: 28,
      question: "Which action likely raises long-term economic welfare?",
      type: 'radio',
      options: [
        "Tax on emissions",
        "Tax on all products involving pollution",
        "Total ban on polluting activities",
        "Leave to free market"
      ],
      answer: [0],
      explanation: "Taxing emissions internalizes externality without halting activity."
    },
    {
      id: 29,
      question: "Complete the sentence: \"[Name]'s hierarchy of needs attempts to explain how individuals start, ___ and direct behavior.\"",
      type: 'radio',
      options: [
        "Maslow's, sustain",
        "McGregor's, correct",
        "Maslow's, pursue"
      ],
      answer: [0],
      explanation: "Standard phrasing: start, direct, and sustain; linked to Maslow."
    },
    {
      id: 30,
      question: "Which is an example of behaviourist learning?",
      type: 'radio',
      options: [
        "Foreign language students drilling via mobile practice",
        "Students making mind maps and mnemonics",
        "Trainees in work-based simulations"
      ],
      answer: [0],
      explanation: "Behaviorist learning emphasizes repetition/drill stimulus-response."
    },
    {
      id: 31,
      question: "Which control prevents despatch to a customer unlikely to pay?",
      type: 'radio',
      options: [
        "Authorise customer credit limit before despatch",
        "Segregate duties for ordering/despatch/invoicing",
        "Pre-number sales orders",
        "Require payment before despatch"
      ],
      answer: [0],
      explanation: "Checking credit limit addresses credit risk directly."
    },
    {
      id: 32,
      question: "Which circumstance would cause an auditor to modify (qualify) their opinion?",
      type: 'radio',
      options: [
        "Material error not corrected",
        "Material errors found then adjusted",
        "No approval of financial statements by directors",
        "True and fair view"
      ],
      answer: [0],
      explanation: "Uncorrected material misstatement leads to a modified opinion."
    },
    {
      id: 33,
      question: "Tuckman stage likely on return to finish the match (conflict/criticism)?",
      type: 'radio',
      options: [
        "Forming",
        "Storming",
        "Norming",
        "Performing"
      ],
      answer: [1],
      explanation: "Conflict and division indicate Storming."
    },
    {
      id: 34,
      question: "Aspect of the NED scrutiny role?",
      type: 'radio',
      options: [
        "Monitoring adequacy of internal controls",
        "Holding executive directors to account for decisions/performance",
        "Contributing expertise",
        "Overseeing appointments"
      ],
      answer: [1],
      explanation: "Scrutiny = challenge/hold executives accountable."
    },
    {
      id: 35,
      question: "Example of a supra-national body?",
      type: 'radio',
      options: [
        "International Criminal Court (ICC)",
        "Alliance of international airlines",
        "World Wildlife Fund"
      ],
      answer: [0],
      explanation: "ICC has authority across nations; others are alliances/NGOs."
    },
    {
      id: 36,
      question: "Time management: high urgency but low importance tasks are:",
      type: 'radio',
      options: [
        "Wasted time",
        "Distraction",
        "Quality time"
      ],
      answer: [1],
      explanation: "Urgent/not important tasks are distractions (Covey matrix)."
    },
    {
      id: 37,
      question: "Carroll's CSR pyramid includes which four responsibilities?",
      type: 'checkbox',
      options: [
        "Economic",
        "Environmental",
        "Ethical",
        "Financial",
        "Health and safety",
        "Legal",
        "Development",
        "Philanthropic",
        "Social"
      ],
      answer: [0, 2, 5, 7],
      explanation: "Carroll: Economic, Legal, Ethical, Philanthropic."
    },
    {
      id: 38,
      question: "Best description of empowerment:",
      type: 'radio',
      options: [
        "Ability to make meaningful analysis",
        "Openness, straightforwardness and honesty",
        "Process of enabling autonomous thinking",
        "Three-dimensional ethical value"
      ],
      answer: [2],
      explanation: "Empowerment gives autonomy/authority to act and think independently."
    },
    {
      id: 39,
      question: "Horizontal extension of a job to increase task variety is:",
      type: 'radio',
      options: [
        "Job description",
        "Job evaluation",
        "Job enlargement",
        "Job enrichment"
      ],
      answer: [2],
      explanation: "Job enlargement adds similar-level tasks (horizontal)."
    },
    {
      id: 40,
      question: "Anthony's Hierarchy: board report with competitor summaries and long-term KPIs is:",
      type: 'radio',
      options: [
        "Strategic",
        "Tactical",
        "Operational"
      ],
      answer: [0],
      explanation: "Board-level, long-term, external-facing info is strategic."
    },
    {
      id: 41,
      question: "What type of appraisal is an online client survey ranking service?",
      type: 'radio',
      options: [
        "Top-down",
        "Self-appraisal",
        "Sideways",
        "External/Customer appraisal"
      ],
      answer: [3],
      explanation: "Feedback from clients is external (customer) appraisal."
    },
    {
      id: 42,
      question: "Main barriers to entry in Hotstuff's industry?",
      type: 'checkbox',
      options: [
        "Access to distribution channels",
        "Supplier concentration",
        "Economies of scale",
        "Industry growth rate"
      ],
      answer: [0, 2],
      explanation: "Supermarket distribution access and economies of scale are key barriers."
    },
    {
      id: 43,
      question: "Verification and validation are what category of controls?",
      type: 'radio',
      options: [
        "Detective controls",
        "Preventative controls",
        "Corrective controls"
      ],
      answer: [1],
      explanation: "Performed at input to prevent errors entering the system."
    },
    {
      id: 44,
      question: "Public interest actions: classify as YES/NO.",
      type: 'checkbox',
      options: [
        "Auditor discloses whistleblower identity",
        "Pilot discloses unsafe practices",
        "Auditor reports material fraud to Charity Commission",
        "Accountant reports fraudulent accounting to stock exchange regulator"
      ],
      answer: [1, 2, 3],
      explanation: "Only revealing a whistleblower's identity is not in public interest; others are."
    },
    {
      id: 45,
      question: "Time management: alternative name for procrastination?",
      type: 'radio',
      options: [
        "Fire-fighting",
        "Prioritising",
        "Paralysis by planning",
        "Paperwork"
      ],
      answer: [2],
      explanation: "Over-planning that delays action is procrastination ('paralysis by planning')."
    },
    {
      id: 46,
      question: "Purpose of organisational controls best summarised by:",
      type: 'radio',
      options: [
        "Carry out management directions",
        "Ensure processes are efficient/effective",
        "Ensure correct processing of transactions",
        "Prevent fraud/error, ensure efficient resource use, ensure valid information"
      ],
      answer: [3],
      explanation: "Option D captures COSO objectives of internal control."
    },
    {
      id: 47,
      question: "Training Needs Analysis tasks (choose the best overall set).",
      type: 'checkbox',
      options: [
        "Identify stages: Appraisals, Strategy",
        "Identify reactive needs: Complaints, Poor Supervision",
        "Recommend training: MBA, Mentoring, Induction, Webinars/CPD",
        "Include legislation and new services as reactive only"
      ],
      answer: [0, 1, 2],
      explanation: "Stages include appraisals/strategy; reactive needs include complaints/supervision; recommended training spans MBA, mentoring, induction, CPD."
    },
    {
      id: 48,
      question: "Corporate Code of Ethics (JHG) tasks: pick correct mappings.",
      type: 'checkbox',
      options: [
        "Jenny = Normative",
        "Alan = Instrumental",
        "Code topic = Environmental responsibilities",
        "Code topic = Shareholder representation only"
      ],
      answer: [0, 1, 2],
      explanation: "Jenny follows values (normative); Alan is profit-driven (instrumental); scenario points to environmental responsibilities."
    },
    {
      id: 49,
      question: "Stakeholders (Kilda Company) tasks.",
      type: 'checkbox',
      options: [
        "Tax Authority: High Power / High Interest (Key Player)",
        "Stakeholder: any group who can affect/be affected",
        "Tax Authority classification: External",
        "Tax Authority classification: Connected"
      ],
      answer: [0, 1, 2],
      explanation: "Tax authority is a key player, fits Freeman definition of stakeholder, and is an external stakeholder."
    },
    {
      id: 50,
      question: "Audit Committee tasks (select correct statements).",
      type: 'checkbox',
      options: [
        "Chairman should not chair audit committee",
        "Committee monitors integrity of FS",
        "Committee assesses internal audit",
        "Committee appoints external auditor directly"
      ],
      answer: [0, 1, 2],
      explanation: "Chair should not chair; the committee monitors statements and IA but recommends (does not appoint) external auditor."
    },
    {
      id: 51,
      question: "Information Systems tasks.",
      type: 'checkbox',
      options: [
        "Executives use ESS",
        "Junior accountants use TPS",
        "Researchers use KWS",
        "Consultants use DSS",
        "SMART excludes Reasonable and Attainable (vs Achievable/Relevant/Time-bound)"
      ],
      answer: [0, 1, 2, 3, 4],
      explanation: "Role-to-system matches listed; in SMART, Reasonable/Attainable are not the standard strict terms."
    },
    {
      id: 52,
      question: "Fraud tasks (select correct statements).",
      type: 'checkbox',
      options: [
        "Employee theft of entrusted funds is embezzlement",
        "Fraud is harder to detect than error (True)",
        "Internal control guarantees prevention of all errors (False)",
        "Background checks/daily counts deter fraud"
      ],
      answer: [0, 1, 3],
      explanation: "Embezzlement fits entrusted funds; fraud harder than error; controls can't guarantee prevention; checks/counts deter."
    }
  ]
});

// New BT Mock 1 (additional set from provided question list)
tests.push({
  id: 'bt-mock-1-legacy',
  title: 'BT Mock 1',
  category: 'acca-bt',
  durationMinutes: 120,
  questions: [
    {
      id: 1,
      question: 'Classify the following as either injections into or withdrawals from the economy.',
      type: 'checkbox',
      options: [
        'Export income (Injection)',
        'Taxation (Withdrawal)',
        'Government spending (Injection)',
        'Saving (Withdrawal)'
      ],
      answer: [0, 1, 2, 3],
      explanation: 'Injections: Exports, Investment, Government Spending. Withdrawals: Savings, Taxation, Imports.'
    },
    {
      id: 2,
      question: 'Managers should ignore the informal organisation when making decisions. True or False?',
      type: 'radio',
      options: ['True', 'False'],
      answer: [1],
      explanation: 'Informal networks influence morale, communication, and change adoption; they must be considered.'
    },
    {
      id: 3,
      question: "Blake and Mouton: manager high people/low results style is called:",
      type: 'radio',
      options: ['Country Club', 'Impoverished', 'Middle of the Road', 'Team'],
      answer: [0],
      explanation: 'High concern for people, low concern for production = Country Club (1,9).'
    },
    {
      id: 4,
      question: "Which is NOT in Maslow's hierarchy?",
      type: 'radio',
      options: ['Growth', 'Self-actualisation', 'Physiological'],
      answer: [0],
      explanation: "Maslow’s levels: Physiological, Safety, Social, Esteem, Self-actualisation. ‘Growth’ is Alderfer’s term."
    },
    {
      id: 5,
      question: "Herzberg: which two are NOT motivation factors?",
      type: 'checkbox',
      options: ['Annual salary and bonus', 'Job security', 'Responsibility', 'Promotion'],
      answer: [0, 1],
      explanation: 'Salary and job security are hygiene factors; responsibility and promotion are motivators.'
    },
    {
      id: 6,
      question: 'Kolb: sensitive, imaginative, people-focused, likes groups. Preferred style?',
      type: 'radio',
      options: ['Accommodating', 'Diverging', 'Converging', 'Assimilating'],
      answer: [1],
      explanation: 'Diverging (feeling + watching) fits that description.'
    },
    {
      id: 7,
      question: 'Complete: Employees are ___ stakeholders; finance providers are ___ stakeholders.',
      type: 'radio',
      options: ['Internal / Connected', 'Internal / External', 'Connected / External'],
      answer: [0],
      explanation: 'Employees are internal; finance providers have contractual ties (connected).'
    },
    {
      id: 8,
      question: 'Under which categories would you expect to find pressure groups?',
      type: 'radio',
      options: ['External and Secondary', 'Internal and Primary', 'Connected and Primary'],
      answer: [0],
      explanation: 'Pressure groups are external, typically secondary stakeholders.'
    },
    {
      id: 9,
      question: 'Handy culture: Anya thinks she is superior to the firm; hard to manage. Which culture?',
      type: 'radio',
      options: ['Power', 'Role', 'Task', 'Person'],
      answer: [3],
      explanation: 'Person culture centers on individuals (consultants/professionals).'
    },
    {
      id: 10,
      question: 'Mendelow: which stakeholders should A Ltd involve? (Janet: 75% turnover, Amy: 60% ownership, Jack: reporter)',
      type: 'checkbox',
      options: ['Janet', 'Amy', 'Jack'],
      answer: [0, 1],
      explanation: 'High power & interest: key players Janet and Amy.'
    },
    {
      id: 11,
      question: 'Small dispersed shareholders (high power, low day-to-day interest) fall under which strategy?',
      type: 'radio',
      options: ['Minimal effort', 'Keep informed', 'Keep satisfied', 'Key players'],
      answer: [2],
      explanation: 'High power/low interest => keep satisfied.'
    },
    {
      id: 12,
      question: 'Rising rates, planning hard, wealth shifts from receivables to payables. Main factor?',
      type: 'radio',
      options: ['Inflation', 'Deflation', 'Stagnation', 'Unemployment'],
      answer: [0],
      explanation: 'Inflation erodes receivables, helps borrowers; often followed by rate hikes.'
    },
    {
      id: 13,
      question: 'Cheaper flights to Berlin: most likely outcomes?',
      type: 'checkbox',
      options: [
        'Demand for Berlin hotel rooms falls',
        'Demand for Berlin hotel rooms rises',
        'Rival airline cuts its Berlin prices',
        'Rival airline raises its Berlin prices'
      ],
      answer: [1, 2],
      explanation: 'Flights/hotels are complements (hotel demand rises); substitutes respond by cutting price.'
    },
    {
      id: 14,
      question: 'Few managers, wide span, quick decisions, more fraud risk: what chain?',
      type: 'radio',
      options: ['Long scalar chain', 'Short scalar chain', 'Centralised', 'Decentralised'],
      answer: [1],
      explanation: 'A short scalar chain = flat, wide spans.'
    },
    {
      id: 15,
      question: "Anthony's hierarchy, operational level: which statement is NOT true?",
      type: 'radio',
      options: [
        'Providers ensure infrastructure available',
        'Customers are the beneficiaries',
        'More efficient customers mean lower org spend'
      ],
      answer: [2],
      explanation: 'Customers consume, not supply efficiency to the organisation.'
    },
    {
      id: 16,
      question: 'Identify TRUE/FALSE statements on audit roles/tests.',
      type: 'radio',
      options: [
        'External audit reports errors to shareholders; IA reports to Finance Director; compliance tests seek control evidence; substantive tests find misstatements'
      ],
      answer: [0],
      explanation: 'Only FD reporting is false; IA should report to Audit Committee.'
    },
    {
      id: 17,
      question: 'PEST - Political metric for a bus company?',
      type: 'radio',
      options: [
        'Tracking devices (Technology)',
        'Economic environment (Economic)',
        'Fuel tax/congestion/environmental charges (Political)',
        'Forecast car usage (Economic/Social)'
      ],
      answer: [2],
      explanation: 'Government taxes/charges are Political factors.'
    },
    {
      id: 18,
      question: "Leavitt: fastest communication pattern?",
      type: 'radio',
      options: ['Circle', 'Y', 'Square', 'Wheel'],
      answer: [3],
      explanation: 'Wheel puts the leader at the hub; fastest for simple tasks.'
    },
    {
      id: 19,
      question: 'Rate cut by central bank: most affected department?',
      type: 'radio',
      options: ['Accounts receivable', 'Sales/marketing', 'Treasury'],
      answer: [2],
      explanation: 'Treasury manages funding/returns affected by rates.'
    },
    {
      id: 20,
      question: 'Cross-functional project teams while staying in departments describe which structure?',
      type: 'radio',
      options: ['Matrix', 'Horizontal', 'Scalar chain'],
      answer: [0],
      explanation: 'Dual lines/cross-team = matrix.'
    },
    {
      id: 21,
      question: 'Structural unemployment most likely caused by:',
      type: 'radio',
      options: [
        'Seasonal surf slump',
        'Grads in short-term jobs',
        'Recession',
        'Steel demand decline closing foundries'
      ],
      answer: [3],
      explanation: 'Permanent industry decline = structural.'
    },
    {
      id: 22,
      question: 'Demand curve shift caused by conditions, not own-price movement. True or False?',
      type: 'radio',
      options: ['True', 'False'],
      answer: [0],
      explanation: 'Own-price moves along the curve; other factors shift the curve.'
    },
    {
      id: 23,
      question: 'Ultimate responsibility for fraud prevention?',
      type: 'radio',
      options: ['Fraud manager', 'Head of IA', 'External auditors', 'Board of Directors'],
      answer: [3],
      explanation: 'The board/management owns prevention/detection responsibility.'
    },
    {
      id: 24,
      question: 'Belbin: dynamic, thrives on pressure, pushes others, may annoy. Role?',
      type: 'radio',
      options: ['Shaper', 'Co-ordinator', 'Implementer', 'Plant'],
      answer: [0],
      explanation: 'Shaper = high-energy driver.'
    },
    {
      id: 25,
      question: "Mintzberg: which TWO are interpersonal roles?",
      type: 'checkbox',
      options: ['Figurehead', 'Entrepreneur', 'Spokesperson', 'Liaison'],
      answer: [0, 3],
      explanation: 'Interpersonal: Figurehead, Leader, Liaison. (Entrepreneur = decisional; Spokesperson = informational.)'
    },
    {
      id: 26,
      question: "FRAC Ltd refuses to write off bad debts. Fraud?",
      type: 'radio',
      options: ['Yes—overstates assets/profits', 'No'],
      answer: [0],
      explanation: 'Deliberately overstating assets/profits is financial statement fraud.'
    },
    {
      id: 27,
      question: 'Leadership approach with task/team/individual circles?',
      type: 'radio',
      options: ['Action-centred leadership'],
      answer: [0],
      explanation: "John Adair's action-centred leadership balances task, team, and individual."
    },
    {
      id: 28,
      question: 'Market with F plus two similar rivals is a:',
      type: 'radio',
      options: ['Oligopoly', 'Monopolistic competition'],
      answer: [0],
      explanation: 'Few large firms = oligopoly.'
    },
    {
      id: 29,
      question: 'Feature of monopolistic competition?',
      type: 'radio',
      options: [
        'Few competitors',
        'Undifferentiated products',
        'No major barriers to entry/exit',
        'Low advertising spend'
      ],
      answer: [2],
      explanation: 'Many firms, differentiated products, low barriers; advertising often high.'
    },
    {
      id: 30,
      question: 'Which TWO are IFAC fundamental principles?',
      type: 'checkbox',
      options: ['Confidentiality', 'Loyalty', 'Social responsibility', 'Professional behaviour'],
      answer: [0, 3],
      explanation: 'IFAC: Integrity, Objectivity, Competence, Confidentiality, Professional behaviour.'
    },
    {
      id: 31,
      question: 'Which two statements are NOT true about public/private sector?',
      type: 'checkbox',
      options: [
        'Public sector orgs are owned by government.',
        'Private sector org is owned by shareholders.',
        'Private ownership always means limited company.',
        'NGO is business owned by workers.'
      ],
      answer: [2, 3],
      explanation: 'Private can be sole trader/partnership; NGO is not worker-owned by default.'
    },
    {
      id: 32,
      question: 'NOT an advantage of narrow span of control?',
      type: 'radio',
      options: [
        'Easier to control staff',
        'Costs less because fewer managers',
        'Less management skill is required'
      ],
      answer: [1],
      explanation: 'Narrow spans need MORE managers, increasing cost.'
    },
    {
      id: 33,
      question: "Identify TWO of Porter's five forces.",
      type: 'checkbox',
      options: [
        'Threat of substitutes',
        'Threat of complements',
        'Threat of new entrants',
        'Threat of suppliers'
      ],
      answer: [0, 2],
      explanation: 'Forces: rivalry, new entrants, substitutes, buyer power, supplier power.'
    },
    {
      id: 34,
      question: 'NOT an element of monetary policy?',
      type: 'radio',
      options: ['Interest rates', 'Taxation', 'Credit controls'],
      answer: [1],
      explanation: 'Taxation is fiscal policy.'
    },
    {
      id: 35,
      question: 'Govt income > expenditure: Budget? PSBR?',
      type: 'radio',
      options: [
        'Budget surplus; PSBR negative',
        'Budget deficit; PSBR positive',
        'Budget surplus; PSBR positive'
      ],
      answer: [0],
      explanation: 'Surplus reduces borrowing; PSBR becomes negative.'
    },
    {
      id: 36,
      question: 'Unlikely outcome when delayering?',
      type: 'radio',
      options: [
        'Increase average span of control',
        'Increase number of middle managers',
        'Decrease length of scalar chain'
      ],
      answer: [1],
      explanation: 'Delayering removes middle layers, so middle managers decrease.'
    },
    {
      id: 37,
      question: 'Which is NOT a connected stakeholder?',
      type: 'radio',
      options: ['Suppliers', 'Shareholders', 'Executive directors', 'Customers'],
      answer: [2],
      explanation: 'Executive directors are internal; others are connected.'
    },
    {
      id: 38,
      question: 'Act of Parliament in the UK is called:',
      type: 'radio',
      options: ['Primary law', 'Secondary law', 'Common law'],
      answer: [0],
      explanation: 'Statute/primary legislation = Acts of Parliament.'
    },
    {
      id: 39,
      question: 'NOT a feature of effective internal control system?',
      type: 'radio',
      options: ['Audit', 'Organisation', 'Personnel'],
      answer: [0],
      explanation: 'Audit monitors controls; core features are org/segregation/personnel etc.'
    },
    {
      id: 40,
      question: 'Who is ultimately responsible for adhering to Data Protection Act 2018?',
      type: 'radio',
      options: ['Data controller', 'Data entry clerk', 'Data supervisor'],
      answer: [0],
      explanation: 'Controller determines purposes/means and carries legal responsibility.'
    },
    {
      id: 41,
      question: 'SWOT: internal vs external parts.',
      type: 'checkbox',
      options: [
        'Strengths (Internal)',
        'Weaknesses (Internal)',
        'Opportunities (External)',
        'Threats (External)'
      ],
      answer: [0, 1, 2, 3],
      explanation: 'S/W internal; O/T external.'
    },
    {
      id: 42,
      question: "Which TWO Ps apply specifically to services?",
      type: 'checkbox',
      options: ['People', 'Price', 'Promotion', 'Processes'],
      answer: [0, 3],
      explanation: 'Extended 7Ps add People, Processes, Physical evidence.'
    },
    {
      id: 43,
      question: 'PPP Ltd voluntary recall for faults is which strategy?',
      type: 'radio',
      options: ['Proactive', 'Reactive', 'Defence', 'Accommodation'],
      answer: [0],
      explanation: 'Voluntary, responsible action = proactive stance.'
    },
    {
      id: 44,
      question: 'Preparation/filing of annual accounts required by HMRC? True/False',
      type: 'radio',
      options: ['True', 'False'],
      answer: [1],
      explanation: 'Companies House/Companies Act require accounts; HMRC requires tax returns.'
    },
    {
      id: 45,
      question: "Most likely audit in not-for-profits?",
      type: 'radio',
      options: ['Management audit', 'Systems audit', 'Efficiency audit', "Value for money audit"],
      answer: [3],
      explanation: 'Not-for-profits focus on Economy/Efficiency/Effectiveness (VFM).'
    },
    {
      id: 46,
      question: 'Accountant told to process inaccurate invoices. First action?',
      type: 'radio',
      options: [
        'Report to manager/ethics officer',
        'Report to ACCA',
        'Report to authorities',
        'Resign'
      ],
      answer: [0],
      explanation: 'Escalate internally first per ethical codes.'
    },
    {
      id: 47,
      question: 'Section B Q1: Political factors & inflation types (select best mapping).',
      type: 'checkbox',
      options: [
        'Political: taxes/H&S spend/regulation',
        'Inflation: Expectations, Demand-pull, Imported, Monetary',
        'Political: tech choices',
        'Inflation: all demand-pull'
      ],
      answer: [0, 1],
      explanation: 'Political includes taxes, regulation, spending; inflation types as listed.'
    },
    {
      id: 48,
      question: 'Section B Q2: Ethics threats & values.',
      type: 'checkbox',
      options: [
        'Advocacy, Self-review, Familiarity, Intimidation are threats',
        'Business ethical values = norms/standards set by board',
        'Only self-interest is a threat',
        'Values are optional'
      ],
      answer: [0, 1],
      explanation: 'Threats include advocacy/self-review/familiarity/intimidation (plus self-interest). Values guide behaviour to meet objectives.'
    },
    {
      id: 49,
      question: 'Section B Q3: Utility & demand shifts.',
      type: 'checkbox',
      options: [
        'Utility max: MU/P equal across goods',
        'Taste/substitutes shift demand curves',
        'Own-price changes shift the curve',
        'Rail demand falls if foreign holiday cheaper'
      ],
      answer: [0, 1, 3],
      explanation: 'MU/P rule; taste/substitute changes shift; own price moves along curve; cheaper substitute shifts demand left.'
    },
    {
      id: 50,
      question: 'Section B Q4: Time management & development definitions.',
      type: 'checkbox',
      options: [
        'Giving task away is not helping Kate',
        'Coaching = structured/task',
        'Mentoring = long-term/career',
        'Counselling = personal issues'
      ],
      answer: [0, 1, 2, 3],
      explanation: 'All listed align: don’t just remove task; define coaching/mentoring/counselling as given.'
    },
    {
      id: 51,
      question: 'Section B Q5: Financial systems mapping.',
      type: 'checkbox',
      options: [
        'Private co accounts: IS, SOFP, Auditor report, Directors report',
        'Payments not matched = Purchasing',
        'Credit limits = Credit Control',
        'Discounts = Sales Invoicing',
        'HMRC filing = Payroll'
      ],
      answer: [0, 1, 2, 3, 4],
      explanation: 'All mappings align to subsystems and required accounts.'
    },
    {
      id: 52,
      question: 'Section B Q6: Leadership vs management and theorists.',
      type: 'checkbox',
      options: [
        'Fayol (functions), Mintzberg (roles), Drucker (people/comms), Taylor (scientific mgmt)',
        'Leaders focus on people/change/long-term; managers on methods/timescales',
        'Leaders only manage today',
        'Taylor is about self-actualisation'
      ],
      answer: [0, 1],
      explanation: 'Fayol/Mintzberg/Drucker/Taylor matches; leaders vs managers distinction as noted.'
    }
  ]
});

// Combined BT Mock Exam (First Intuition Q1-6 + BT Mock Q7-52)
tests.push({
  id: 'bt-combined-mock',
  title: 'Combined Business Technology (BT) Mock Exam',
  category: 'acca-bt',
  durationMinutes: 120,
  questions: [
    { id: 1, question: 'Classify the following as either injections into or withdrawals from the economy.', type: 'checkbox', options: ['Export income (Injection)', 'Taxation (Withdrawal)', 'Government spending (Injection)', 'Saving (Withdrawal)'], answer: [0, 1, 2, 3], explanation: 'Injections add to the circular flow (exports, investment, government spending); withdrawals remove (savings, taxes, imports).' },
    { id: 2, question: 'Managers should not consider the informal organisation when making decisions. True or False?', type: 'radio', options: ['True', 'False'], answer: [1], explanation: 'Informal networks influence morale, communication, and acceptance of change; they must be considered.' },
    { id: 3, question: "Blake & Mouton: manager with high concern for people, low concern for results is:", type: 'radio', options: ['Country Club', 'Impoverished', 'Middle of the Road'], answer: [0], explanation: 'High people/low production = Country Club style (1,9).' },
    { id: 4, question: "Which is NOT in Maslow's hierarchy of needs?", type: 'radio', options: ['Growth', 'Self-actualisation', 'Physiological'], answer: [0], explanation: "Growth is Alderfer’s ERG term; Maslow uses Physiological, Safety, Social, Esteem, Self-actualisation." },
    { id: 5, question: "Herzberg: which two are NOT motivation factors?", type: 'checkbox', options: ['Annual salary and bonus', 'Job security', 'Responsibility', 'Promotion'], answer: [0, 1], explanation: 'Salary and job security are hygiene factors; responsibility and promotion are motivators.' },
    { id: 6, question: 'Kolb: imaginative, people-oriented, likes groups, multiple perspectives. Style?', type: 'radio', options: ['Accommodating', 'Diverging', 'Converging', 'Assimilating'], answer: [1], explanation: 'Describes Diverging (feeling + watching).' },
    { id: 7, question: 'Are these connected stakeholders? (Local community, Shareholders, Employees, Suppliers)', type: 'checkbox', options: ['Local community', 'Shareholders', 'Employees', 'Suppliers'], answer: [1, 3], explanation: 'Connected stakeholders have direct contractual/financial ties (shareholders, suppliers); employees are internal; community is external.' },
    { id: 8, question: 'Fraud involving quantity discounts on purchases could result from:', type: 'radio', options: ['Staff collude with suppliers', 'Employees collude with customers', 'Employee under-records quantities received'], answer: [0], explanation: 'Purchase fraud commonly involves supplier collusion (kickbacks/false discounts).' },
    { id: 9, question: 'Key objective of committee rules of procedure?', type: 'radio', options: ['Ensure equal speaking time', 'Match formality to topic', 'Deal with agenda quickly', 'Facilitate smooth running of the committee'], answer: [3], explanation: 'Standing orders exist to ensure orderly, smooth meetings.' },
    { id: 10, question: 'Aging population cost drivers: which two factors?', type: 'checkbox', options: ['Decreasing birth rate', 'Increasing birth rate', 'Decreasing mortality rate', 'Increasing mortality rate'], answer: [0, 2], explanation: 'People live longer (lower mortality) and fewer young replace them (lower birth rate).' },
    { id: 11, question: 'Chair of a meeting is responsible for:', type: 'radio', options: ['Taking minutes', 'Dealing with correspondence', 'Issuing notice/agenda', 'Approving and signing minutes'], answer: [3], explanation: 'Chair leads and signs minutes; admin is typically the secretary’s role.' },
    { id: 12, question: 'Ethical approach: taking moral high ground beyond profit:', type: 'radio', options: ['Normative', 'Instrumental', 'Teleological', 'Utilitarian'], answer: [0], explanation: 'Normative ethics focuses on doing what is right because it is right.' },
    { id: 13, question: 'What distinguishes a profession from an occupation?', type: 'radio', options: ['Governance by law/university education', 'Trade agreement/apprenticeship', 'Governance by professional association & ethical code', 'Ethical code & consultancy contracts'], answer: [2], explanation: 'Professions have governing bodies, entry standards, and a binding ethical code.' },
    { id: 14, question: 'Fundamental ACCA principles (select two):', type: 'checkbox', options: ['Independence', 'Integrity', 'Objectivity', 'Professional qualification'], answer: [1, 2], explanation: 'ACCA/IESBA principles include Integrity and Objectivity (plus competence, confidentiality, professional behaviour).' },
    { id: 15, question: 'Which manager is task-oriented?', type: 'radio', options: ['Petr', 'Jobi', 'Carol', 'Olga'], answer: [0], explanation: 'Petr focuses on decisions/instructions with little consultation.' },
    { id: 16, question: 'Corporate governance is the [BLANK] by which organisations are directed and controlled.', type: 'radio', options: ['System', 'Structure', 'Procedure'], answer: [0], explanation: 'Classic Cadbury definition: the system of direction and control.' },
    { id: 17, question: 'CSR responsibilities beyond short-term gains (select two):', type: 'checkbox', options: ['Economic', 'Ethical', 'Philanthropic', 'Financial'], answer: [1, 2], explanation: 'CSR extends to ethical and philanthropic responsibilities (alongside economic/legal).' },
    { id: 18, question: 'Do these social trends directly affect most businesses? (Single households, falling birth rates, diverse population, environmental concern)', type: 'checkbox', options: ['Increase in single-person households', 'Falling birth rates', 'Increasing diversity', 'Greater environmental concern'], answer: [0, 1, 2, 3], explanation: 'All listed trends influence customers, workforce, and regulation.' },
    { id: 19, question: 'Which are supra-national bodies?', type: 'checkbox', options: ['European Union', 'International Monetary Fund', 'World Wildlife Fund', 'International airline alliance'], answer: [0, 1], explanation: 'EU/IMF transcend national borders; WWF is an NGO; airlines are commercial.' },
    { id: 20, question: '[BLANK] is the process of acquiring knowledge through experience leading to behavioural change.', type: 'radio', options: ['Education', 'Learning', 'Training'], answer: [1], explanation: 'Learning is the underlying change-through-experience process.' },
    { id: 21, question: 'Demographic most likely to attract inward FDI:', type: 'radio', options: ['Young, well-educated workforce', 'Older workforce with high disposable income', 'Low taxes, declining population', 'Falling birth rates, high female:male ratio'], answer: [0], explanation: 'FDI seeks available, capable labour.' },
    { id: 22, question: 'Who determines if external auditor can provide other services (independence)?', type: 'radio', options: ['Directors', 'Audit committee', 'Shareholders', 'Nominations committee'], answer: [1], explanation: 'Audit committee oversees external auditor independence and non-audit services.' },
    { id: 23, question: 'Job enrichment can be achieved by which two?', type: 'checkbox', options: ['Combine activities into more complex assignment', "Increase task ownership/autonomy", 'Job rotation', 'Job enlargement'], answer: [0, 1], explanation: 'Enrichment is vertical (depth/autonomy); rotation/enlargement are horizontal.' },
    { id: 24, question: 'Competitive advantage from standardised components & flexible lines:', type: 'radio', options: ['Innovation', 'Alliance', 'Growth', 'Cost leadership'], answer: [3], explanation: 'Lower unit costs via scale/standardisation support cost leadership.' },
    { id: 25, question: 'Essential appraisal interview skill:', type: 'radio', options: ['Fully involving the appraisee', 'Enhancing trust/support', 'Confronting poor performance', "Informing the appraisee of the organisation's strategy"], answer: [0], explanation: 'Active involvement ensures buy-in and development.' },
    { id: 26, question: "Profitability falling, innovation rising across industry — which Porter force?", type: 'radio', options: ['Competitive rivalry', 'Bargaining power of buyers', 'Threat of new entrants'], answer: [0], explanation: 'High rivalry pushes prices down and innovation up.' },
    { id: 27, question: "Porter value chain: manager in primary activity?", type: 'radio', options: ['Procurement', 'IT/Technology', 'Admin/Infrastructure', 'Service/After-sales'], answer: [3], explanation: 'Service is a primary activity; procurement/tech/admin are support.' },
    { id: 28, question: 'High price inflation means:', type: 'radio', options: ['Debtors gain, creditors lose', 'Nobody loses', 'Debtors lose, creditors gain'], answer: [0], explanation: 'Inflation erodes the real value repaid to creditors; borrowers benefit.' },
    { id: 29, question: 'Hofstede: society where people expected to stand for themselves/choose affiliations:', type: 'radio', options: ['Masculinity', 'Power distance', 'Individualism'], answer: [2], explanation: 'Describes individualist cultures.' },
    { id: 30, question: 'Best skill set for a good chairperson:', type: 'radio', options: ['Understanding procedures, firmness, impartiality', 'Firmness, impartiality, ability to organise'], answer: [0], explanation: 'Must know rules, be firm, and stay impartial.' },
    { id: 31, question: 'Consequences of failing to maintain adequate financial records:', type: 'checkbox', options: ['Fines', 'Prosecution', 'Damaged reputation', "Qualified auditor's report"], answer: [0, 1, 2, 3], explanation: 'Legal and reputational impacts plus potential audit qualification.' },
    { id: 32, question: 'Function focused on raising cash and minimising finance costs:', type: 'radio', options: ['Financial management', 'Investment', 'Treasury'], answer: [2], explanation: 'Treasury manages funding/liquidity and related costs.' },
    { id: 33, question: 'Imprest system is primarily used for:', type: 'radio', options: ['Wages', 'Petty cash', 'Bank and cash', 'Inventory'], answer: [1], explanation: 'Petty cash uses an imprest float replenished to a set level.' },
    { id: 34, question: 'Purpose of perpetual inventory counts:', type: 'radio', options: ['Ensure year-end existence', 'Verify continuous accuracy of records', 'Identify teeming and lading', 'Reduce year-end count cost'], answer: [1], explanation: 'Perpetual counts reconcile records to physical stock continuously.' },
    { id: 35, question: 'Most task-efficient Blake & Mouton styles (select two):', type: 'checkbox', options: ['Team (9,9)', 'Middle of the road', 'Country club', 'Authoritarian (9,1)'], answer: [0, 3], explanation: 'High task concern in Authoritarian (9,1) and also strong in Team (9,9).' },
    { id: 36, question: 'Tax strategy using lower-cost location with incentives:', type: 'radio', options: ['Tax avoidance', 'Tax harmonisation', 'Tax evasion', 'Tax mitigation'], answer: [3], explanation: 'Using incentives/structures legally as intended is tax mitigation.' },
    { id: 37, question: 'A system is a group of interacting, [1] or interdependent elements forming a [2] complex [3]...', type: 'radio', options: ['Interrelated, whole, procedures'], answer: [0], explanation: 'Definition: interacting/interrelated elements forming a complex whole.' },
    { id: 38, question: 'Which most closely relates to marketing functions?', type: 'radio', options: ['Selling, marketing research, physical assets', 'Strategy, orientation, segmentation', 'Customer analysis, social responsibility, opportunity analysis'], answer: [1], explanation: 'Key marketing functions include strategy, market orientation, and segmentation.' },
    { id: 39, question: 'Online booking affects which two marketing mix elements?', type: 'checkbox', options: ['Product', 'People', 'Place', 'Promotion'], answer: [1, 2], explanation: 'Changes distribution (place) and alters people interaction model.' },
    { id: 40, question: 'Main parties to assurance on internal controls:', type: 'radio', options: ['Shareholders, directors, external auditors'], answer: [0], explanation: 'User = shareholders; responsible party = directors; practitioner = auditor.' },
    { id: 41, question: "Kolb: doing homework after a lecture is which stage?", type: 'radio', options: ['Observation and reflection', 'Formation of abstract concepts', 'Applying/testing concepts learned'], answer: [2], explanation: 'Homework applies/experiments with the concepts.' },
    { id: 42, question: 'Advantage of outsourcing internal audit:', type: 'radio', options: ['Management can focus on core activities', "Outsourced staff stay out of the way", 'Expectation gap narrows', 'Culture will be changed'], answer: [0], explanation: 'Outsourcing non-core work lets management focus on core.' },
    { id: 43, question: 'Bennis: transactional leadership aligns with:', type: 'radio', options: ['Leaders do the right things', 'Managers manage', 'Leaders lead', 'Managers do things right'], answer: [3], explanation: 'Transactional = managers do things right; transformational leaders do the right things.' },
    { id: 44, question: 'Cognitive bias where perception of one trait influences others:', type: 'radio', options: ['Halo effect'], answer: [0], explanation: 'The halo effect skews perception based on prior impressions.' },
    { id: 45, question: 'Adair: setting objectives, planning, assigning responsibilities is which function?', type: 'radio', options: ['Task', 'Team', 'Individual'], answer: [0], explanation: 'These are task functions in Adair’s model.' },
    { id: 46, question: 'Belbin role: intellectual, intuitive, unorthodox, detached:', type: 'radio', options: ['Finisher completer', 'Plant', 'Shaper'], answer: [1], explanation: 'Plant is the creative/idea generator, sometimes detached.' },
    { id: 47, question: 'Management theories tasks (select all that apply).', type: 'checkbox', options: ['Taylor = Scientific/Timed; Mayo = Social needs; Drucker = Economic/self-managing; Fayol = Command/Unity', 'Drucker roles include developing people, measuring jobs, motivating employees, objective setting', 'Taylor focuses on self-actualisation', 'Leaders skip measurement'], answer: [0, 1], explanation: 'Taylor = scientific mgmt; Mayo = human relations; Fayol = POCCC; Drucker = MBO/people focus and roles listed.' },
    { id: 48, question: 'Ethics: IESBA principles & approaches (select all that apply).', type: 'checkbox', options: ['IESBA principles: Integrity, Objectivity, Competence, Confidentiality, Professional Behaviour', 'David = Normative; Elena = Instrumentalist', 'Only integrity matters', 'Values are optional'], answer: [0, 1], explanation: 'IESBA principles list; normative vs instrumental approaches as given.' },
    { id: 49, question: 'Demographics & development tasks (select all that apply).', type: 'checkbox', options: ['Northland=Pre-Industrial; Eastland=Early Developing; Westland=Developing; Southland=Fully Developed', 'Sustainability=Social; Age/Gender=Demographic; Income=Social; Location=Demographic', 'All countries are fully developed', 'Demographic factors equal social factors'], answer: [0, 1], explanation: 'Mappings follow the demographic transition model and factor classifications.' },
    { id: 50, question: 'Organisational culture & hierarchy tasks.', type: 'checkbox', options: ['Handy mapping Power=D; Role=C; Task=B; Person=A and Anthony: Divisional objectives=Tactical; PEST=Strategic', 'Handy cultures are irrelevant', 'Anthony only covers operational level', 'Culture and hierarchy are unrelated'], answer: [0], explanation: 'Correct mapping of Handy cultures and Anthony hierarchy levels.' },
    { id: 51, question: 'Support & mentoring tasks (select all that apply).', type: 'checkbox', options: ['Coaching = short-term/skills; Mentoring = career; Counselling = personal barriers; Mentor guides and values opinions', 'Counselling is for task skills', 'Mentor directs daily tasks'], answer: [0], explanation: 'Coaching/mentoring/counselling distinctions and mentor qualities as described.' },
    { id: 52, question: 'Audit process tasks (select all that apply).', type: 'checkbox', options: ['Order: Agree terms > Understand entity > Assess risk > Tests > Management reps > Opinion; Compliance = control evidence; Substantive = figures/analysis', 'Testing comes before understanding the entity', 'Risk assessment can be skipped'], answer: [0], explanation: 'Standard audit cycle and distinction between compliance and substantive testing.' }
  ]
});
