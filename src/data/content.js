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
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  whatsapp: '919876543210',
  email: 'hello@capitalassist.in',
  linkedin: 'https://www.linkedin.com',
  shortBio:
    'A specialist finance advisory bridging Indian businesses with over 14 top banks and NBFCs — engineered for construction equipment and commercial vehicle capital.',
}

// --- Core services (Services Hub) ----------------------------------
export const SERVICES = [
  {
    slug: 'construction-equipment',
    title: 'Construction Equipment Finance',
    icon: 'HardHat',
    blurb:
      'Excavators, loaders, cranes, and batching plants — fund your fleet with structured loans built for heavy-asset cashflow.',
    points: ['Up to 90% funding', 'Tenure up to 7 years', 'Flexible EMIs'],
  },
  {
    slug: 'commercial-vehicle',
    title: 'Commercial Vehicle Finance',
    icon: 'Truck',
    blurb:
      'New and used trucks, tippers, and tractor-trailers. We get you on the road faster with lenders that understand fleet economics.',
    points: ['Used vehicle refinance', 'Fast-track sanctions', 'Top-up facility'],
  },
  {
    slug: 'car-loans',
    title: 'Car Loans',
    icon: 'Car',
    blurb:
      'Competitive pricing across our lender network for new and pre-owned personal & commercial vehicles.',
    points: ['Pre-approved offers', 'Minimal paperwork', 'Quick disbursal'],
  },
  {
    slug: 'home-loans',
    title: 'Home Loans',
    icon: 'Home',
    blurb:
      'Purchase, construct, or transfer your home loan with the best rates our partner banks compete to offer.',
    points: ['Balance transfer', 'Tax benefits', 'Long tenure'],
  },
  {
    slug: 'loan-against-property',
    title: 'Loan Against Property',
    icon: 'Building2',
    blurb:
      'Unlock the locked-in value of your residential or commercial property for business or personal needs.',
    points: ['High LTV up to 70%', 'Long tenure', 'Competitive rates'],
  },
  {
    slug: 'working-capital',
    title: 'Working Capital Finance',
    icon: 'Banknote',
    blurb:
      'Cash Credit (CC), Overdraft (OD), Bank Guarantees (BG), Letter of Credit (LC), and Term Loans — structured for your operating cycle.',
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
      'Protect your assets — vehicles, equipment, property — with policies underwritten by India’s leading insurers.',
    points: ['Motor & asset cover', 'Custom deductibles', 'Claim assistance'],
  },
  {
    slug: 'mediclaim',
    title: 'Mediclaim',
    icon: 'HeartPulse',
    blurb:
      'Cashless hospitalisation cover for your family and workforce, with curated healthcare network access.',
    points: ['Family floater', 'Cashless network', 'Tax savings 80D'],
  },
  {
    slug: 'mutual-fund-sip',
    title: 'Mutual Fund SIP',
    icon: 'TrendingUp',
    blurb:
      'Systematic, goal-based investing across vetted mutual funds — disciplined wealth building for individuals & HUFs.',
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
      'Latest salary slips (3 months) or ITR (2 years)',
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
    title: 'You Apply',
    desc: 'Share your requirement and basic details through our 2-minute intake — no paperwork yet.',
    icon: 'FileText',
  },
  {
    step: 2,
    title: 'We Handle the Paperwork',
    desc: 'Our advisors collect, organise, and pre-check every document so the banks see a complete file.',
    icon: 'ClipboardCheck',
  },
  {
    step: 3,
    title: 'We Match You with 14+ Top Banks',
    desc: 'Your profile is routed to the lenders most likely to sanction — at the best available rate.',
    icon: 'Handshake',
  },
  {
    step: 4,
    title: 'You Get Funded',
    desc: 'Sanction, documentation, and disbursal tracked end-to-end. You focus on the project.',
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
