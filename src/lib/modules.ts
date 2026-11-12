/**
 * The ERPNext areas we can set up. Descriptions are written in our own words.
 * Edit freely. Keep it honest: only describe what ERPNext does, and what we would do to help.
 */

export type Flow = { status: string; step: string; note: string };

export type Module = {
  slug: string;
  name: string;
  icon: string;
  group: "Money and trade" | "Operations" | "People and customers" | "Online";
  short: string;
  intro: string;
  covers: { title: string; text: string }[];
  doc: { title: string; rows: [string, string][] };
  flow: Flow[];
  helps: string[];
  related: string[];
  note?: string;
};

export const groups: Module["group"][] = ["Money and trade", "Operations", "People and customers", "Online"];

const allModules: Module[] = [
  {
    slug: "accounting",
    name: "Accounting",
    icon: "accounting",
    group: "Money and trade",
    short: "Books, invoices, payments and tax in one place.",
    intro:
      "Accounting is the backbone of ERPNext. Sales, purchases and stock movements can post to the books as they happen, so your numbers stay in step with the real work.",
    covers: [
      { title: "Chart of accounts and ledger", text: "A structure that matches how you report, with every entry traceable back to its source." },
      { title: "Sales and purchase invoices", text: "Raise invoices, record payments, and see what is due from customers and to suppliers." },
      { title: "Bank reconciliation", text: "Match your bank statement lines against the entries in your books." },
      { title: "Taxes", text: "Tax templates for your business, including GST for Indian businesses through community compliance tools." },
      { title: "Cost centres and budgets", text: "Follow spending by department or project and compare it with a budget." },
      { title: "Financial statements", text: "Profit and loss, balance sheet and cash flow reports from the same data." },
    ],
    doc: { title: "Sales Invoice SINV-0031", rows: [["Customer", "Sample customer"], ["Amount", "₹86,500"], ["Payment terms", "15 days"]] },
    flow: [
      { status: "Draft", step: "Invoice prepared", note: "Created from a delivery, with items, prices and tax filled in." },
      { status: "Submitted", step: "Invoice issued", note: "The sale and the amount due are recorded in the books." },
      { status: "Paid", step: "Payment recorded", note: "The payment is linked to the invoice and the due amount drops to zero." },
      { status: "Reconciled", step: "Matched with the bank", note: "The bank statement line is matched, so the books agree with the bank." },
    ],
    helps: ["Set up your chart of accounts and tax templates", "Bring in opening balances and check them with you", "Train your team on daily entries and reports"],
    related: ["selling", "buying"],
  },
  {
    slug: "selling",
    name: "Selling",
    icon: "selling",
    group: "Money and trade",
    short: "From quotation to invoice, without retyping.",
    intro:
      "Selling follows an order from the first quotation to the final invoice. Each step picks up the details from the one before, so nobody types the same thing twice.",
    covers: [
      { title: "Quotations", text: "Send a priced offer and turn it into an order when the customer agrees." },
      { title: "Sales orders", text: "One record of what was promised, to whom, and by when." },
      { title: "Delivery notes", text: "Record what was sent, and reduce stock at the same moment." },
      { title: "Sales invoices", text: "Bill from the order or delivery, with taxes and payment terms." },
      { title: "Pricing rules and price lists", text: "Different prices for different customers, quantities or periods." },
      { title: "Customers and territories", text: "Keep customer details and group them by region or type." },
    ],
    doc: { title: "Sales Order SO-0042", rows: [["Customer", "Sample customer A"], ["Items", "Style A-101, 1,200 pcs"], ["Delivery date", "In 3 weeks"]] },
    flow: [
      { status: "Quotation sent", step: "Offer shared", note: "The customer receives a priced quotation." },
      { status: "Order confirmed", step: "Sales order created", note: "The quotation becomes an order. Nothing is retyped." },
      { status: "Delivered", step: "Goods dispatched", note: "A delivery note records what left, and stock reduces." },
      { status: "Invoiced", step: "Invoice raised", note: "The invoice is created from the order, ready for payment." },
    ],
    helps: ["Set up your price lists, taxes and print formats", "Shape the quotation and order forms around how you sell", "Connect selling to stock and accounts so it flows through"],
    related: ["stock", "accounting", "crm"],
  },
  {
    slug: "buying",
    name: "Buying",
    icon: "buying",
    group: "Money and trade",
    short: "Request, order and receive what you need.",
    intro:
      "Buying keeps purchases organised, from the moment someone needs something to the day the supplier’s invoice is paid.",
    covers: [
      { title: "Suppliers", text: "Supplier details, terms and history in one place." },
      { title: "Material requests", text: "Anyone can ask for materials, and the request can be approved before buying." },
      { title: "Requests for quotation", text: "Ask several suppliers for prices and compare their answers." },
      { title: "Purchase orders", text: "A clear order to the supplier, with quantities, prices and dates." },
      { title: "Purchase receipts", text: "Record what arrived, and add it to stock." },
      { title: "Purchase invoices and scorecards", text: "Book supplier bills, and follow how reliable each supplier is." },
    ],
    doc: { title: "Purchase Order PO-0017", rows: [["Supplier", "Sample supplier"], ["Items", "Cotton fabric, 600 m"], ["Needed by", "In 10 days"]] },
    flow: [
      { status: "Requested", step: "Material request raised", note: "A shortage is noticed and a request is created." },
      { status: "Quotes compared", step: "Suppliers asked for prices", note: "Prices from several suppliers sit side by side." },
      { status: "Ordered", step: "Purchase order sent", note: "The order goes to the chosen supplier." },
      { status: "Received", step: "Goods received", note: "The receipt adds the materials to stock." },
      { status: "Billed", step: "Supplier bill booked", note: "The bill is matched with the order and receipt." },
    ],
    helps: ["Set up suppliers, items and approval steps", "Connect low stock to material requests", "Train the people who raise and approve requests"],
    related: ["stock", "accounting"],
  },
  {
    slug: "stock",
    name: "Stock",
    icon: "stock",
    group: "Operations",
    short: "Know what you have, where it is, and what to reorder.",
    intro:
      "Stock tracks every item in every location. Each purchase, sale and production job updates it, so the count in the system can match the shelf.",
    covers: [
      { title: "Item master with variants", text: "One item with many sizes or colours, instead of a long list of near-duplicates." },
      { title: "Warehouses and locations", text: "Several stores, rooms or racks, each with its own balance." },
      { title: "Stock ledger", text: "A full history of every movement, so you can see why a number changed." },
      { title: "Serial and batch tracking", text: "Follow individual units or batches from receipt to sale." },
      { title: "Reorder levels", text: "Set a minimum, and get a request raised before you run out." },
      { title: "Reconciliation and reports", text: "Correct the count after a physical check, and read clear inventory reports." },
    ],
    doc: { title: "Item: Cotton fabric, white", rows: [["In stock", "120 m"], ["Reorder level", "200 m"], ["Warehouse", "Fabric store"]] },
    flow: [
      { status: "Received", step: "Goods come in", note: "A purchase receipt adds the quantity to a warehouse." },
      { status: "In stock", step: "Stored and counted", note: "The balance is visible to everyone who needs it." },
      { status: "Issued", step: "Used or sold", note: "Delivery notes and production jobs reduce the balance." },
      { status: "Below reorder level", step: "Reorder triggered", note: "When the balance falls below the minimum, a material request can be raised." },
    ],
    helps: ["Set up your items, variants and warehouses", "Load your opening stock and check it with you", "Set reorder levels that suit how you buy"],
    related: ["buying", "manufacturing", "selling"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "manufacturing",
    group: "Operations",
    short: "Plan production and follow every job.",
    intro:
      "Manufacturing connects what you sell with what you must make. It works out materials, creates jobs, and shows where each job stands.",
    covers: [
      { title: "Multi-level bill of materials", text: "Describe a product as materials and sub-assemblies, down to the last component." },
      { title: "Production planning", text: "Turn sales orders into a plan of what to make and what to buy." },
      { title: "Work orders", text: "One job for each batch, with quantities, dates and materials." },
      { title: "Job cards", text: "Follow each operation on the shop floor, step by step." },
      { title: "Subcontracting", text: "Send materials to an outside party and receive finished work back." },
      { title: "Quality checks and reports", text: "Inspect during production, and read reports on output and delays." },
    ],
    doc: { title: "Work Order WO-031", rows: [["Item", "Style A-101"], ["Quantity", "1,200 pcs"], ["Due", "In 2 weeks"]] },
    flow: [
      { status: "Planned", step: "Work order created", note: "Made from a sales order or a production plan." },
      { status: "Materials issued", step: "Materials sent to the floor", note: "Stock reduces as materials are issued to the job." },
      { status: "In progress", step: "Operations running", note: "Job cards show each operation as it is done." },
      { status: "Completed", step: "Finished goods added", note: "Finished items are added to stock, ready to deliver." },
    ],
    helps: ["Map your products into bills of materials", "Set up work orders and operations to match your floor", "Connect production to stock and selling"],
    related: ["stock", "quality", "selling"],
  },
  {
    slug: "crm",
    name: "CRM",
    icon: "crm",
    group: "People and customers",
    short: "Keep every lead and conversation in one place.",
    intro:
      "CRM keeps track of people who might buy, and what was said to them, so follow-ups are not left to memory.",
    covers: [
      { title: "Leads", text: "Capture enquiries from any source and see who is following up." },
      { title: "Opportunities", text: "Follow a possible sale with its value, stage and expected date." },
      { title: "Quotations", text: "Send a quotation straight from the opportunity." },
      { title: "Territories", text: "Group customers and leads by region and share the work." },
      { title: "Service level agreements", text: "Agree and track how quickly you respond." },
      { title: "Campaigns and newsletters", text: "Send updates to the people who want them." },
    ],
    doc: { title: "Opportunity OPP-0009", rows: [["Lead", "Sample lead"], ["Value", "₹2,10,000"], ["Next step", "Send quotation"]] },
    flow: [
      { status: "New lead", step: "Enquiry captured", note: "Details are recorded the moment someone asks." },
      { status: "Contacted", step: "First conversation", note: "Notes and the next step are saved with the lead." },
      { status: "Quotation sent", step: "Offer shared", note: "A quotation goes out from the opportunity." },
      { status: "Won", step: "Customer confirmed", note: "The opportunity becomes a customer and a sales order." },
    ],
    helps: ["Set up your lead sources and sales stages", "Move your existing contact list in", "Connect CRM to quotations and selling"],
    related: ["selling", "support"],
    note: "CRM is available inside ERPNext, and as a separate app called Frappe CRM.",
  },
  {
    slug: "hr",
    name: "HR and Payroll",
    icon: "hr",
    group: "People and customers",
    short: "Employees, attendance, leave and payroll.",
    intro:
      "HR keeps the records of your people and the rules around them, from joining to monthly salary.",
    covers: [
      { title: "Employee records", text: "Details, documents and history for each person." },
      { title: "Attendance and shifts", text: "Record who worked when, with shift rules." },
      { title: "Leave management", text: "Leave types, balances and approvals." },
      { title: "Expense claims", text: "Claims with approval, paid along with salary or separately." },
      { title: "Payroll", text: "Salary structures and monthly salary slips." },
      { title: "Recruitment and appraisals", text: "Track openings and applicants, and run performance reviews." },
      { title: "Mobile access", text: "Employees can apply for leave and check details from a phone." },
    ],
    doc: { title: "Leave Application LV-014", rows: [["Employee", "Sample employee"], ["Type", "Casual leave"], ["Days", "2"]] },
    flow: [
      { status: "Applied", step: "Leave requested", note: "The employee applies, and the manager is notified." },
      { status: "Approved", step: "Manager decides", note: "The balance is checked and the request is approved or rejected." },
      { status: "In attendance", step: "Attendance updated", note: "The leave shows in attendance records." },
      { status: "In payroll", step: "Salary calculated", note: "Payroll uses attendance and leave for the month." },
    ],
    helps: ["Set up leave types, shifts and salary structures", "Load employee records and check them with you", "Train HR and managers on approvals"],
    related: ["projects", "accounting"],
    note: "HR and payroll come from the Frappe HR app, installed next to ERPNext.",
  },
  {
    slug: "projects",
    name: "Projects",
    icon: "projects",
    group: "People and customers",
    short: "Tasks, timesheets and billing for project work.",
    intro:
      "Projects helps when your work is organised as jobs for customers, with tasks, time and costs to follow.",
    covers: [
      { title: "Projects and tasks", text: "Break work into tasks, give each an owner and a date." },
      { title: "Timesheets", text: "Record the time spent, by person and task." },
      { title: "Expenses", text: "Keep costs against the project they belong to." },
      { title: "Billing", text: "Invoice from timesheets or milestones." },
      { title: "Costing", text: "Compare what a project earned with what it cost." },
    ],
    doc: { title: "Project PRJ-0004", rows: [["Customer", "Sample customer"], ["Tasks", "12, of which 7 done"], ["Due", "In 5 weeks"]] },
    flow: [
      { status: "Planned", step: "Project set up", note: "Tasks, owners and dates are created." },
      { status: "In progress", step: "Work under way", note: "Team members update tasks and log time." },
      { status: "In review", step: "Customer review", note: "Completed work is checked before billing." },
      { status: "Billed", step: "Invoice raised", note: "The invoice is created from the recorded time or milestones." },
    ],
    helps: ["Set up project types and task templates", "Connect time and expenses to invoices", "Train your team on timesheets"],
    related: ["accounting", "hr"],
  },
  {
    slug: "support",
    name: "Support",
    icon: "support",
    group: "People and customers",
    short: "Tickets, response times and a customer portal.",
    intro:
      "Support gives customer questions a home, so each one has an owner and a deadline, and nothing is lost in a message thread.",
    covers: [
      { title: "Tickets", text: "Every request recorded, with its history." },
      { title: "Auto-assignment", text: "Rules that send each ticket to the right person." },
      { title: "Response targets", text: "Set how fast you reply, and see what is late." },
      { title: "Customer portal", text: "Customers can raise and follow their own requests." },
      { title: "Knowledge base", text: "Answers to common questions, written once." },
      { title: "Maintenance visits", text: "Plan and record visits to customers." },
    ],
    doc: { title: "Ticket TKT-0021", rows: [["Customer", "Sample customer"], ["Issue", "Delivery question"], ["Reply due", "Today"]] },
    flow: [
      { status: "Open", step: "Ticket raised", note: "The customer writes in, or the team logs a call." },
      { status: "Assigned", step: "Owner chosen", note: "A rule or a person assigns the ticket." },
      { status: "Replied", step: "Answer sent", note: "The response time is recorded against the target." },
      { status: "Resolved", step: "Ticket closed", note: "The customer confirms, and the history stays on file." },
    ],
    helps: ["Set up ticket types, rules and response targets", "Add a portal for your customers", "Write the first knowledge base articles with you"],
    related: ["crm", "selling"],
    note: "Helpdesk is also available as a separate app called Frappe Helpdesk.",
  },
  {
    slug: "assets",
    name: "Assets",
    icon: "assets",
    group: "Operations",
    short: "Machines and equipment, from purchase to disposal.",
    intro:
      "Assets keeps a register of what the business owns, how it loses value, and when it needs attention.",
    covers: [
      { title: "Asset register", text: "Each machine, vehicle or tool, with its cost, location and owner." },
      { title: "Depreciation", text: "Schedules that reduce the value over time and post to the books." },
      { title: "Maintenance", text: "Plan servicing and keep a log of what was done." },
      { title: "Movements", text: "Record when an asset moves between locations or people." },
      { title: "Disposal", text: "Record sale or scrapping, with the effect on the books." },
    ],
    doc: { title: "Asset AST-0006", rows: [["Asset", "Stitching machine"], ["Location", "Main floor"], ["Next service", "In 3 weeks"]] },
    flow: [
      { status: "Purchased", step: "Asset recorded", note: "Created from the purchase, with its cost and date." },
      { status: "In use", step: "Placed at a location", note: "The register shows where it is and who looks after it." },
      { status: "Serviced", step: "Maintenance done", note: "The service is logged, and the next date is set." },
      { status: "Disposed", step: "Sold or scrapped", note: "The disposal is recorded and the books are updated." },
    ],
    helps: ["Build your asset register", "Set depreciation rules with your accountant", "Plan maintenance schedules"],
    related: ["accounting", "manufacturing"],
  },
  {
    slug: "quality",
    name: "Quality",
    icon: "quality",
    group: "Operations",
    short: "Inspections and a record of what went wrong.",
    intro:
      "Quality helps you check work against a standard, and learn from the times it falls short.",
    covers: [
      { title: "Quality inspections", text: "Check incoming goods, work in progress or finished items." },
      { title: "Inspection templates", text: "Reusable checklists, so every inspection asks the same questions." },
      { title: "Quality assurance plans", text: "Describe the checks a product must pass." },
      { title: "Non-conformance records", text: "Log a problem, find the cause, and record the fix." },
      { title: "Reports", text: "See where problems keep appearing." },
    ],
    doc: { title: "Inspection QI-0012", rows: [["Item", "Style A-101"], ["Check", "Stitching and size"], ["Sample", "20 pieces"]] },
    flow: [
      { status: "Planned", step: "Inspection set up", note: "A template decides what will be checked." },
      { status: "Checked", step: "Samples inspected", note: "Results are entered against each point." },
      { status: "Passed or failed", step: "Decision recorded", note: "A failed check can trigger a non-conformance record." },
      { status: "Closed", step: "Cause and fix recorded", note: "The lesson stays on file for next time." },
    ],
    helps: ["Turn your checklists into templates", "Connect inspections to receipts and work orders", "Set up simple quality reports"],
    related: ["manufacturing", "stock"],
  },
  {
    slug: "pos",
    name: "Point of Sale",
    icon: "pos",
    group: "Money and trade",
    short: "Counter sales for shops, connected to stock and books.",
    intro:
      "Point of Sale is for counters and shops. Each sale reduces stock and posts to the books, and the day’s takings are easy to close out.",
    covers: [
      { title: "Cloud-based counter", text: "Sell from any device with a browser." },
      { title: "Multiple stores", text: "Each store has its own stock and sales." },
      { title: "Shift management", text: "Open and close shifts, and reconcile the cash." },
      { title: "POS profiles", text: "Set prices, payment types and defaults per counter." },
      { title: "Collections and invoicing", text: "Take payment and give an invoice at the same time." },
      { title: "Print formats", text: "Receipts that look the way you want." },
    ],
    doc: { title: "POS Invoice POS-0120", rows: [["Counter", "Main shop"], ["Items", "3"], ["Paid by", "UPI"]] },
    flow: [
      { status: "Shift opened", step: "Counter ready", note: "The opening cash is recorded." },
      { status: "Sale made", step: "Items billed", note: "Stock reduces as each item is sold." },
      { status: "Paid", step: "Payment taken", note: "The payment type is recorded with the sale." },
      { status: "Shift closed", step: "Day closed", note: "Cash is counted and checked against the sales." },
    ],
    helps: ["Set up counters, profiles and payment types", "Design a receipt format", "Train counter staff"],
    related: ["stock", "accounting"],
  },
  {
    slug: "website",
    name: "Website and E-commerce",
    icon: "website",
    group: "Online",
    short: "A website and online orders, connected to your stock.",
    intro:
      "Website and e-commerce put your products online, and bring online orders into the same system as the rest of your sales.",
    covers: [
      { title: "No-code website builder", text: "Build pages without writing code, with Frappe Builder." },
      { title: "Product catalogue and cart", text: "Show items from your stock, with prices and a shopping cart." },
      { title: "Customer portal", text: "Customers can view orders and invoices after signing in." },
      { title: "Marketplace and store connectors", text: "Add-on apps exist for popular platforms, so their orders can arrive in ERPNext." },
    ],
    doc: { title: "Online Order WEB-0033", rows: [["Channel", "Sample online store"], ["Items", "2"], ["Status", "Paid"]] },
    flow: [
      { status: "Order placed", step: "Customer orders online", note: "The order arrives from the website or store." },
      { status: "Stock checked", step: "Availability confirmed", note: "Stock levels are shared with the online channel." },
      { status: "Dispatched", step: "Parcel sent", note: "A delivery note records the dispatch." },
      { status: "Invoiced", step: "Invoice raised", note: "The sale is invoiced and posted to the books." },
    ],
    helps: ["Check what your sales channel supports before we promise anything", "Connect online orders to stock and dispatch", "Set up a simple website with your catalogue"],
    related: ["selling", "stock"],
  },
];

const order = ["selling", "buying", "stock", "manufacturing", "accounting", "crm", "hr", "projects", "support", "assets", "quality", "pos", "website"];

export const modules: Module[] = [...allModules].sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));

export const otherApps = [
  { name: "Insights", text: "Analytics and dashboards across your data." },
  { name: "Raven", text: "Messaging for your team, inside the same system." },
  { name: "Shipping", text: "Connect with shipping providers." },
  { name: "Lending", text: "For businesses that lend money." },
  { name: "Learning", text: "Courses and training content." },
];

export function getModule(slug: string) {
  return modules.find((m) => m.slug === slug);
}
