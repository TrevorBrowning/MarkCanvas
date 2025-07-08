export const templates = [
  {
    name: 'README Starter',
    category: 'Software Development',
    content: `
# Project Title

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/your-package-name.svg)](https://badge.fury.io/js/your-package-name)

A brief one-sentence description of what your project does.

## Description

A more detailed description of the project, explaining its purpose, features, and the problem it solves.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

Provide step-by-step instructions on how to install your project and its dependencies.

\`\`\`bash
# Example for a Node.js project
npm install your-package-name
\`\`\`

## Usage

Show users how to use your project with clear code examples and explanations.

\`\`\`javascript
// Import the main function/class
import yourFunction from 'your-package-name';

// Show a basic usage example
const result = yourFunction({ option: 'value' });
console.log(result);
\`\`\`

## Contributing

Explain how others can contribute to your project. Include guidelines for pull requests, bug reports, and feature requests.

1.  Fork the Project
2.  Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
3.  Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
4.  Push to the Branch (\`git push origin feature/AmazingFeature\`)
5.  Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

Your Name - [@YourTwitter](https://twitter.com/YourTwitter) - email@example.com

Project Link: [https://github.com/your_username/your_project](https://github.com/your_username/your_project)
`,
  },
  {
    name: 'Blog Post',
    category: 'Content & Writing',
    content: `---
title: "Your Awesome Blog Post Title"
author: "Your Name"
date: "${new Date().toISOString().split('T')[0]}"
tags: ["tech", "tutorial", "javascript"]
---

# Your Awesome Blog Post Title

*A brief, italicized introduction or summary of the article to hook the reader.*

## Section 1: The Problem

Start by explaining the problem you're about to solve. This sets the stage and makes the content relatable for readers facing the same issue.

## Section 2: The Solution

This is the core of your post. Break down the solution into smaller, easy-to-digest parts. Use subheadings, lists, and code blocks to make it clear.

### Step-by-Step Guide

1.  **First Step:** Explain the first action the user needs to take.
2.  **Second Step:** Use code blocks to illustrate your points.

\`\`\`javascript
function aClearerExample() {
  // This code is much easier to read with syntax highlighting.
  console.log('Hello, World!');
}
\`\`\`

3.  **Third Step:** Use blockquotes to emphasize important notes or tips.

> **Note:** Don't forget to install the necessary dependencies before running the code.

## Conclusion

Summarize the key takeaways from the article. You can also suggest what the reader might want to learn or do next. Thank them for reading and invite them to leave comments or questions.
`,
  },
  {
    name: 'Meeting Notes',
    category: 'Business & Professional',
    content: `
# Meeting Notes: [Meeting Topic]

- **Date:** ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
- **Time:** [Start Time] - [End Time]
- **Location:** [e.g., Google Meet, Conference Room A]

## Attendees

- Your Name (Facilitator)
- Jane Doe (Product)
- John Smith (Engineering)

## Agenda

1.  Review Action Items from Last Meeting
2.  Discuss [Main Topic 1]
3.  Brainstorm [Main Topic 2]
4.  Q&A and Next Steps

## Discussion Notes

### Topic 1: Review Action Items
- Action item about [Previous Task] is **complete**.
- Action item about [Another Task] is **in progress**. John to provide an update next week.

### Topic 2: Discuss [Main Topic 1]
- Jane presented the latest user feedback. Key insight was that users are confused about [Specific Feature].
- The team discussed potential solutions, including a new UI tooltip and a short onboarding video.

### Topic 3: Brainstorm [Main Topic 2]
- The team brainstormed ideas for the Q3 roadmap.
- Top ideas included [Idea A], [Idea B], and [Idea C].

## Action Items

- [ ] **All:** Review the new design mockups by EOD Friday.
- [ ] **Jane:** Create a project brief for the onboarding video idea. (Due: Next Wednesday)
- [ ] **John:** Investigate the technical feasibility of [Idea A]. (Due: Next Friday)

## Next Meeting

- **Date:** [Date of Next Meeting]
- **Topic:** [Topic for Next Meeting]
`,
  },
  {
    name: 'Changelog',
    category: 'Software Development',
    content: `
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- New feature in development.

## [1.1.0] - 2023-10-26

### Added
- User profile pages.
- Ability to comment on posts.

### Changed
- Updated a dependency to a new version.
- Refactored the authentication module for better performance.

### Fixed
- A bug where users could not reset their passwords.

## [1.0.0] - 2023-09-15

### Added
- Initial release of the project.
- User registration and login functionality.
- Core feature for creating and viewing posts.

### Security
- Addressed a potential XSS vulnerability in the search bar.
`,
  },
  {
    name: 'To-Do List',
    category: 'Personal Productivity',
    content: `
# My To-Do List - ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}

A list of tasks to stay organized and productive for the day/week.

## 🎯 Priority Tasks

- [ ] Finish the project proposal and send it for review.
- [ ] Prepare the presentation slides for Friday's meeting.
- [ ] Fix the critical bug reported in ticket #123.

## 💻 Project: [Project Name]

- [ ] Design the database schema for the new feature.
- [ ] Write unit tests for the authentication module.
- [x] Review Jane's pull request for the UI update.

##  errands

- [ ] Pick up groceries after work.
- [x] Schedule a dentist appointment.
- [ ] Mail the package at the post office.

## ✅ Completed Today

- A list of items you've checked off can be moved here to track accomplishments.
`,
  },
  {
    name: 'Code Documentation',
    category: 'Software Development',
    content: `
### \`functionName(param1, param2)\`

A concise, one-sentence description of what the function does. A more detailed paragraph can follow, explaining the function's purpose, context, and any potential side effects.

---

#### **Parameters**

| Name     | Type      | Description                                     |
| :------- | :-------- | :---------------------------------------------- |
| \`param1\` | \`string\`  | **Required.** A description of the first parameter. |
| \`param2\` | \`object\`  | *Optional.* A description of the second parameter. |

---

#### **Returns**

**Type:** \`Promise<Array>\`

A clear description of what the function returns. For promises, specify what the promise resolves to. For objects, describe their structure.

---

#### **Example Usage**

Provide a clear, real-world code example of how to use the function.

\`\`\`javascript
import { functionName } from './utils';

async function fetchData() {
  try {
    const options = { retries: 3 };
    const data = await functionName('some-id', options);
    console.log('Data fetched successfully:', data);
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}

fetchData();
\`\`\`
`,
  },
  {
    name: 'Project Idea',
    category: 'Software Development',
    content: `
# Project Idea: [Project Title]

- **Created By:** [Your Name]
- **Date:** ${new Date().toLocaleDateString()}
- **Status:** [Brainstorming / In Planning / Ready for Dev]

---

## Project Overview

A short paragraph describing the core idea, inspiration, and goal of the project. What are you building, and why does it matter?

---

## Planned Features

List out the features you'd like to include in the MVP and any additional stretch goals.

### MVP Features
- [ ] User Authentication
- [ ] Dashboard with CRUD functionality
- [ ] Responsive UI

### Stretch Goals
- [ ] Dark mode toggle
- [ ] Realtime chat feature
- [ ] User analytics

---

## Tools & Technologies

| Purpose           | Suggested Tool(s)            |
|------------------|------------------------------|
| Frontend         | [Vue / React / HTML + CSS]   |
| Backend          | [Node.js / Flask / Django]   |
| Database         | [MongoDB / PostgreSQL]       |
| Deployment       | [Render / Vercel / Netlify]  |
| Version Control  | Git + GitHub                 |
| Other Tools      | [Figma, Postman, etc.]       |

---

## Pages / Components

Break the UI into manageable views or components.

- **Home Page** – Introduction, CTA, etc.
- **Login/Register**
- **User Dashboard**
- **Profile Settings**
- **[Any custom views your app needs]**

---

## API Endpoints (Optional)

\`\`\`http
GET    /api/items
POST   /api/items
PUT    /api/items/:id
DELETE /api/items/:id
\`\`\`

---

## Team Roles (Optional)

| Name     | Role                  | Notes                        |
|----------|-----------------------|------------------------------|
| Alice    | Frontend Lead         | Handles UI and routing       |
| Bob      | Backend Lead          | API + DB                     |
| Charlie  | Full-stack / QA       | Assists wherever needed      |

---

## Notes & Inspiration

Any helpful links, references, diagrams, or design ideas to guide development.

- [Inspirational project or repo](https://github.com/)
- [Design mockups or wireframes]

---
`,
  },
  {
    name: 'Weekly Report',
    category: 'Business & Professional',
    content: `
# Weekly Status Report

- **Name:** Your Name
- **Team:** Your Team Name
- **Report for Week Ending:** ${new Date().toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' })}

---

## Executive Summary (TL;DR)

A brief, high-level summary of the week. Mention the most significant achievements and any critical blockers.

---

## Key Accomplishments

A bulleted list of tasks, projects, and milestones completed this week.

- **Project A:** Launched the new feature ahead of schedule, resulting in positive initial feedback.
- **Project B:** Completed the final testing phase for the upcoming Q3 release.
- **Collaboration:** Led a successful brainstorming session with the design team for the new UI.

---

## Challenges & Blockers

A list of any issues that are slowing down progress. For each, note the impact and the required action or support needed.

- **Blocker:** Waiting on API access from the external vendor for Project C.
  - **Impact:** Delays development by an estimated 3 days.
  - **Action Needed:** Following up with our contact daily.

---

## Goals for Next Week

A clear, actionable list of priorities for the upcoming week.

- Begin development on the next phase of Project A.
- Deploy the Q3 release to the staging environment for final review.
- Onboard the new team member and get them set up.
`,
  },
  {
    name: 'Tutorial / How-To Guide',
    category: 'Content & Writing',
    content: `
# How to [Accomplish a Specific Task]

A short introduction explaining what this guide will teach the reader and why it's useful.

## Prerequisites

Before you begin, make sure you have the following installed or configured:

- [Required Software, e.g., Node.js v18.0 or higher]
- [Another Requirement, e.g., A code editor like VS Code]
- [Any necessary accounts, e.g., A GitHub account]

---

## Step 1: Setting Up Your Project

Start with the initial setup. This could be creating a new folder, initializing a project, or installing key dependencies.

\`\`\`bash
# Create a new project directory
mkdir my-new-project
cd my-new-project

# Initialize a new Node.js project
npm init -y
\`\`\`

## Step 2: Writing the Core Logic

Explain the main part of the tutorial. Use clear subheadings and code examples to guide the user.

First, create a file named \`index.js\`. Then, add the following code:

\`\`\`javascript
// index.js
function main() {
  console.log("This is the core logic of our tutorial!");
}

main();
\`\`\`

> **Tip:** Use blockquotes to share helpful tips or best practices.

## Step 3: Running and Verifying

Show the user how to run their code and what output they should expect.

\`\`\`bash
node index.js
\`\`\`

**Expected Output:**

\`\`\`text
This is the core logic of our tutorial!
\`\`\`

---

## Troubleshooting

- **Error: \`command not found: node\`**: This means Node.js is not installed or not in your system's PATH. Please verify your installation based on the prerequisites.
- **Issue: [Another common problem]**: A brief explanation of how to solve it.

## Conclusion

Briefly summarize what was accomplished and suggest what the reader could learn or build next.
`,
  },
  {
    name: 'Personal Journal Entry',
    category: 'Personal Productivity',
    content: `
# Journal: ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}

- **Mood:** [e.g., Optimistic, Tired, Reflective]
- **Location:** [e.g., Home, Coffee Shop, Traveling]

---

## Today's Highlight

*What was the best or most memorable part of your day?*


## What I'm Grateful For

1.
2.
3.


## Thoughts & Reflections

*A space for free-form writing. What's on your mind? Did you learn something new? Are you working through a challenge?*


`,
  },
  {
    name: 'Resume / CV',
    category: 'Business & Professional',
    content: `
# Your Full Name

- **Location:** City, State
- **Phone:** (555) 555-5555
- **Email:** your.email@example.com
- **LinkedIn:** [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- **GitHub:** [github.com/yourusername](https://github.com/yourusername)

---

## Professional Summary

A concise 2-3 sentence summary that highlights your key skills, experience, and career objectives. Enthusiastic and detail-oriented professional with X years of experience in [Your Industry], specializing in [Your Key Skill] and [Another Key Skill].

---

## Work Experience

### **Company Name** | City, State
**Your Job Title** | Month Year – Present

- Led a team to successfully [accomplish something significant], resulting in [a quantifiable result like a 15% increase in efficiency].
- Developed and maintained [a specific system or product] using [technologies like React, Node.js, and Python].
- Collaborated with cross-functional teams to define project requirements and deliver high-quality solutions.

### **Previous Company Name** | City, State
**Previous Job Title** | Month Year – Month Year

- [Description of a key responsibility or achievement.]
- [Another description, starting with an action verb.]

---

## Education

### **University Name** | City, State
**Bachelor of Science in Computer Science** | Graduated Month Year

- **Relevant Coursework:** Data Structures, Algorithms, Web Development, Database Systems.
- **Honors:** cum laude, Dean's List

---

## Skills

- **Languages:** JavaScript (ES6+), Python, HTML5, CSS3/Sass
- **Frameworks & Libraries:** React, Node.js, Express, Vue.js
- **Databases:** PostgreSQL, MongoDB, Redis
- **Tools:** Git, Docker, Webpack, Jira
`,
  },
  {
    name: 'Bug Report',
    category: 'Software Development',
    content: `
# Bug Report: [A brief, descriptive title of the bug]

- **Reported By:** Your Name
- **Date:** ${new Date().toLocaleDateString('en-CA')}
- **Severity:** [e.g., Critical, High, Medium, Low]

---

## Environment

- **Operating System:** [e.g., Windows 11, macOS Sonoma 14.5]
- **Browser (if applicable):** [e.g., Chrome 126, Firefox 127]
- **App Version:** [e.g., v2.1.3]

---

## Steps to Reproduce

Provide a clear, step-by-step list of instructions to reliably reproduce the bug.

1.  Navigate to the '...' page.
2.  Click on the '...' button.
3.  Enter '...' into the '...' field.
4.  See error.

---

## Expected Behavior

A clear and concise description of what you expected to happen.

*Example: The form should submit successfully and a confirmation message should appear.*

---

## Actual Behavior

A clear and concise description of what actually happened. Include any error messages.

*Example: The page crashed and displayed a "Cannot read properties of undefined" error in the console.*

---

## Supporting Media

*Include screenshots, GIFs, or video recordings here to help illustrate the bug.*

![Screenshot of the error](https://via.placeholder.com/600x400.png?text=Paste+Screenshot+Here)
`,
  },
  {
    name: 'Case Study',
    category: 'Business & Professional',
    content: `
# Case Study: How [Client Name] Achieved [Result] with [Your Product/Service]

- **Client:** [Client Name]
- **Industry:** [e.g., E-commerce, SaaS, Healthcare]
- **Project Date:** [Date or Quarter]

---

## Executive Summary

A brief overview of the case study. [Client Name], a leading company in the [Industry] space, was facing [a major challenge]. By implementing [Your Product/Service], they were able to achieve [a key result, e.g., a 40% increase in user engagement] within [a specific timeframe, e.g., three months].

---

## The Challenge

Describe the specific problems and pain points the client was experiencing before they used your solution. What were their goals? What was blocking them?

*Example: The client's manual workflow for processing orders was slow and prone to errors, leading to customer dissatisfaction and lost revenue.*

---

## The Solution

Detail the strategy and the steps you took to address the client's challenges. Explain how your product or service was implemented and used.

1.  **Discovery & Planning:** We conducted an in-depth analysis of their existing processes.
2.  **Implementation:** Our team integrated [Your Product] with their existing CRM and inventory systems.
3.  **Training & Onboarding:** We provided comprehensive training to their staff to ensure a smooth transition.

---

## The Results

This is the most critical section. Use hard numbers and quantifiable metrics to demonstrate the impact of your solution.

- **40% Increase** in order processing speed.
- **99.9% Reduction** in data entry errors.
- **25% Increase** in customer satisfaction scores.
- **$50,000 Saved** in operational costs in the first quarter alone.

---

## Client Testimonial

> "[A powerful and positive quote from a key stakeholder at the client's company, like the CEO or Project Manager.]"
>
> **– [Name of Stakeholder], [Their Title]**
`,
  },
  {
    name: 'Press Release',
    category: 'Business & Professional',
    content: `
**FOR IMMEDIATE RELEASE**

# [Your Company/Product Name] Announces [Major News, e.g., Launch of New Product]

**[City, State] – [Date]** – [Your Company Name], a leader in [Your Industry], today announced the launch of [Your Product Name], a groundbreaking solution designed to [solve a specific problem]. This new product will be available starting [Date] and aims to [state the main benefit for customers].

"[A compelling quote from a key person, like the CEO or Founder, about the significance of this announcement]," said [Name], [Title] at [Your Company Name]. "[Elaborate on the vision or the impact of the news.]"

Key features and benefits of [Your Product Name] include:

* **[Feature 1]:** [Briefly explain the benefit of this feature.]
* **[Feature 2]:** [Briefly explain the benefit of this feature.]
* **[Feature 3]:** [Briefly explain the benefit of this feature.]

[Your Product Name] will be available starting [Date] at [Price, or state where it can be accessed]. For more information, visit [Your Website URL].

**About [Your Company Name]:**
[A brief, standard paragraph about your company. What it does, its mission, and its key accomplishments. This is often called a "boilerplate."]

**Media Contact:**
[Name of Media Contact]
[Title]
[Email Address]
[Phone Number]
[Website URL]

###
`,
  },
  {
    name: 'Recipe Card',
    category: 'Personal Productivity',
    content: `
# [Recipe Name, e.g., Classic Lasagna]

*A short, enticing description of the dish. Example: "A rich and savory classic lasagna with layers of pasta, bolognese, and creamy béchamel sauce."*

- **Author:** [Your Name]
- **Yields:** [e.g., 6-8 servings]
- **Prep time:** [e.g., 30 minutes]
- **Cook time:** [e.g., 1 hour]

---

## Ingredients

### For the Bolognese Sauce:
- 1 tbsp Olive Oil
- 1 large Onion, chopped
- 2 cloves Garlic, minced
- 1 lb Ground Beef
- 1 (28 oz) can Crushed Tomatoes
- 1 tsp Dried Oregano
- Salt and Pepper to taste

### For the Béchamel Sauce:
- 4 tbsp Butter
- 1/4 cup All-Purpose Flour
- 4 cups Whole Milk
- Pinch of Nutmeg

### For Assembly:
- 12 Lasagna Noodles, cooked
- 2 cups Mozzarella Cheese, shredded
- 1/2 cup Parmesan Cheese, grated

---

## Instructions

1.  **Make the Bolognese:** Heat olive oil in a large pot over medium heat. Add onion and garlic and cook until softened. Add ground beef and cook until browned. Drain excess fat. Stir in crushed tomatoes, oregano, salt, and pepper. Simmer for at least 20 minutes.
2.  **Make the Béchamel:** In a separate saucepan, melt butter over medium heat. Whisk in flour and cook for 1 minute. Gradually whisk in milk until smooth. Bring to a simmer and cook until the sauce thickens, about 5-7 minutes. Remove from heat and stir in nutmeg.
3.  **Preheat Oven:** Preheat your oven to 375°F (190°C).
4.  **Assemble the Lasagna:** Spread a thin layer of bolognese on the bottom of a 9x13 inch baking dish. Arrange a single layer of noodles on top. Spread with a layer of béchamel, followed by a layer of bolognese, and a sprinkle of mozzarella. Repeat the layers, ending with a final layer of béchamel and a generous topping of mozzarella and Parmesan cheese.
5.  **Bake:** Cover with foil and bake for 25 minutes. Remove the foil and bake for another 20-25 minutes, or until the top is golden and bubbly. Let it rest for 10 minutes before serving.
`,
  },
  {
    name: 'Project Proposal',
    category: 'Business & Professional',
    content: `
# Project Proposal: [Project Name]

- **Prepared For:** [Client Name or Department]
- **Prepared By:** [Your Name / Your Company]
- **Date:** ${new Date().toLocaleDateString('en-CA')}

---

## 1. Problem Statement

A clear and concise description of the problem this project aims to solve. What is the current challenge or opportunity? Why is it important to address it now?

---

## 2. Proposed Solution

A high-level overview of our proposed solution. How will we address the problem stated above? What is the core idea or strategy?

---

## 3. Scope of Work

This section details the specific work that will be performed.

### In Scope:
- **Deliverable 1:** [e.g., A fully functional e-commerce website]
- **Deliverable 2:** [e.g., A content management system (CMS) for managing products]
- **Deliverable 3:** [e.g., User authentication and profile management]

### Out of Scope:
- [e.g., Mobile application development]
- [e.g., Ongoing content creation and marketing]

---

## 4. Timeline & Milestones

A projected timeline for the project, broken down into key phases and milestones.

| Milestone                  | Estimated Completion |
| :------------------------- | :------------------- |
| **Phase 1: Discovery & Design** | Week 2               |
| **Phase 2: Development** | Week 6               |
| **Phase 3: Testing & QA** | Week 8               |
| **Final Launch** | Week 9               |

---

## 5. Cost Estimate

A breakdown of the project costs.

| Item                      | Cost        |
| :------------------------ | :---------- |
| **Design & Prototyping** | $X,XXX      |
| **Development & Engineering** | $XX,XXX     |
| **Project Management** | $X,XXX      |
| **Total Estimated Cost** | **$XX,XXX** |

---

## 6. Next Steps

To proceed with this proposal, please sign and return by [Date]. Upon receipt, we will schedule a kickoff meeting to begin the discovery phase.
`,
  },
  {
    name: 'Product Launch Plan',
    category: 'Project Management',
    content: `
# Product Launch Plan: [Product Name]

- **Owner:** [Your Name]
- **Target Launch Date:** [Date]

---

## 1. Overview

Brief description of the product and its value proposition.

---

## 2. Goals

- Goal 1: [e.g., Acquire 1,000 users in first 30 days]
- Goal 2: [e.g., Get 20 press mentions]

---

## 3. Launch Timeline

| Phase                | Date         | Description                     |
| --------------------| ------------ | ------------------------------- |
| Pre-launch           | [Date]       | Final testing and prep          |
| Launch               | [Date]       | Press release, email campaign   |
| Post-launch followup | [Date]       | User feedback, bug fixes        |

---

## 4. Key Channels

- Website
- Email
- Social Media (Twitter, LinkedIn)
- Product Hunt
- Influencers / Partners

---

## 5. Metrics to Track

- Signups
- Engagement
- Churn
- Conversion Rate
`,
  },
  {
    name: 'User Persona',
    category: 'Project Management',
    content: `
# User Persona: [Persona Name]

- **Age:** [e.g., 28]
- **Occupation:** [e.g., Software Developer]
- **Location:** [e.g., Austin, TX]
- **Tech Comfort Level:** [e.g., High]

---

## Goals

- [e.g., Learn new web frameworks]
- [e.g., Build a portfolio]

## Frustrations

- [e.g., Poor documentation]
- [e.g., Too many tool choices]

## Tools They Use

- VS Code
- GitHub
- Notion

## Summary

[A short story summarizing this user’s typical day or challenges.]
`,
  },
  {
    name: 'Interview Transcript',
    category: 'Business & Professional',
    content: `
# Interview with [Name]

- **Role:** [e.g., Product Manager]
- **Date:** ${new Date().toLocaleDateString()}
- **Location:** [e.g., Zoom]

---

## Intro & Background

**Q:** Tell us about your role and responsibilities.  
**A:** [Transcript answer]

---

## Product Feedback

**Q:** What do you think of our current solution?  
**A:** [Transcript answer]

---

## Suggestions & Insights

**Q:** If you could change one thing, what would it be?  
**A:** [Transcript answer]

---

## Closing Notes

Final thoughts or follow-up action items.
`,
  },
  {
    name: 'Release Notes',
    category: 'Software Development',
    content: `
# Release Notes: Version X.X.X

**Release Date:** ${new Date().toLocaleDateString()}

---

## New Features

- Added [feature name] for [user benefit].
- Integrated with [API or tool].

## Bug Fixes

- Fixed crash when clicking [button].
- Resolved styling issue in dark mode.

## Improvements

- Improved performance of [component/page].
- Refactored [module].

## Breaking Changes

- [Be sure to update to use \`new-method()\` instead of \`old-method()\`]

## Known Issues

- [Issue summary + workaround, if any.]
`,
  },
  {
    name: 'Goal Tracker',
    category: 'Personal Productivity',
    content: `
# Goal Tracker

## Long-Term Goals

- [ ] Launch MVP of [Project]
- [ ] Hit 1,000 subscribers on [Platform]

## Monthly Goals - ${new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}

- [ ] Complete 3 blog posts
- [ ] Start user interviews

## Weekly Goals

| Week       | Goal                            | Done |
| ---------- | ------------------------------- | ---- |
| Week 1     | Build landing page              | [ ]  |
| Week 2     | Create social content calendar  | [ ]  |

---

## Review Notes

What went well? What to improve next time?
`,
  },
  {
    name: 'Book Summary',
    category: 'Personal Productivity',
    content: `
# Book Summary: *[Book Title]*

- **Author:** [Author Name]
- **Read On:** ${new Date().toLocaleDateString()}

---

## Key Themes

- [Theme 1]
- [Theme 2]
- [Theme 3]

---

## Favorite Quotes

> "[Insert Quote Here]" — *[Page X]*

> "[Insert Another Quote]"

---

## Summary

[A few paragraphs summarizing the book.]

---

## Takeaways / Lessons Learned

- [e.g., Focus on consistency over perfection.]
- [e.g., Your mindset shapes your outcomes.]

---

## Would You Recommend It?

[Yes / No + Why]
`,
  },
  {
    name: 'Learning Tracker',
    category: 'Personal Productivity',
    content: `
# Learning Tracker

## Subject: [e.g., Vue.js Fundamentals]

---

## Modules or Topics

- [ ] Introduction & Setup
- [ ] Components & Props
- [ ] Computed vs Watch
- [ ] Vue Router Basics
- [ ] Vuex State Management

---

## Resources

- [Course Name](https://example.com)
- [Official Docs](https://vuejs.org)

---

## Notes

Capture things you don’t want to forget:
- \`ref()\` is for reactive primitives
- \`computed()\` is cached until dependency changes

---

## Questions to Revisit

1. How does reactivity work under the hood?
2. What's the difference between props and emits?
`,
  },
  {
    name: 'Daily Standup',
    category: 'Project Management',
    content: `
# Daily Standup - ${new Date().toLocaleDateString()}

- **Name:** [Your Name]
- **Team:** [e.g., Frontend]

---

## What I Did Yesterday

- Finished styling login form
- Reviewed PR for markdown editor bug

## What I’m Working on Today

- Implement emoji picker modal
- Draft README starter content

## Blockers

- Waiting on backend endpoint for file upload
`,
  },
  {
    name: 'Client Onboarding Checklist',
    category: 'Business & Professional',
    content: `
# Client Onboarding Checklist: [Client Name]

- **Kickoff Date:** [MM/DD/YYYY]
- **Account Manager:** [Your Name]

---

## Access

- [ ] Added to Slack
- [ ] Shared Drive folder created
- [ ] Credentials provided

---

## Discovery

- [ ] Completed intro call
- [ ] Filled out onboarding questionnaire
- [ ] Shared initial design brief

---

## Setup Tasks

- [ ] Project board created in Notion
- [ ] GitHub repo shared
- [ ] Milestones agreed upon

---

## Notes

Any special requests, concerns, or observations.
`,
  },
  {
    name: 'Quote Collection',
    category: 'Personal Productivity',
    content: `
# Quote Collection

A personal archive of inspiring quotes.

---

> “Whether you think you can or you think you can’t, you’re right.”  
> — *Henry Ford*

---

> “Simplicity is the soul of efficiency.”  
> — *Austin Freeman*

---

> “In the middle of every difficulty lies opportunity.”  
> — *Albert Einstein*

---

> “The best way to predict the future is to invent it.”  
> — *Alan Kay*

---

Use this space to collect and revisit meaningful ideas.
`,
  },
  {
    name: 'Design Brief',
    category: 'Project Management',
    content: `
# Design Brief

- **Project Name:** [Insert name]
- **Prepared By:** [Your Name]
- **Date:** ${new Date().toLocaleDateString()}

---

## Objective

Describe the primary goal of this design project. What problem are you solving, or what outcome are you aiming for?

## Target Audience

Who is the end user? Include relevant demographics, goals, or user behaviors.

## Brand Guidelines

- Fonts: [List fonts]
- Colors: [Primary, secondary, accent]
- Style: [Modern, minimal, playful, etc.]

## Deliverables

List all required outputs (e.g., logo, website design, mobile UI screens).

## Timeline

| Milestone | Target Date |
| --------- | ----------- |
| Kickoff Meeting | [Date] |
| First Draft | [Date] |
| Final Handoff | [Date] |

## Notes

Any other considerations or constraints (e.g., accessibility, responsive design).
`,
  },
  {
    name: 'Sprint Planning',
    category: 'Project Management',
    content: `
# Sprint Planning Document

- **Sprint #:** [e.g., 21]
- **Duration:** [Start Date] - [End Date]
- **Team:** [List team members]

---

## Sprint Goal

Summarize the overall goal of the sprint in one or two sentences.

## Backlog Items (Selected for Sprint)

| Issue | Title | Story Points | Assignee |
|-------|-------|--------------|----------|
| #101 | Add login flow | 3 | Alice |
| #102 | Fix cart bug | 2 | Bob |

## Tasks Breakdown

List subtasks or specific actions for each backlog item.

## Blockers

List any known issues or risks before the sprint begins.

## Notes

Any extra context, dependencies, or upcoming events.
`,
  },
  {
    name: 'API Spec',
    category: 'Software Development',
    content: `
# API Specification: [Feature or Module Name]

- **Version:** 1.0
- **Author:** [Your Name]
- **Last Updated:** ${new Date().toLocaleDateString()}

---

## Endpoint

\`\`\`
GET /api/resource/:id
\`\`\`

## Description

Briefly describe what this endpoint does.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| id | string | The unique identifier for the resource. |

## Response

\`\`\`json
{
  "id": "abc123",
  "name": "Sample",
  "createdAt": "2024-01-01T00:00:00Z"
}
\`\`\`

## Status Codes

- 200 OK: Resource found
- 404 Not Found: Resource does not exist
- 500 Internal Server Error

## Notes

Any authentication requirements, headers, or special considerations.
`,
  },
  {
    name: 'Bug Triage Sheet',
    category: 'Software Development',
    content: `
# Bug Triage - ${new Date().toLocaleDateString()}

## Overview

This document summarizes current open bugs and their triage status.

## Bugs List

| ID | Title | Severity | Status | Owner |
|----|-------|----------|--------|-------|
| #201 | Login fails with invalid token | High | Open | Jane |
| #202 | Tooltip offset issue | Low | Backlog | Tom |

## Notes

Mention test coverage, environment conditions, or reproduction steps if needed.
`,
  },
  {
    name: 'Workshop Outline',
    category: 'Business & Professional',
    content: `
# Workshop Outline: [Workshop Title]

- **Facilitator:** [Your Name]
- **Date:** [Insert Date]
- **Duration:** [e.g., 3 hours]
- **Audience:** [e.g., Beginner Developers]

---

## Goals

What should participants be able to do/know by the end?

## Agenda

| Time | Topic |
|------|-------|
| 10:00 AM | Introduction & Icebreaker |
| 10:30 AM | Core Topic 1 |
| 11:15 AM | Break |
| 11:30 AM | Hands-On Activity |
| 12:30 PM | Q&A and Wrap-Up |

## Required Materials

List software, accounts, tools, or downloads needed.

## Feedback

How will you collect feedback after the workshop?
`,
  },
  {
    name: 'Event Planning Checklist',
    category: 'Project Management',
    content: `
# Event Planning Checklist

- **Event Name:** [Insert name]
- **Date:** [Insert date]
- **Location:** [Insert location or platform]

---

## Pre-Event Tasks

- [ ] Confirm venue or online platform
- [ ] Create event registration form or page
- [ ] Send invites and promotional materials
- [ ] Arrange speakers, panelists, or guests
- [ ] Prepare slides and materials

## Day-of Tasks

- [ ] Check-in/setup
- [ ] Tech checks (mic, video, projector)
- [ ] Start on time
- [ ] Monitor Q&A or chat
- [ ] Record the session if needed

## Post-Event

- [ ] Send thank-you emails
- [ ] Share recording or slides
- [ ] Collect feedback
- [ ] Write internal debrief

## Notes

Include budget, contact numbers, or links.
`,
  },
  {
    name: 'Feature Request',
    category: 'Project Management',
    content: `
# Feature Request: [Feature Name]

- **Submitted By:** [Name]
- **Date:** ${new Date().toLocaleDateString()}

---

## Summary

A brief summary of the feature being proposed.

## Motivation

Explain why this feature is needed. What problem does it solve?

## Proposed Solution

Describe how the feature could work.

## Alternatives Considered

Mention any other ideas that were explored and why they were rejected.

## Impact

How will this feature benefit users or improve the product?

## Notes

Attach any wireframes, mockups, or references here.
`,
  },
  {
    name: 'Pitch Deck Outline',
    category: 'Business & Professional',
    content: `
# Pitch Deck Outline

A guide for drafting a startup or product pitch deck in markdown.

---

## Slide 1: Title

- Company name
- Tagline
- Presenter info

## Slide 2: Problem

Clearly define the user or market problem.

## Slide 3: Solution

What do you offer? Show how your product solves the problem.

## Slide 4: Market Opportunity

How big is the market? Include numbers or trends.

## Slide 5: Product Demo

Screenshots or quick description of your product in action.

## Slide 6: Business Model

How do you make money?

## Slide 7: Team

Key people and roles.

## Slide 8: Ask

Funding request, partnership, or next steps.

## Notes

Can be converted into slides using md-to-pdf or similar tools.
`,
  },
  {
    name: 'Incident Report',
    category: 'Software Development',
    content: `
# Incident Report: [Issue Summary]

- **Reported On:** ${new Date().toLocaleDateString()}
- **Impact Level:** [High / Medium / Low]
- **Status:** Resolved / Ongoing / Investigating

---

## Summary

Briefly explain what happened.

## Timeline

| Time | Event |
|------|-------|
| 14:02 | Issue reported |
| 14:10 | Engineering notified |
| 14:30 | Fix deployed |

## Root Cause

Explain what caused the incident and how it was diagnosed.

## Resolution

What steps were taken to fix the issue?

## Follow-Up Actions

- [ ] Add monitoring
- [ ] Improve logging
- [ ] Document mitigation steps

## Lessons Learned

What can we improve for next time?
`,
  },
  {
    name: 'FAQ Document',
    category: 'Content & Writing',
    content: `
# Frequently Asked Questions (FAQ)

## General

**Q: What is [Product Name]?**  
A: It's a tool that helps you [primary value proposition].

**Q: Is it free to use?**  
A: [Insert your pricing or license terms.]

## Technical

**Q: What browsers are supported?**  
A: [List major browsers and minimum versions.]

**Q: How do I report bugs?**  
A: Use the [GitHub Issues page](https://github.com/your-repo/issues) or contact us at [support@example.com].

## Usage

**Q: Can I import existing data?**  
A: Yes, follow the instructions in the import guide.

**Q: Is there a mobile app?**  
A: Not yet, but it’s on our roadmap.

## Contact

Still have questions? Reach out to us: [support@example.com]
`,
  },
  {
    name: 'Pull Request (PR) Description',
    category: 'Software Development',
    content: `
# Pull Request: [Brief, Imperative-Mood Title]

- **Closes:** #[Issue Number]

---

## Description

A clear and concise summary of the changes introduced in this pull request. Explain the "why" behind this change.

## Changes Made

- [ ] Added a new component for [feature].
- [ ] Refactored the authentication service to be more efficient.
- [ ] Fixed a bug where [describe bug].

## How to Test

Provide clear, step-by-step instructions for the reviewer to test these changes.

1.  Checkout this branch.
2.  Run \`npm install\`.
3.  Navigate to the '/new-feature' page.
4.  Verify that [expected behavior] occurs.

## Screenshots

*Include before and after screenshots or GIFs if this PR includes UI changes.*

| Before | After |
| :----: | :---: |
|        |       |

## Notes for Reviewer

Is there anything specific you want the reviewer to focus on? Any potential trade-offs or future considerations?
`,
  },
  {
    name: 'Architecture Decision Record',
    category: 'Software Development',
    content: `
# ADR-001: [Title of ADR]

- **Date:** ${new Date().toLocaleDateString('en-CA')}
- **Status:** [Proposed / Accepted / Deprecated / Superseded]

## Context

What is the issue that we're seeing that is motivating this decision or change? Describe the problem, constraints, and forces at play.

## Decision

What is the change that we're proposing and/or doing? Be specific and clear.

## Consequences

What becomes easier or better, what becomes harder or worse, and what are the trade-offs of this decision?

- **Positive:** [e.g., Improved performance, better developer experience]
- **Negative:** [e.g., Increased complexity, reliance on a new dependency]
- **Neutral:** [e.g., A change in coding style]
`,
  },
  {
    name: 'SWOT Analysis',
    category: 'Business & Professional',
    content: `
# SWOT Analysis: [Subject of Analysis]

- **Date:** ${new Date().toLocaleDateString()}
- **Participants:** [List of names]

---

## Strengths

*What internal factors give us an advantage?*

- 
- 
- 

## Weaknesses

*What internal factors put us at a disadvantage?*

- 
- 
- 

## Opportunities

*What external factors could we take advantage of?*

- 
- 
- 

## Threats

*What external factors could harm our position?*

- 
- 
- 

---

## Summary & Action Items

Based on the analysis, what are the key takeaways and next steps?
`,
  },
  {
    name: 'Invoice',
    category: 'Business & Professional',
    content: `
# Invoice

**From:**
[Your Name / Your Company]
[Your Address]
[Your Email]

**To:**
[Client Name]
[Client Address]
[Client Email]

- **Invoice #:** [001]
- **Date:** ${new Date().toLocaleDateString()}
- **Due Date:** [Date]

---

| Description | Quantity | Unit Price | Total |
| :--- | :---: | :---: | :---: |
| [Service or Product Name] | 1 | $X,XXX | $X,XXX |
| [Another Service] | 10 | $XXX | $X,XXX |
| | | **Subtotal** | **$XX,XXX** |
| | | **Tax (X%)** | **$X,XXX** |
| | | **Total** | **$XX,XXX** |

---

## Payment Details

Please send payment via [Method, e.g., PayPal, Bank Transfer].
**Account:** [Your Payment Details]

*Thank you for your business!*
`,
  },
  {
    name: 'Performance Review',
    category: 'Business & Professional',
    content: `
# Performance Review

- **Employee:** [Employee Name]
- **Reviewer:** [Manager Name]
- **Period:** [Start Date] - [End Date]
- **Date of Review:** ${new Date().toLocaleDateString()}

---

## 1. Accomplishments

List the key achievements and successes during this review period.

- 
- 
- 

## 2. Areas for Improvement

Identify areas where growth is needed. Provide specific, constructive examples.

- 
- 
- 

## 3. Employee Comments

A space for the employee to share their perspective on their performance, challenges, and accomplishments.

## 4. Goals for Next Period

Define clear, measurable, and achievable goals for the next review period.

1.  **Goal:** [Specific Goal]
    - **Metric:** [How to measure success]
    - **Target Date:** [Date]

2.  **Goal:** [Another Specific Goal]
    - **Metric:** [How to measure success]
    - **Target Date:** [Date]

---

**Employee Signature:** _________________________

**Manager Signature:** _________________________
`,
  },
  {
    name: 'Podcast Show Notes',
    category: 'Content & Writing',
    content: `
# Show Notes: Episode [##] - [Episode Title]

- **Published:** [Date]
- **Host(s):** [Your Name]
- **Guest(s):** [Guest Name], [Guest Title] ([@GuestTwitter](https://twitter.com/GuestTwitter))

---

## Summary

A one-paragraph summary of what this episode is about.

## Topics Discussed

- (01:15) - Introduction to [Topic 1].
- (10:30) - Deep dive into [Topic 2].
- (25:00) - Our guest explains [a key concept].
- (45:10) - Q&A and listener questions.

## Links & Resources

* [Guest's Website](https://example.com)
* [Book Mentioned: "Book Title"](https://example.com)
* [Tool Mentioned: "Tool Name"](https://example.com)

---

*Thanks for listening! Follow us on [Twitter](https://twitter.com/YourShow) and subscribe wherever you get your podcasts.*
`,
  },
  {
    name: 'YouTube Video Script',
    category: 'Content & Writing',
    content: `
# YouTube Script: [Video Title]

- **Channel:** [Your Channel Name]
- **Target Length:** [e.g., 8-10 minutes]

---

| Visual / B-Roll | Audio / Dialogue |
| :--- | :--- |
| **Intro (0:00 - 0:15)** | |
| Title card with upbeat music. |**(Hook)** "Have you ever wondered how to [solve a specific problem]? In this video, I'm going to show you exactly how to do it in just three simple steps."|
| Quick montage of final result. | "I'm [Your Name], and you're watching [Your Channel]." |
| **Step 1 (0:15 - 3:00)** | |
| Screencast of [Action 1]. | "Okay, the first thing you need to do is open up your editor and..." |
| Zoom in on a key button. | "Make sure you click this specific checkbox here. This is a common mistake people make."|
| **Step 2 (3:00 - 6:00)** | |
| Whiteboard diagram explaining a concept. | "Now, let's talk about the 'why'. The reason this works is because..." |
| **Outro (6:00 - ...)** | |
| "You" subscribe button animation. | "And there you have it! If you found this useful, click the like button and subscribe for more tutorials every week. Let me know in the comments what you'd like to see next. Thanks for watching!"|
`,
  },
  {
    name: 'Trip Planner',
    category: 'Personal Productivity',
    content: `
# Trip to [Destination]

- **Dates:** [Start Date] to [End Date]
- **Travelers:** [List of names]

---

## Transportation

### Flights
- **Departure:** [Airline], Flight [Number] - [Date] @ [Time]
- **Return:** [Airline], Flight [Number] - [Date] @ [Time]
- **Confirmation #:** [Confirmation Number]

### Local Transit
- **Rental Car:** [Company], Confirmation #[Number]
- **Notes:** [e.g., Need to buy subway pass at airport]

---

## Accommodation

- **Hotel/Airbnb Name:** [Name of Place]
- **Address:** [Full Address]
- **Check-in:** [Date] @ [Time]
- **Check-out:** [Date] @ [Time]
- **Confirmation #:** [Confirmation Number]

---

## Itinerary

### Day 1: [Date]
- [ ] Arrive and check in
- [ ] [Activity 1]
- [ ] Dinner at [Restaurant Name]

### Day 2: [Date]
- [ ] [Activity 2]
- [ ] [Activity 3]
- [ ] Lunch at [Cafe Name]

---

## Packing List

- [ ] Passport
- [ ] Chargers
- [ ] [Item]
`,
  },
  {
    name: 'Weekly Meal Planner',
    category: 'Personal Productivity',
    content: `
# Weekly Meal Plan

**Week of:** ${new Date().toLocaleDateString()}

---

| Day | Breakfast | Lunch | Dinner |
| :--- | :--- | :--- | :--- |
| **Monday** | Oatmeal | Leftover Dinner | Spaghetti Bolognese |
| **Tuesday** | Yogurt & Granola | Chicken Salad | Tacos |
| **Wednesday** | Scrambled Eggs | Soup & Sandwich | Lemon Herb Salmon |
| **Thursday** | Smoothie | Leftover Salmon | Chicken Stir-fry |
| **Friday** | Cereal | Quinoa Bowl | Pizza Night |
| **Saturday**| Pancakes | Sandwiches | Burgers on the Grill |
| **Sunday** | Omelette | Leftovers | Roast Chicken |

---

## Grocery List

### Produce
- [ ] Onions
- [ ] Garlic
- [ ] Salad Greens
- [ ] Lemons

### Meat / Protein
- [ ] Ground Beef
- [ ] Chicken Breast
- [ ] Salmon

### Pantry
- [ ] Pasta
- [ ] Canned Tomatoes
`,
  },
  {
    name: 'Habit Tracker',
    category: 'Personal Productivity',
    content: `
# Habit Tracker: [Month] [Year]

| Habit | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | ... |
| :--- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Wake up at 6 AM | ✅ | ❌ | ✅ | | | | | | | | | | | | | | |
| Exercise | ✅ | ✅ | ❌ | | | | | | | | | | | | | | |
| Read 10 Pages | ✅ | ✅ | ✅ | | | | | | | | | | | | | | |
| No Junk Food | ❌ | ✅ | ✅ | | | | | | | | | | | | | | |
| Meditate | | | | | | | | | | | | | | | | | |

---

## Notes & Reflections

*What patterns did I notice? What can I improve for next month?*
`,
  },
  {
    name: 'Tech Spec / RFC',
    category: 'Software Development',
    content: `
# RFC: [Descriptive Title of the Proposal]

- **Author:** [Your Name]
- **Status:** Draft
- **Date:** ${new Date().toLocaleDateString('en-CA')}

## 1. Summary

A high-level summary of the technical proposal. What are we building and why?

## 2. Motivation

What is the problem we are trying to solve? Why is this change necessary? Provide context, user stories, or data to support the need for this work.

## 3. Technical Design

This is the core of the document. Describe the proposed implementation in detail.

- **Data Model Changes:**
- **API Endpoints:**
- **Frontend Components:**
- **Sequence Diagrams or Flowcharts:**

## 4. Drawbacks

What are the potential negative consequences or trade-offs of this approach?

## 5. Alternatives Considered

What other solutions were considered, and why were they rejected in favor of this proposal?

## 6. Unresolved Questions

What questions still need to be answered before implementation can begin?
`,
  },
  {
    name: 'Job Offer Letter',
    category: 'Business & Professional',
    content: `
[Your Company Name]
[Your Company Address]

${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}

[Candidate Name]
[Candidate Address]

**Subject: Offer of Employment with [Your Company Name]**

Dear [Candidate Name],

On behalf of [Your Company Name], I am delighted to offer you the position of **[Job Title]**. We were all very impressed during the interview process, and we believe your skills and experience will be a valuable asset to our team.

This is a [full-time / part-time / contract] position reporting to [Manager's Name], [Manager's Title]. Your anticipated start date will be on or before **[Start Date]**.

Your starting annual salary will be **$[Salary]**, payable in accordance with the company's standard payroll schedule. You will also be eligible for [mention any bonus, stock options, etc.].

As an employee of [Your Company Name], you will be eligible for our standard benefits package, which includes:
- [Benefit 1, e.g., Health, Dental, and Vision Insurance]
- [Benefit 2, e.g., Paid Time Off]
- [Benefit 3, e.g., 401(k) Plan]

This offer is contingent upon the successful completion of a background check and verification of your employment eligibility.

Please indicate your acceptance of this offer by signing and returning a copy of this letter by **[Acceptance Deadline]**.

We are very excited about the possibility of you joining our team.

Sincerely,

[Your Name]
[Your Title]
`,
  },
  {
    name: 'Business Plan Outline',
    category: 'Business & Professional',
    content: `
# Business Plan: [Company Name]

## 1. Executive Summary
A high-level overview of the entire business plan. Write this section last.

## 2. Company Description
- **Mission Statement:**
- **Legal Structure:**
- **Goals & Objectives:**

## 3. Market Analysis
- **Industry Overview:**
- **Target Market:**
- **Competitor Analysis:**

## 4. Organization & Management
- **Management Team:**
- **Organizational Structure:**
- **Key Roles & Responsibilities:**

## 5. Products or Services
- **Product/Service Description:**
- **Competitive Advantage:**
- **Pricing Strategy:**

## 6. Marketing & Sales Strategy
- **Marketing Plan:**
- **Sales Strategy:**
- **Distribution Channels:**

## 7. Financial Projections
- **Startup Costs:**
- **Revenue Projections (Year 1-3):**
- **Break-Even Analysis:**
`,
  },
  {
    name: 'Meeting Agenda',
    category: 'Business & Professional',
    content: `
# Meeting Agenda: [Meeting Title]

- **Date:** [Date]
- **Time:** [Start Time] - [End Time]
- **Location:** [e.g., Zoom Link, Conference Room]
- **Attendees:** [List of required attendees]

---

## Meeting Goal

The primary objective of this meeting is to [e.g., decide on the Q4 marketing strategy].

---

## Agenda

| Time | Duration | Topic | Owner |
| :--- | :--- | :--- | :--- |
| 10:00 AM | 5 min | Welcome & Goal Review | [Name] |
| 10:05 AM | 15 min | Review of Q3 Performance | [Name] |
| 10:20 AM | 25 min | Presentation of Q4 Strategy Options | [Name] |
| 10:45 AM | 10 min | Discussion & Decision | All |
| 10:55 AM | 5 min | Action Items & Wrap-up | [Name] |

---

## Pre-Reading / Preparation

*Please review the following documents before the meeting:*
- [Link to Q3 Performance Report](https://example.com)
- [Link to Q4 Strategy Draft](https://example.com)
`,
  },
  {
    name: 'Cover Letter',
    category: 'Business & Professional',
    content: `
[Your Name]
[Your Address]
[Your Phone Number]
[Your Email]

${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}

[Hiring Manager Name] (If known, otherwise use title)
[Hiring Manager Title]
[Company Name]
[Company Address]

**Subject: Application for the [Job Title] Position**

Dear [Mr./Ms./Mx. Last Name],

I am writing to express my enthusiastic interest in the [Job Title] position at [Company Name], which I discovered on [Platform, e.g., LinkedIn, your company website]. With my [X] years of experience in [Your Industry/Field] and a proven track record of [mention a key skill or accomplishment], I am confident that I possess the skills and qualifications necessary to excel in this role.

In my previous position at [Previous Company], I was responsible for [mention a key responsibility]. One of my proudest achievements was [describe a specific accomplishment and its positive result], which demonstrates my ability to [relate the accomplishment to a requirement in the job description]. I am particularly drawn to [Company Name]'s commitment to [mention something specific about the company's mission, values, or products] and I am eager to contribute to such an innovative team.

My resume provides further detail on my accomplishments, and I am keen to discuss how my background in [mention another key skill] can be an asset to [Company Name].

Thank you for your time and consideration. I look forward to the possibility of discussing this exciting opportunity with you further.

Sincerely,
[Your Name]
`,
  },
  {
    name: 'Newsletter Draft',
    category: 'Content & Writing',
    content: `
---
**Subject:** [Compelling Subject Line, e.g., ✨ What's New This Week]
**Preheader:** [A short, enticing sentence that appears after the subject line in inboxes.]
---

Hi [First Name],

**(Hook)** A short, engaging opening to grab the reader's attention.

**(Main Content)**
This is the core of your email. Share your main update, story, or piece of content here. Use headings and lists to keep it scannable.

### [Subheading for a key point]

Elaborate on a specific point here.

**(Call to Action - CTA)**
A clear, single action you want the reader to take.

[**→ Read the Full Article**](https://example.com)

Cheers,
[Your Name] / The [Your Brand] Team
`,
  },
  {
    name: 'Creative Writing Outline',
    category: 'Content & Writing',
    content: `
# Story Outline: [Working Title]

- **Genre:** [e.g., Sci-Fi, Fantasy, Mystery]
- **Logline:** [A one-sentence summary of the story.]

---

## Characters

- **Protagonist:** [Name, brief description, core motivation, fatal flaw.]
- **Antagonist:** [Name, brief description, what they want, why they oppose the protagonist.]
- **Supporting Character:** [Name, their role in the story.]

---

## The Three-Act Structure

### Act I: The Setup
* **Opening Image:** The first scene, establishing the protagonist's world.
* **Inciting Incident:** The event that kicks off the story and disrupts the protagonist's life.
* **Debate / Refusal of the Call:** The protagonist hesitates to take on the challenge.
* **Plot Point 1 (End of Act I):** The protagonist commits to the journey.

### Act II: The Confrontation
* **Rising Action:** A series of challenges and obstacles. The stakes get higher.
* **Midpoint:** A major turning point—either a false victory or a false defeat.
* **Plot Point 2 (End of Act II):** The "dark night of the soul." All seems lost.

### Act III: The Resolution
* **Climax:** The final confrontation between the protagonist and antagonist.
* **Falling Action:** Tying up loose ends after the climax.
* **Final Image:** The protagonist in their new reality, showing how they have changed.
`,
  },
  {
    name: 'Workout Log',
    category: 'Personal Productivity',
    content: `
# Workout Log

- **Date:** ${new Date().toLocaleDateString()}
- **Workout Type:** [e.g., Full Body, Push Day, Cardio]
- **Duration:** [e.g., 60 minutes]

---

| Exercise | Set 1 | Set 2 | Set 3 | Notes |
| :--- | :---: | :---: | :---: | :--- |
| **Squats** | 135lbs x 8 | 135lbs x 8 | 145lbs x 6 | Felt strong |
| **Bench Press** | 150lbs x 6 | 150lbs x 5 | 150lbs x 5 | |
| **Pull-ups** | 8 reps | 7 reps | 6 reps | Bodyweight |
| **Plank** | 60 sec | 60 sec | | |

---

## Cardio

| Activity | Duration | Distance/Notes |
| :--- | :--- | :--- |
| **Treadmill Run** | 20 min | 2 miles, steady pace |

---

## Post-Workout Notes

*How did the workout feel? Any personal records? Anything to change for next time?*
`,
  },
  {
    name: 'Decision Log',
    category: 'Personal Productivity',
    content: `
# Decision Log

## Decision: [A clear summary of the decision to be made]

- **Status:** [Not Started / In Progress / Decided]
- **Date:** ${new Date().toLocaleDateString()}
- **Owner:** [Your Name]

---

### 1. The Problem / Context
*What is the core question or problem that requires a decision? Why does it need to be made now?*

### 2. Considered Options

#### Option A: [Name of Option]
- **Pros:**
  - 
- **Cons:**
  - 

#### Option B: [Name of Option]
- **Pros:**
  - 
- **Cons:**
  - 

#### Option C: [Name of Option]
- **Pros:**
  - 
- **Cons:**
  - 

---

### 3. The Decision
**We have decided to proceed with Option [A/B/C].**

*Justify the decision. Why was this option chosen over the others?*

### 4. Outcome & Review
*(To be filled out later)*

- **What was the result of this decision?**
- **Was it the right call? What did we learn?**
`,
  },
  {
    name: 'Cornell Notes',
    category: 'Personal Productivity',
    content: `
# Cornell Notes: [Subject/Topic]

- **Date:** ${new Date().toLocaleDateString()}
- **Class/Meeting:** [Name of Class or Meeting]

---

| Cues & Questions (Left Column) | Notes (Right Column) |
| :--- | :--- |
| *After the lecture, write questions or main ideas here that correspond to the notes on the right.* | **Main Notes Area:** Take your detailed notes during the lecture or meeting here. Use shorthand, bullet points, and abbreviations. |
| | |
| What is the primary benefit? | - Main point 1 discussed. |
| | - Detail 1a |
| | - Detail 1b |
| | |
| How does it work? | - Key concept 2 explained. |
| | - Example given: ... |
| | |
| Why is it important? | - Statistic or fact mentioned. |
| | - Connects to [previous topic]. |
| | |

---

## Summary

*After reviewing your notes, write a 1-2 sentence summary of the entire page here. This forces you to process and understand the main points.*
`,
  },
  {
    name: 'Lab Report',
    category: 'Content & Writing',
    content: `
# Lab Report: [Title of Experiment]

- **Author(s):** [Your Name(s)]
- **Course:** [Course Name, e.g., CHEM-101]
- **Date:** ${new Date().toLocaleDateString()}

---

## 1. Introduction / Purpose

State the objective of the experiment. What question are you trying to answer or what hypothesis are you testing? Provide any relevant background theory.

## 2. Materials & Equipment

List all materials, chemicals, and equipment used in the experiment.

- Item 1 (e.g., 50ml Beaker)
- Item 2 (e.g., Bunsen Burner)
- Item 3 (e.g., 10g of Sodium Chloride)

## 3. Procedure

Provide a step-by-step description of how the experiment was conducted. It should be detailed enough for someone else to replicate it.

1.  [First step...]
2.  [Second step...]
3.  [Third step...]

## 4. Results / Data

Present the raw data collected during the experiment. Use tables and figures where appropriate.

| Trial | Measurement 1 | Measurement 2 |
| :---: | :---: | :---: |
| 1 | Value A | Value B |
| 2 | Value C | Value D |

## 5. Discussion & Analysis

Interpret the data presented in the Results section. Was the hypothesis supported? Discuss any potential sources of error and their impact on the results.

## 6. Conclusion

Briefly summarize the findings of the experiment and state whether the objective was achieved.
`,
  },
  {
    name: 'Literature Review Outline',
    category: 'Content & Writing',
    content: `
# Literature Review: [Topic of Research]

## I. Introduction
- **A. Hook:** Introduce the general topic.
- **B. Context:** Provide background and define the scope of the review.
- **C. Thesis/Purpose:** State the objective of your review (e.g., to identify gaps, to summarize the state of the field).

## II. Body Paragraphs (Grouped by Theme)

### Theme 1: [Name of the First Major Theme]
- **A. Source 1 (Author, Year):**
  - Main finding/argument:
  - Connection to your research:
- **B. Source 2 (Author, Year):**
  - Main finding/argument:
  - How it supports/contradicts Source 1:

### Theme 2: [Name of the Second Major Theme]
- **A. Source 3 (Author, Year):**
  - Main finding/argument:
- **B. Source 4 (Author, Year):**
  - Main finding/argument:

## III. Conclusion
- **A. Summary:** Briefly summarize the main findings from the literature.
- **B. Gaps & Future Research:** Identify what is missing in the current research and suggest directions for future studies.
- **C. Final Statement:** Conclude with a final thought on the topic's importance.
`,
  },
  {
    name: 'Personal Budget',
    category: 'Personal Productivity',
    content: `
# Monthly Budget: [Month] [Year]

## Income

| Source | Projected | Actual |
| :--- | :--- | :--- |
| Salary | $X,XXX | |
| Side Hustle | $XXX | |
| **Total Income** | **$XX,XXX** | |

---

## Fixed Expenses

| Expense | Projected | Actual |
| :--- | :--- | :--- |
| Rent/Mortgage | $X,XXX | |
| Utilities | $XXX | |
| Insurance | $XXX | |
| Car Payment | $XXX | |
| **Total Fixed**| **$X,XXX** | |

---

## Variable Expenses

| Expense | Projected | Actual |
| :--- | :--- | :--- |
| Groceries | $XXX | |
| Gas/Transport | $XXX | |
| Entertainment| $XXX | |
| Shopping | $XXX | |
| **Total Variable** | **$X,XXX** | |

---

## Summary

| Category | Projected | Actual |
| :--- | :--- | :--- |
| Total Income | $XX,XXX | |
| Total Expenses | $XX,XXX | |
| **Net (Savings)**| **$X,XXX** | |
`,
  },
  {
    name: 'User Story (Agile)',
    category: 'Software Development',
    content: `
# User Story: [Short Title of the Story]

**As a** [type of user],  
**I want** [to perform some action],  
**So that** [I can achieve some goal/benefit].

---

## Acceptance Criteria

- [ ] **Scenario 1:** Given [context], when [I do this], then [this should happen].
- [ ] **Scenario 2:** Given [another context], when [I do something else], then [this is the expected outcome].
- [ ] **Scenario 3 (Edge Case):** Given [a specific edge case], when [I try to break it], then [a specific error or fallback occurs].

## Notes

- [Any technical notes, dependencies, or links to mockups can go here.]
- [Link to Figma Design](https://figma.com/...)
`,
  },
  {
    name: 'One-on-One (1:1) Meeting',
    category: 'Business & Professional',
    content: `
# 1:1 Meeting: [Manager Name] & [Employee Name]

- **Date:** ${new Date().toLocaleDateString()}

---

## Employee's Agenda

*(To be filled out by the employee before the meeting)*

- **Topic 1:** [Discussion point, question, or update]
- **Topic 2:** [Career development, feedback request, etc.]
- **Topic 3:** [Blockers or challenges]

## Manager's Agenda

*(To be filled out by the manager before the meeting)*

- **Topic 1:** [Feedback on recent project]
- **Topic 2:** [Company update or team news]
- **Topic 3:** [Checking in on goals]

## Notes & Discussion

*Capture key points from the conversation here.*

## Action Items

- [ ] **(Employee)** [Specific action item to complete] - Due: [Date]
- [ ] **(Manager)** [Specific action item to complete] - Due: [Date]
`,
  },
  {
    name: 'Game Design Document (GDD) Outline',
    category: 'Content & Writing',
    content: `
# GDD: [Game Title] - High-Level Outline

- **Genre:** [e.g., 2D Platformer, Puzzle, RPG]
- **Target Audience:** [e.g., Casual Mobile Gamers, Core PC Players]

---

## 1. Core Concept
A one-paragraph "elevator pitch" for the game. What is the core gameplay loop? What makes it unique?

## 2. Gameplay Mechanics
- **Player Actions:** [List all actions the player can take, e.g., run, jump, attack]
- **Core Systems:** [Describe key systems, e.g., combat, inventory, dialogue]
- **Level Progression:** [How does the player advance through the game?]

## 3. Characters
- **Playable Character(s):** [Description, abilities, backstory]
- **Enemies / NPCs:** [List key enemy types or important non-player characters]

## 4. Art & Sound
- **Visual Style:** [Art direction, e.g., pixel art, cel-shaded, realistic]
- **Music & Sound FX:** [Mood and style of the soundtrack and sound effects]

## 5. User Interface (UI)
- **HUD (Heads-Up Display):** [What information is always on screen?]
- **Menus:** [List key menus, e.g., Main Menu, Pause Menu, Inventory Screen]

## 6. Monetization (if applicable)
- [e.g., Premium (one-time purchase), Free-to-play with IAPs, Ads]
`,
  },
  {
    name: 'D&D Character Sheet',
    category: 'Personal Productivity',
    content: `
# D&D Character Sheet

## Character Info
- **Name:** - **Class & Level:** - **Race:** - **Alignment:** - **Background:** - **Player Name:** ---

## Ability Scores
| Stat | Score | Modifier |
| :--- | :---: | :---: |
| **Strength** | 10 | +0 |
| **Dexterity** | 10 | +0 |
| **Constitution** | 10 | +0 |
| **Intelligence** | 10 | +0 |
| **Wisdom** | 10 | +0 |
| **Charisma** | 10 | +0 |

---

## Combat
- **Armor Class:** - **Initiative:** - **Speed:** - **Hit Points:** Max __ / Current __
- **Attacks & Spellcasting:** ---

## Skills & Proficiencies
- **Proficiency Bonus:** +2
- **Saving Throws:** - **Skills:** - **Languages & Other Proficiencies:** ---

## Inventory
- **Equipment:** - **Gold:** `,
  },
  {
    name: '"Week in Review" Journal',
    category: 'Personal Productivity',
    content: `
# Week in Review

**For the week of:** [Start Date] - [End Date]

---

## 1. Top 3 Wins This Week
*What were my biggest accomplishments or moments of pride?*

1. 
2. 
3. 

## 2. What Challenges Did I Face?
*What was difficult? Where did I get stuck or feel frustrated?*

- 

## 3. What Did I Learn?
*A new skill, an insight about myself, or a lesson from a mistake.*

- 

## 4. How Am I Feeling?
*A quick check-in on my overall mood and energy levels.*

## 5. What Is My #1 Priority for Next Week?
*What is the single most important thing I need to accomplish next week to move forward?*

- 
`,
  },
  {
    name: 'Emergency Plan',
    category: 'Personal Productivity',
    content: `
# Household Emergency Plan

---

## 1. Emergency Contacts

| Name | Relation | Phone Number |
| :--- | :--- | :--- |
| | | |
| | | |
| **Police** | - | 911 |
| **Fire** | - | 911 |
| **Poison Control**| - | (800) 222-1222 |

---

## 2. Meeting Places

- **Indoor (e.g., Fire):** [e.g., The large oak tree across the street]
- **Outdoor (e.g., Earthquake/Evacuation):** [e.g., The front entrance of the local library]

---

## 3. Utility Shut-Off Locations

- **Main Water Shut-Off:** [Location and instructions]
- **Main Gas Shut-Off:** [Location and instructions]
- **Main Electrical Breaker:** [Location and instructions]

---

## 4. Emergency Supply Kit Checklist

- [ ] Water (1 gallon per person, per day, for 3 days)
- [ ] Non-perishable food (3-day supply)
- [ ] First-aid kit
- [ ] Flashlight and extra batteries
- [ ] Battery-powered or hand-crank radio
- [ ] Whistle to signal for help
- [ ] Copies of important documents (ID, insurance)
- [ ] Cash
`,
  },
]
