/**
 * Everything you may want to edit on the website lives here, in plain text.
 * Keep it honest: only list what you can really do today.
 */

export const trustPrimary = ["ERPNext", "Frappe"];

// Remove any area you cannot yet help with.
export const trustAreas = ["GST and e-invoicing", "E-commerce orders", "Barcode", "Tally data migration"];

export const services = [
  {
    title: "Garment & Apparel Manufacturing",
    text: "Track styles, sizes, fabrics and trims from order to finished garment.",
    module: "Manufacturing · Stock",
    gets: [
      "Items set up with size and colour variants",
      "A bill of materials for each style",
      "Work orders that follow your sales orders",
    ],
  },
  {
    title: "Warehouse & Inventory Management",
    text: "Know what you have, where it is, and what needs to be reordered.",
    module: "Stock · Buying",
    gets: [
      "Warehouses and stock locations set up",
      "Reorder levels, so shortages show early",
      "Stock reports your team can read",
    ],
  },
  {
    title: "E-commerce Integrations",
    text: "Connect online orders with your stock and dispatch so nothing is entered twice.",
    module: "Selling · Stock",
    gets: [
      "Online orders brought into one place",
      "Stock kept in step with sales",
      "We check what your sales channel supports before we promise anything",
    ],
  },
  {
    title: "Export Documentation & Compliance",
    text: "Prepare export papers from the same data you already have in the system.",
    module: "Selling · Accounts",
    gets: [
      "Invoices and packing lists from the same order data",
      "Customer, shipment and tax details kept in one place",
      "Print formats adjusted to the papers you need",
    ],
  },
  {
    title: "Production Planning & Tracking",
    text: "Plan work, follow progress, and spot delays before they become problems.",
    module: "Manufacturing",
    gets: [
      "Production plans with dates and owners",
      "Work orders that show their stage",
      "Materials matched to what each job needs",
    ],
  },
  {
    title: "Custom Process Automation",
    text: "Remove repeated manual steps in the way your business already works.",
    module: "Custom Frappe app",
    gets: [
      "A short review of the steps you repeat",
      "Simple automations inside ERPNext where possible",
      "A small custom app, only when settings are not enough",
    ],
  },
];

export const industries = [
  {
    title: "Garment & Apparel",
    pains: ["Many sizes and colours make orders hard to follow", "Fabric and trims run short without warning"],
    solves: ["Size and colour variants, with a bill of materials per style", "Stock levels and reorder points for materials"],
  },
  {
    title: "Trading & Distribution",
    pains: ["Stock and customer dues are kept in separate diaries or sheets", "Prices and stock differ from one person to the next"],
    solves: ["One system for stock, billing and what each customer owes", "One price list and one stock count for everyone"],
  },
  {
    title: "Export",
    pains: ["Export papers are prepared by hand from several files", "Shipment details are hard to follow"],
    solves: ["Invoices and packing lists drawn from the same order data", "Shipment and customer details kept together"],
  },
  {
    title: "General Manufacturing",
    pains: ["Jobs slip behind and nobody notices in time", "Materials are not matched to what production needs"],
    solves: ["Work orders with stages and dates", "Material requests that follow the production plan"],
  },
];

// Add a real "duration" (for example "1 to 2 weeks") only when you are sure of it.
export const phases: { title: string; text: string; gets: string; duration?: string }[] = [
  {
    title: "Discovery",
    text: "We sit with your team and map orders, stock, payments and who does what.",
    gets: "A written summary of how work flows today, and what we suggest changing.",
  },
  {
    title: "Configuration",
    text: "We set up ERPNext around your process, not the other way round.",
    gets: "Your company, items, customers and the parts you need, ready to try.",
  },
  {
    title: "Data migration",
    text: "We bring your existing records across and check them with you.",
    gets: "Items, customers, suppliers and opening balances loaded and checked.",
  },
  {
    title: "Training",
    text: "We train your team on their own data, in short hands-on sessions.",
    gets: "A team that can do its daily work in the system.",
  },
  {
    title: "Go-live",
    text: "We choose a start date together and stay close during the first days.",
    gets: "A planned start, with us beside you while things settle.",
  },
  {
    title: "Support",
    text: "After go-live we stay available for questions, fixes and small changes.",
    gets: "A way to reach us, agreed before you start.",
  },
];

export const engagements = [
  {
    title: "Starter setup",
    for: "Small businesses beginning with the basics.",
    includes: [
      "A short review of how you work today",
      "The core parts set up: items, customers, suppliers and stock",
      "A training session for your team",
      "Help during your first days",
    ],
  },
  {
    title: "Full implementation",
    for: "Businesses that want the whole flow set up.",
    includes: [
      "All six phases, from discovery to support",
      "Selling, buying, stock and manufacturing set up to fit you",
      "Your existing data moved across and checked",
      "Training and close support at go-live",
    ],
  },
  {
    title: "Ongoing support",
    for: "Businesses already running ERPNext.",
    includes: [
      "Answers to your team’s questions",
      "Fixes when something does not work",
      "Small improvements as your business changes",
      "Reports and print formats adjusted",
    ],
  },
];

export const faqs = [
  {
    q: "Why ERPNext?",
    a: "ERPNext is open-source software built on the Frappe framework. It covers selling, buying, stock, manufacturing and accounts in one system, and it can be adjusted to the way you work. We mostly work with it because it is flexible and suits growing businesses. If another system would suit you better, we will say so.",
  },
  {
    q: "How long does an implementation take?",
    a: "It depends on how many parts of the business are included and how ready your data is. After our first conversation we agree a plan with you, and we will not promise a date we cannot keep.",
  },
  {
    q: "Can you move our existing data?",
    a: "Usually, yes. Items, customers, suppliers and opening balances can be loaded from spreadsheets, and we check them with you. If your records are in diaries or on paper, we help you organise them first.",
  },
  {
    q: "What happens after go-live?",
    a: "We stay available for questions and fixes. How support works is agreed with you before you start.",
  },
  {
    q: "What does it cost?",
    a: "It depends on the size of the work, so we do not list fixed prices. After we talk, we give you a clear estimate before anything starts. We would rather you know the cost up front than be surprised.",
  },
  {
    q: "Are you an official Frappe partner?",
    a: "No. We are an independent ERP implementation service, mostly ERPNext, and we have just started our business. ERPNext and Frappe are the names of their respective owners.",
  },
];
