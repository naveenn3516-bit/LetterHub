const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("../config/db");

const Category = require("../models/Category");
const Letter = require("../models/Letter");

const categories = [
  {
    name: "Education",
    slug: "education",
    description:
      "School and college letter formats for students.",
    icon: "🎓"
  },
  {
    name: "Personal",
    slug: "personal",
    description:
      "Personal letters for friends, family and special occasions.",
    icon: "💌"
  },
  {
    name: "Career",
    slug: "career",
    description:
      "Professional letters for jobs and careers.",
    icon: "💼"
  },
  {
    name: "Official",
    slug: "official",
    description:
      "Formal letters for official purposes.",
    icon: "🏛️"
  },
  {
    name: "Travel",
    slug: "travel",
    description:
      "Travel and trip-related letter formats.",
    icon: "✈️"
  },
  {
    name: "Business",
    slug: "business",
    description:
      "Professional business letter formats.",
    icon: "🏢"
  }
];

const runSeed = async () => {
  try {
    await connectDB();

    await Category.deleteMany({});
    await Letter.deleteMany({});

    const createdCategories =
      await Category.insertMany(categories);

    const categoryMap = {};

    createdCategories.forEach((category) => {
      categoryMap[category.slug] = category._id;
    });

    const letters = [
      {
        title: "College Leave Letter",
        slug: "college-leave-letter",
        category: categoryMap.education,
        description:
          "A formal letter requesting leave from college.",
        whenToUse:
          "Use this format when you need to request leave from your college.",
        language: "English",
        icon: "📝",
        featured: true,

        placeholders: [
          {
            name: "Date",
            description:
              "Write the date on which you are submitting the letter."
          },
          {
            name: "Your Name",
            description:
              "Write your full name."
          },
          {
            name: "Department",
            description:
              "Write your department and year if required."
          },
          {
            name: "College Name",
            description:
              "Write the full name of your college."
          },
          {
            name: "Recipient",
            description:
              "Write the person who should receive the letter."
          },
          {
            name: "Reason",
            description:
              "Write the genuine reason for your leave."
          },
          {
            name: "From and To Dates",
            description:
              "Write the exact dates for which leave is requested."
          }
        ],

        format: `                         LEAVE LETTER

10 October 2026

From
Naveen K P
CSE Department
CAPE Institute of Technology

To
The Class Advisor
CSE Department
CAPE Institute of Technology

Subject: Request for Leave

Respected Sir/Madam,

I am writing to request leave from 10 October 2026 to
12 October 2026 as I need to attend a family function.

I kindly request you to grant me leave for the above-mentioned
period. I will attend my classes regularly after returning.

Thank you for your consideration.

Yours faithfully,

Naveen K P`
      },

      {
        title: "College Permission Letter",
        slug: "permission-letter",
        category: categoryMap.education,
        description:
          "A formal letter requesting permission from college.",
        whenToUse:
          "Use this format when you need official permission from your college.",
        language: "English",
        icon: "📄",
        featured: true,

        placeholders: [
          {
            name: "Your Name",
            description:
              "Write your full name."
          },
          {
            name: "Department",
            description:
              "Write your department."
          },
          {
            name: "Reason",
            description:
              "Explain why you need permission."
          },
          {
            name: "Date",
            description:
              "Write the date of the letter."
          }
        ],

        format: `                    PERMISSION LETTER

10 October 2026

From
Naveen K P
CSE Department
CAPE Institute of Technology

To
The Class Advisor
CSE Department
CAPE Institute of Technology

Subject: Request for Permission

Respected Sir/Madam,

I am writing to request permission to attend
the required activity on 10 October 2026.

I kindly request you to grant me permission for
the above-mentioned purpose.

I assure you that I will follow all the required
instructions and responsibilities.

Thank you for your consideration.

Yours faithfully,

Naveen K P`
      },

      {
        title: "Medical Leave Letter",
        slug: "medical-leave-letter",
        category: categoryMap.education,
        description:
          "A formal letter requesting leave due to health reasons.",
        whenToUse:
          "Use this format when you need leave because you are unwell.",
        language: "English",
        icon: "🏥",
        featured: true,

        placeholders: [
          {
            name: "Your Name",
            description:
              "Write your full name."
          },
          {
            name: "Department",
            description:
              "Write your department."
          },
          {
            name: "Leave Dates",
            description:
              "Write the period for which you need leave."
          },
          {
            name: "Reason",
            description:
              "Briefly state that you are unwell."
          }
        ],

        format: `                  MEDICAL LEAVE LETTER

10 October 2026

From
Naveen K P
CSE Department
CAPE Institute of Technology

To
The Class Advisor
CSE Department
CAPE Institute of Technology

Subject: Request for Medical Leave

Respected Sir/Madam,

I am writing to inform you that I am unable to
attend classes from 10 October 2026 to
12 October 2026 due to illness.

Therefore, I kindly request you to grant me
medical leave for the above-mentioned period.

I will attend the classes regularly after my recovery.

Thank you for your consideration.

Yours faithfully,

Naveen K P`
      },

      {
        title: "Job Application Letter",
        slug: "job-application-letter",
        category: categoryMap.career,
        description:
          "A professional letter applying for a job position.",
        whenToUse:
          "Use this format when formally applying for a job.",
        language: "English",
        icon: "💼",
        featured: true,

        placeholders: [
          {
            name: "Your Name",
            description:
              "Write your full name."
          },
          {
            name: "Position",
            description:
              "Write the position you are applying for."
          },
          {
            name: "Company Name",
            description:
              "Write the company name."
          },
          {
            name: "Qualification",
            description:
              "Mention your relevant educational qualification."
          }
        ],

        format: `                  JOB APPLICATION LETTER

10 October 2026

From
Naveen K P
Kanyakumari, Tamil Nadu
Email: your@email.com
Phone: +91 XXXXX XXXXX

To
The Hiring Manager
ABC Technologies
Chennai, Tamil Nadu

Subject: Application for Software Developer Position

Dear Sir/Madam,

I am writing to apply for the Software Developer
position at ABC Technologies.

I am currently pursuing my Bachelor's degree in
Computer Science and Engineering. I have developed
my skills in programming, web development and
software development.

I would appreciate the opportunity to discuss my
qualification and suitability for this position.

Thank you for your time and consideration.

Yours sincerely,

Naveen K P`
      },

      {
        title: "Complaint Letter",
        slug: "complaint-letter",
        category: categoryMap.official,
        description:
          "A formal letter for submitting a complaint.",
        whenToUse:
          "Use this format when you need to formally report a problem.",
        language: "English",
        icon: "📢",
        featured: true,

        placeholders: [
          {
            name: "Your Name and Address",
            description:
              "Write your contact information."
          },
          {
            name: "Recipient",
            description:
              "Write the authority or organization receiving the complaint."
          },
          {
            name: "Problem",
            description:
              "Clearly explain the issue."
          },
          {
            name: "Expected Action",
            description:
              "Explain what action you are requesting."
          }
        ],

        format: `                    COMPLAINT LETTER

10 October 2026

From
Naveen K P
Your Address
Your Contact Number

To
The Concerned Authority
ABC Organization
Address

Subject: Complaint Regarding [Issue]

Respected Sir/Madam,

I am writing to formally bring to your attention
an issue regarding [describe the issue].

The problem has caused considerable inconvenience.
I kindly request you to look into this matter and
take the necessary action as soon as possible.

I hope that the issue will be resolved at the earliest.

Thank you for your consideration.

Yours faithfully,

Naveen K P`
      },

      {
        title: "Apology Letter",
        slug: "apology-letter",
        category: categoryMap.personal,
        description:
          "A letter expressing a sincere apology.",
        whenToUse:
          "Use this format when you need to apologize formally or personally.",
        language: "English",
        icon: "💙",
        featured: true,

        placeholders: [
          {
            name: "Recipient Name",
            description:
              "Write the name of the person receiving the letter."
          },
          {
            name: "Reason",
            description:
              "Explain what you are apologizing for."
          },
          {
            name: "Your Name",
            description:
              "Write your name."
          }
        ],

        format: `                    APOLOGY LETTER

10 October 2026

Dear [Recipient Name],

Subject: Sincere Apology

I am writing this letter to sincerely apologize
for [reason].

I understand that my actions may have caused
disappointment or inconvenience. I genuinely regret
what happened and take responsibility for my mistake.

I hope you will accept my sincere apology.

Sincerely,

[Your Name]`
      },

      {
        title: "Trip Permission Letter",
        slug: "trip-permission-letter",
        category: categoryMap.travel,
        description:
          "A letter requesting permission to attend a trip.",
        whenToUse:
          "Use this format when requesting permission for an educational or personal trip.",
        language: "English",
        icon: "✈️",
        featured: true,

        placeholders: [
          {
            name: "Your Name",
            description:
              "Write your name."
          },
          {
            name: "Trip Details",
            description:
              "Mention the destination and purpose of the trip."
          },
          {
            name: "Trip Dates",
            description:
              "Write the dates of the trip."
          }
        ],

        format: `                  TRIP PERMISSION LETTER

10 October 2026

From
Naveen K P
CSE Department
CAPE Institute of Technology

To
The Class Advisor
CSE Department
CAPE Institute of Technology

Subject: Request for Permission to Attend Trip

Respected Sir/Madam,

I am writing to request permission to participate
in the trip to [Destination] from [Start Date] to
[End Date].

The trip is organized for [Purpose]. I assure you
that I will follow all the rules and instructions
during the trip.

I kindly request you to grant me permission to
participate in the trip.

Thank you for your consideration.

Yours faithfully,

Naveen K P`
      },

      {
        title: "Thank You Letter",
        slug: "thank-you-letter",
        category: categoryMap.personal,
        description:
          "A letter expressing gratitude and appreciation.",
        whenToUse:
          "Use this format when you want to sincerely thank someone.",
        language: "English",
        icon: "🙏",
        featured: false,

        placeholders: [
          {
            name: "Recipient Name",
            description:
              "Write the person's name."
          },
          {
            name: "Reason",
            description:
              "Explain what you are thankful for."
          },
          {
            name: "Your Name",
            description:
              "Write your name."
          }
        ],

        format: `                    THANK YOU LETTER

10 October 2026

Dear [Recipient Name],

I would like to sincerely thank you for
[reason].

Your kindness and support mean a lot to me.
I truly appreciate the time and effort you
have given me.

Thank you once again for everything.

With sincere thanks,

[Your Name]`
      }
    ];

    await Letter.insertMany(letters);

    console.log("LetterHub seed completed successfully");

    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
};

runSeed();