/**
 * Other Frappe apps we can set up. Feature lists follow each app's official pages.
 * Features change between versions, so every page points to the official source.
 */
import { links } from "@/lib/links";

export type AppFeature = { title: string; text: string };
export type App = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  who: string[];
  features: AppFeature[];
  useCases: { title: string; text: string }[];
  implement: string[];
  faqs: { q: string; a: string }[];
  official: string;
  trial?: string;
};

export const apps: App[] = [
  {
    slug: "frappe-hr",
    name: "Frappe HR",
    short: "Recruitment, attendance, leave, payroll and appraisals.",
    intro:
      "Frappe HR manages your people from hiring to payroll. It began as modules inside ERPNext and became a separate app from version 14, and it installs alongside ERPNext.",
    who: ["Businesses that want leave, attendance and payroll in one place", "Teams that use ERPNext and want HR joined to accounts", "Owners who are tired of tracking leave in a notebook"],
    features: [
      { title: "Recruitment", text: "Plan openings, publish them, and follow applicants through interviews to an offer." },
      { title: "Employee lifecycle", text: "Onboarding, transfers, promotions and exits, handled as clear steps." },
      { title: "Shifts and attendance", text: "Mobile check-ins, rosters and automatic attendance." },
      { title: "Leave management", text: "Holidays, leave policies and encashments, with manager approval." },
      { title: "Expense management", text: "Advances, travel and expense claims, with the accounting handled." },
      { title: "Performance management", text: "Goals, appraisals and continuous feedback." },
      { title: "Payroll", text: "Different pay structures, employee loans, and payroll linked to accounts." },
      { title: "Payroll tax and reports", text: "Regional tax rules, tax computation and projection reports." },
      { title: "Mobile app", text: "Employees use it from a smartphone." },
    ],
    useCases: [
      { title: "Monthly salary without spreadsheets", text: "Attendance and leave flow into salary slips, so payroll stops being a manual calculation." },
      { title: "Leave that nobody argues about", text: "Policies and balances are in the system, and approvals leave a record." },
    ],
    implement: ["Set up leave types, shifts and salary structures", "Load employee records and check them with you", "Configure India payroll rules where they apply", "Train HR and managers on approvals"],
    faqs: [
      { q: "Is Frappe HR part of ERPNext?", a: "It began as modules inside ERPNext. From version 14 it is a separate app that installs alongside ERPNext." },
      { q: "Does it support India payroll?", a: "Frappe lists support for India payroll and tax, including EPF, Professional Tax, ESI and tax regimes. We check your exact rules with you before set-up." },
      { q: "Can employees use it from a phone?", a: "Yes. There is a mobile app, and it also works in a phone browser." },
    ],
    official: "https://frappe.io/hr",
    trial: links.trialHr,
  },
  {
    slug: "frappe-crm",
    name: "Frappe CRM",
    short: "Leads, deals and conversations in one clean place.",
    intro:
      "Frappe CRM keeps leads, deals, contacts and organisations together, with emails, calls, notes and tasks saved on each record.",
    who: ["Sales teams that follow up by phone, email and WhatsApp", "Businesses whose leads are scattered across notes and spreadsheets", "Teams that want to hand sales over to ERPNext invoicing"],
    features: [
      { title: "Leads and deals", text: "Follow every enquiry until the deal is won or lost, on list or kanban views." },
      { title: "Contacts and organisations", text: "One page per company, listing its contacts and deals." },
      { title: "Tasks and notes", text: "Create tasks and add notes on any lead or deal." },
      { title: "Email and templates", text: "Send and receive email from the record, and reuse templates." },
      { title: "Calls and WhatsApp", text: "Call tracking with Twilio and Exotel, and a WhatsApp integration." },
      { title: "Assignment rules and SLAs", text: "Automatically assign leads and deals, and set response targets." },
      { title: "Custom views", text: "Filters, sorting and configurable columns." },
      { title: "ERPNext integration", text: "Hand over to ERPNext for invoicing and accounting." },
    ],
    useCases: [
      { title: "No lead forgotten", text: "Every enquiry has an owner, a next task and a history." },
      { title: "From enquiry to invoice", text: "A won deal carries its details into ERPNext, so nothing is retyped." },
    ],
    implement: ["Set up lead sources, deal stages and assignment rules", "Import your existing leads from a spreadsheet", "Connect email, and calls or WhatsApp where you use them", "Connect CRM to ERPNext"],
    faqs: [
      { q: "Does it work with ERPNext?", a: "Yes. Frappe lists an ERPNext integration for invoicing and accounting." },
      { q: "Can we import our leads?", a: "Yes. Leads, deals, contacts and organisations can be imported from a CSV or Excel file." },
      { q: "Is there a CRM inside ERPNext too?", a: "Yes. ERPNext has its own CRM module, and Frappe CRM is a separate, newer app. We help you choose." },
    ],
    official: "https://frappe.io/crm",
    trial: links.trialCrm,
  },
  {
    slug: "helpdesk",
    name: "Frappe Helpdesk",
    short: "Support tickets, response targets and a knowledge base.",
    intro:
      "Helpdesk gives every customer question a home, so each one has an owner and a deadline instead of living in a message thread.",
    who: ["Businesses that handle support over email and calls", "Teams that want customers to track their own requests", "Owners who want response times they can measure"],
    features: [
      { title: "Tickets", text: "One queue for all requests, with the option to split or merge tickets." },
      { title: "Agents and teams", text: "Assign tickets to people, or route them to a team." },
      { title: "Assignment rules", text: "Automatic assignment by priority, type or workload." },
      { title: "SLA policies", text: "Set response and resolution targets and track them." },
      { title: "Canned responses", text: "Save replies to common questions and reuse them." },
      { title: "Knowledge base", text: "Publish help articles so customers can solve things themselves." },
      { title: "Customer portal", text: "Customers raise tickets and follow updates." },
      { title: "Custom fields and forms", text: "Adapt the ticket form to your workflow." },
    ],
    useCases: [
      { title: "Nothing missed, nothing done twice", text: "Every request is in one queue with a clear owner." },
      { title: "Fewer repeat questions", text: "Common answers live in the knowledge base and in saved replies." },
    ],
    implement: ["Set up teams, ticket types and SLA policies", "Write assignment rules", "Create the first knowledge base articles with you", "Open the customer portal"],
    faqs: [
      { q: "Can customers raise tickets themselves?", a: "Yes. There is an agent portal for your team and a customer portal for customers." },
      { q: "Can tickets be assigned automatically?", a: "Yes, through assignment rules based on conditions you choose." },
      { q: "Does it work with ERPNext?", a: "Frappe describes it as integrated with ERPNext. ERPNext also has a simpler support module of its own." },
    ],
    official: "https://frappe.io/helpdesk",
  },
  {
    slug: "insights",
    name: "Frappe Insights",
    short: "Reports and dashboards without writing SQL.",
    intro:
      "Insights is an open-source business intelligence tool. You connect your data, ask questions with a visual builder, and put the answers on dashboards.",
    who: ["Owners who want one view across sales, stock and money", "Teams who wait for someone to build each report", "Businesses that outgrow standard reports"],
    features: [
      { title: "Data sources", text: "Connect databases, files and spreadsheets and analyse them together." },
      { title: "Queries", text: "Build queries visually, with tables, joins and filters, without SQL." },
      { title: "Charts", text: "Turn results into charts, with suggestions for a suitable chart type." },
      { title: "Dashboards", text: "Drag and drop charts onto dashboards, with filters that apply across them." },
    ],
    useCases: [
      { title: "One screen for the owner", text: "Sales, dues and stock levels together, instead of three reports." },
      { title: "Questions answered the same day", text: "Your team builds a report themselves, without a developer." },
    ],
    implement: ["Connect Insights to your ERPNext data", "Build the first dashboards with you", "Show your team how to ask their own questions"],
    faqs: [
      { q: "Do we need to know SQL?", a: "No. The query builder is visual." },
      { q: "Can it use ERPNext data?", a: "Yes. Frappe says Insights can combine data from ERPNext and other Frappe apps." },
    ],
    official: "https://frappe.io/insights",
  },
  {
    slug: "builder",
    name: "Frappe Builder",
    short: "A visual builder for your website.",
    intro:
      "Frappe Builder is a visual website builder from Frappe. It lets you design pages without writing code, and publish them from your Frappe site.",
    who: ["Businesses that want a simple website connected to their system", "Teams that want to change pages without a developer"],
    features: [
      { title: "Visual page editor", text: "Design pages by placing and styling blocks." },
      { title: "Reusable blocks", text: "Build a block once and reuse it across pages." },
      { title: "Publishing", text: "Publish pages from your Frappe site." },
    ],
    useCases: [{ title: "A simple site without a separate tool", text: "Pages, products and forms live next to the system that runs your business." }],
    implement: ["Plan the pages you need", "Build the first pages with you", "Show your team how to edit them"],
    faqs: [{ q: "Where can I read the full feature list?", a: "In the official documentation. Builder changes often, so that is always the most current source." }],
    official: links.docs,
  },
  {
    slug: "learning",
    name: "Frappe Learning",
    short: "Courses, quizzes and certificates.",
    intro:
      "Frappe Learning is an open-source learning management system for running courses online, from lessons to certificates.",
    who: ["Businesses that train their staff or customers", "Institutes that want to deliver courses online"],
    features: [
      { title: "Courses and lessons", text: "Organise learning into courses made of lessons." },
      { title: "Quizzes and assignments", text: "Check understanding as learners progress." },
      { title: "Certificates", text: "Recognise completion." },
    ],
    useCases: [{ title: "Training that scales", text: "Teach new staff the same way every time." }],
    implement: ["Plan your first course", "Set up the platform", "Train your trainers"],
    faqs: [{ q: "Where can I read the full feature list?", a: "In the official documentation. The list grows with each version." }],
    official: links.docs,
  },
  {
    slug: "framework",
    name: "Frappe Framework",
    short: "The platform for custom apps, forms and workflows.",
    intro:
      "Every Frappe app, including ERPNext, is built on the Frappe Framework. We use it when your business needs something that settings alone cannot give you.",
    who: ["Businesses with a process that no standard module fits", "Teams that need their own forms, approvals or reports"],
    features: [
      { title: "Custom forms and apps", text: "Build your own forms and small apps on the same platform." },
      { title: "Approval workflows", text: "Add multi-step approvals to any form." },
      { title: "Roles and permissions", text: "Decide who can see and change what." },
      { title: "Notifications and reminders", text: "Alerts for the people who need to act." },
      { title: "Reports and dashboards", text: "Build reports and dashboards for your own data." },
      { title: "APIs and integrations", text: "Connect to other software through REST APIs and webhooks." },
    ],
    useCases: [{ title: "Your process, not the software’s", text: "A custom approval or form that fits how you already work." }],
    implement: ["Start with a short review of the steps you repeat", "Use settings and simple automation first", "Build a small custom app only when it is truly needed"],
    faqs: [{ q: "Is a custom app always needed?", a: "No. We try settings and simple automation first, and build a custom app only when that is not enough." }],
    official: "https://frappe.io/framework",
  },
  {
    slug: "frappe-cloud",
    name: "Frappe Cloud",
    short: "Hosting for ERPNext and other Frappe apps.",
    intro:
      "Frappe Cloud is Frappe’s own managed hosting for its apps. ERPNext is free and open source, but it needs somewhere to run, and hosting is the first part of the cost.",
    who: ["Businesses without their own technical team", "Anyone who wants hosting, backups and upgrades handled for them"],
    features: [
      { title: "Sites and servers", text: "Start with a single site, or use a server for several sites." },
      { title: "Backups and upgrades", text: "Managed upgrades and backups." },
      { title: "Marketplace apps", text: "Install extra apps, such as India Compliance, on your site." },
      { title: "Self-hosting option", text: "You can instead run ERPNext on your own server." },
    ],
    useCases: [{ title: "Start with the free trial", text: "Try ERPNext for 14 days before choosing a plan." }],
    implement: ["Help you choose between Frappe Cloud and self-hosting", "Set up your site and apps", "Plan backups and updates with you"],
    faqs: [
      { q: "Do we pay Frappe or you?", a: "Hosting is paid to Frappe Cloud, or to your own hosting provider if you self-host. Our implementation work is paid to us. They are separate." },
      { q: "What happens after the trial?", a: "After 14 days you choose a Frappe Cloud plan to keep your site." },
    ],
    official: links.cloud,
    trial: links.trial,
  },
];

export const moreApps = [
  { name: "Frappe Books", text: "Accounting software for small businesses." },
  { name: "Frappe Wiki", text: "Documentation and knowledge pages." },
  { name: "Frappe Drive", text: "File storage and sharing." },
  { name: "Gameplan", text: "Team discussions and tasks." },
  { name: "Frappe Gantt", text: "Gantt charts for project timelines." },
  { name: "Print Designer", text: "Design print formats visually." },
  { name: "Frappe Lending", text: "Loan management." },
  { name: "Frappe Education", text: "Student and school management." },
];

export function getApp(slug: string) {
  return apps.find((a) => a.slug === slug);
}
