// =====================================================================
// Static content for Capital Assist
// Centralized so copy/branding edits live in one place.
// =====================================================================

// --- Associated Banks & NBFCs --------------------------------------
// `short` = marquee label; `tag` = category for the Partners grid.
export const BANKS = [
  { name: 'HDFC Bank',              short: 'HDFC',    tag: 'Bank' },
  { name: 'ICICI Bank',             short: 'ICICI',   tag: 'Bank' },
  { name: 'Kotak Mahindra Bank',    short: 'Kotak',   tag: 'Bank' },
  { name: 'Axis Bank',              short: 'Axis',    tag: 'Bank' },
  { name: 'Yes Bank',               short: 'YES',     tag: 'Bank' },
  { name: 'Federal Bank',           short: 'Federal', tag: 'Bank' },
  { name: 'IDFC First Bank',        short: 'IDFC',    tag: 'Bank' },
  { name: 'Bandhan Bank',           short: 'Bandhan', tag: 'Bank' },
  { name: 'AU Small Finance Bank',  short: 'AU',      tag: 'Bank' },
  { name: 'Sundaram Finance',       short: 'Sundaram',tag: 'NBFC' },
  { name: 'HDB Financial Services', short: 'HDB',     tag: 'NBFC' },
  { name: 'Bajaj Finance',          short: 'Bajaj',   tag: 'NBFC' },
  { name: 'Tata Capital',           short: 'Tata',    tag: 'NBFC' },
  { name: 'Cholamandalam Finance',  short: 'Chola',   tag: 'NBFC' },
]

// --- Company contact info ------------------------------------------
export const COMPANY = {
  name: 'Capital Assist',
  phone: '+91 9373502470',
  phoneHref: 'tel:+919373502470',
  whatsapp: '919373502470',
  email: 'info.capitalassist09@gmail.com',
  linkedin: 'https://www.linkedin.com',
  address: 'Office No 3, Third floor, Maher Building, opp. Modi Baug, Modibaug, Model Colony, Shivajinagar, Pune, Maharashtra 411005',
  shortBio:
    'We help Indian businesses get the right financing, faster. With 14+ partner banks and NBFCs, we specialise in construction equipment and commercial vehicle loans.',
}

// --- Core services (Services Hub) ----------------------------------
export const SERVICES = [
  {
    slug: 'construction-equipment',
    title: 'Construction Equipment Finance',
    icon: 'HardHat',
    blurb:
      'Need to finance excavators, loaders, cranes, or batching plants? We structure loans that match how heavy equipment actually earns.',
    points: ['Up to 90% funding', 'Tenure up to 7 years', 'Flexible EMIs'],
  },
  {
    slug: 'commercial-vehicle',
    title: 'Commercial Vehicle Finance',
    icon: 'Truck',
    blurb:
      'Whether it\'s a new truck, a tipper, or a used tractor-trailer, we connect you with lenders who get fleet economics.',
    points: ['Used vehicle refinance', 'Fast-track sanctions', 'Top-up facility'],
  },
  {
    slug: 'car-loans',
    title: 'Car Loans',
    icon: 'Car',
    blurb:
      'Looking for a car loan? We compare offers across 14+ lenders so you get the best deal on new or pre-owned vehicles.',
    points: ['Pre-approved offers', 'Minimal paperwork', 'Quick disbursal'],
  },
  {
    slug: 'home-loans',
    title: 'Home Loans',
    icon: 'Home',
    blurb:
      'Buying, building, or transferring a home loan? We get multiple banks competing for your file so you walk away with the best rate.',
    points: ['Balance transfer', 'Tax benefits', 'Long tenure'],
  },
  {
    slug: 'loan-against-property',
    title: 'Loan Against Property',
    icon: 'Building2',
    blurb:
      'Turn your property into working capital. We help you tap the value in your residential or commercial real estate at competitive rates.',
    points: ['High LTV up to 70%', 'Long tenure', 'Competitive rates'],
  },
  {
    slug: 'working-capital',
    title: 'Working Capital Finance',
    icon: 'Banknote',
    blurb:
      'CC, OD, BG, LC, and Term Loans, all structured around your business cycle. We find the right facility at the right limit.',
    points: ['CC / OD / BG / LC', 'Term Loans (TL)', 'Limit enhancements'],
  },
]

// --- Products (Protection & Wealth) --------------------------------
export const PRODUCTS = [
  {
    slug: 'general-insurance',
    title: 'General Insurance',
    icon: 'ShieldCheck',
    blurb:
      'Cover your vehicles, equipment, and property with policies from India\'s top insurers. We handle the comparison so you don\'t have to.',
    points: ['Motor & asset cover', 'Custom deductibles', 'Claim assistance'],
  },
  {
    slug: 'mediclaim',
    title: 'Mediclaim',
    icon: 'HeartPulse',
    blurb:
      'Cashless hospital cover for your family or your team, with access to a wide network of hospitals and hassle-free claims.',
    points: ['Family floater', 'Cashless network', 'Tax savings 80D'],
  },
  {
    slug: 'mutual-fund-sip',
    title: 'Mutual Fund SIP',
    icon: 'TrendingUp',
    blurb:
      'Start a disciplined SIP with funds we\'ve vetted for your goals. Whether it\'s retirement, education, or wealth building, we\'ll guide you.',
    points: ['Goal-based planning', 'Curated fund basket', 'Regular portfolio reviews'],
  },
]

// --- Document checklists (by loan type) ----------------------------
// Used by the dynamic DocumentChecklist component on Services page.
export const DOCUMENT_CHECKLISTS = {
  'construction-equipment': {
    label: 'Construction Equipment Finance',
    documents: [
      'PAN card of applicant & co-applicant',
      'Aadhaar card / Voter ID / Passport',
      'Latest passport-size photographs',
      'GST registration certificate & last 12 months returns',
      'Income Tax Returns (last 3 years) with computation',
      'Bank statements (last 12 months)',
      'Proforma invoice / quotation of equipment',
      'Proof of existing business premises (lease/registry)',
      'Audited finance with Computation of income with full audit report',
      'Existing asset/fleet list',
    ],
  },
  'commercial-vehicle': {
    label: 'Commercial Vehicle Finance',
    documents: [
      'PAN card of applicant',
      'Aadhaar / driving licence / Voter ID',
      'Passport-size photographs',
      'GST certificate (if applicable) & returns',
      'ITR (last 3 years)',
      'Bank statements (last 12 months)',
      'Quotation / RC book (for used vehicles)',
      'Existing loan closure statement (if refinance)',
    ],
  },
  'car-loans': {
    label: 'Car Loans',
    documents: [
      'PAN card',
      'Aadhaar / Passport / Voter ID',
      'Address proof',
      'Latest salary slips (3 months) or ITR (3 years)',
      'Bank statements (last 6 months)',
      'Proforma invoice from dealer',
    ],
  },
  'home-loans': {
    label: 'Home Loans',
    documents: [
      'PAN card of applicant & co-applicant',
      'Aadhaar / Passport / Voter ID',
      'Passport photographs',
      'Salary slips (last 3 months) / ITR (3 years)',
      'Bank statements (last 12 months)',
      'Property agreement / allotment letter',
      'Approved building plan',
      'NOC from society / builder',
    ],
  },
  'loan-against-property': {
    label: 'Loan Against Property',
    documents: [
      'PAN card of applicant(s)',
      'Aadhaar / Voter ID / Passport',
      'Photographs',
      'ITR (last 3 years) with computation',
      'Bank statements (last 12 months)',
      'Property title deed & latest tax receipts',
      'Approved building plan / occupation certificate',
    ],
  },
  'working-capital': {
    label: 'Working Capital (CC/OD/BG/LC – TL)',
    documents: [
      'PAN card of company / firm / directors',
      'GST certificate & last 12 months returns',
      'Certificate / Memorandum of Incorporation or Partnership deed',
      'ITR (last 3 years) with computation',
      'Audited financials (last 3 years) + provisional',
      'Bank statements (last 12 months) of all accounts',
      'Stock & debtors statement (latest) and CMA data',
      'Existing facilities’ sanction & outstanding statements',
    ],
  },
}

// --- How It Works pipeline -----------------------------------------
export const PIPELINE = [
  {
    step: 1,
    title: 'Tell Us What You Need',
    desc: 'Fill out a short form with your requirement and basic details. Takes about 2 minutes, no documents needed yet.',
    icon: 'FileText',
  },
  {
    step: 2,
    title: 'We Sort the Paperwork',
    desc: 'Our team collects, organises, and double-checks every document so your file is bank-ready from day one.',
    icon: 'ClipboardCheck',
  },
  {
    step: 3,
    title: 'Banks Compete for Your File',
    desc: 'We send your profile to the lenders most likely to approve it, so you get the best rate on the table.',
    icon: 'Handshake',
  },
  {
    step: 4,
    title: 'You Get Funded',
    desc: 'Sanction, documentation, and disbursal, all tracked start to finish. You just focus on your project.',
    icon: 'BadgeCheck',
  },
]

// --- Loan type options for dropdowns --------------------------------
export const LOAN_TYPES = [
  'Construction Equipment Finance',
  'Commercial Vehicle Finance',
  'Car Loan',
  'Home Loan',
  'Loan Against Property',
  'Working Capital',
  'General Insurance',
  'Mediclaim',
  'Mutual Fund SIP',
  'Other',
]
