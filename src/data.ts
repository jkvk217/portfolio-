// Every string and figure for this portfolio lives here.
// Start editing from the top: SITE, then the page sections below it.

export const SITE = {
  name: 'Jack Vink',
  tagline: 'Technical support and customer service',
  email: 'jackhvink@gmail.com',
  phone: '+1 (217) 953-4486',
  address: ['Springfield, IL 62702'],
  hours: 'Open to full-time and contract roles',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Email', href: 'mailto:jackhvink@gmail.com' },
  ],
}

/** Main navigation. The first four sit in the header; the menu shows all of them. */
export const NAV = [
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
]
export const MENU = [
  { label: 'Home', to: '/' },
  { label: 'Experience', to: '/experience' },
  { label: 'Skills', to: '/skills' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

/** A public asset URL that follows the deployed base path (GitHub Pages serves from /<repo>/). */
const asset = (src: string) => `${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`

/*
  Photography and renders. Every image on the site goes through this one
  constant: swap `src` for your own file in public/images/ (or any URL) and
  update `alt`. The `holo*` entries are the iridescent chrome objects
  (transparent webp); set one's `src` to '' to fall back to its SVG drawing
  in components/Holo.tsx.
*/
export const IMAGES = {
  aurora: { src: asset('/images/aurora.webp'), alt: 'Soft translucent 3D forms in mint, peach and lilac on a pale background' },
  fold: { src: asset('/images/fold.webp'), alt: 'Geometric shapes pressed into cream cotton paper beside a stack of colour-blocked book covers' },
  halcyon: { src: asset('/images/halcyon.webp'), alt: 'Calm hotel lobby with a curved travertine reception desk and warm indirect light' },
  kite: { src: asset('/images/kite.webp'), alt: 'Orange technical jacket hung against a green wall in hard sunlight' },
  meridian: { src: asset('/images/meridian.webp'), alt: 'Two phones showing a banking app on a cobalt blue background' },
  nocturne: { src: asset('/images/nocturne.webp'), alt: 'Swirling violet, magenta and teal liquid on black' },
  portrait: { src: asset('/images/portrait.webp'), alt: 'A worktable with printed layouts, swatches and notes in morning light' },
  ostra: { src: asset('/images/ostra.webp'), alt: 'Ceramic jug and cups on linen in warm morning light' },
  glass: { src: asset('/images/glass.webp'), alt: 'Clear glass carafe and tumbler casting light on a pale grey surface' },
  lookbook: { src: asset('/images/lookbook.webp'), alt: 'Wooden bench with a folded throw beside a paper floor lamp in a bright room' },
  holoKnot: { src: asset('/images/holo/knot.webp'), alt: '' },
  holoSphere: { src: asset('/images/holo/sphere.webp'), alt: '' },
  holoCloud: { src: asset('/images/holo/cloud.webp'), alt: '' },
  holoScissors: { src: asset('/images/holo/scissors.webp'), alt: '' },
  holoStar: { src: asset('/images/holo/star.webp'), alt: '' },
  holoPrism: { src: asset('/images/holo/prism.webp'), alt: '' },
} as const satisfies Record<string, { src: string; alt: string }>
export type ImageKey = keyof typeof IMAGES

export type HoloKind = 'knot' | 'sphere' | 'cloud' | 'scissors' | 'star' | 'prism'

export const HOME = {
  stats: [
    { value: 15, label: ['Years in', 'service roles'] },
    { value: 8, label: ['Roles across', 'retail and tech'] },
    { value: 4, label: ['Platforms', 'supported'] },
  ],
  captionTop: 'Fifteen years of keeping systems, stock and customers moving.',
  captionBottom: 'Electrical troubleshooting, POS support and plain-language documentation.',
  headline: ['Technical', 'support', 'specialist'],
  reachOut: 'Get in touch',
  skillsTitle: ['What I', 'bring'],
  manifestoTitle: ['Calm when', 'it breaks'],
  manifesto:
    'Fifteen years on the front line of service: retail counters, repair benches, a virtual call centre and a technical help desk. I diagnose the actual fault, explain it in plain language and write down the fix so the next person does not start from scratch.',
  approachTitle: ['How I', 'work'],
  experienceTitle: ['Where I', 'have worked'],
  toolsLabel: 'Systems and tools I work with',
  cta: {
    title: ['Hiring, or', 'need cover?'],
    body: 'I am open to full-time and contract work in technical support, service advising and retail operations, in Springfield or remote.',
    action: 'Get in touch',
  },
}

export const APPROACH = [
  {
    title: 'Diagnose first',
    body: 'Reproduce the problem, read the schematic, then fix the cause rather than the symptom.',
    art: 'knot' as HoloKind,
    tone: 'violet' as const,
  },
  {
    title: 'Write it down',
    body: 'Every case gets a note: what failed, what fixed it, and what to check next time.',
    art: 'cloud' as HoloKind,
    tone: 'white' as const,
  },
  {
    title: 'Translate the technical',
    body: 'Plain language for customers, full detail for engineers. Both get the same care.',
    art: 'star' as HoloKind,
    tone: 'white' as const,
  },
  {
    title: 'Follow through',
    body: 'Approvals, payments and callbacks tracked until the job is closed, not just started.',
    art: 'sphere' as HoloKind,
    tone: 'night' as const,
  },
]

export type Capability = {
  slug: string
  title: string
  short: string
  art: HoloKind
  intro: string
  deliverables: string[]
}

export const CAPABILITIES: Capability[] = [
  {
    slug: 'technical-support',
    title: 'Technical support',
    short: 'Printers, POS systems and devices, diagnosed properly',
    art: 'prism',
    intro:
      'Multi-channel support for printers, point-of-sale systems and consumer hardware across Windows, macOS, iOS and Android, from the first ticket to a documented fix.',
    deliverables: [
      'Printer and POS troubleshooting',
      'Hardware and software diagnostics',
      'Wiring schematics and service manuals',
      'Salesforce case documentation',
      'Self-service guides and knowledge base',
    ],
  },
  {
    slug: 'customer-service',
    title: 'Customer service',
    short: 'Front-line help that keeps people informed',
    art: 'star',
    intro:
      'High-volume phone, chat and in-person support. I keep customers calm, explain what is happening and stay with the case until it is resolved.',
    deliverables: [
      'Multi-channel customer support',
      'Service estimates and approvals',
      'Cash and payment handling',
      'Complaint resolution and retention',
      'Follow-up after the fix',
    ],
  },
  {
    slug: 'operations',
    title: 'Operations & inventory',
    short: 'Stock, staging and scheduling that stay ready',
    art: 'sphere',
    intro:
      'Retail and warehouse work where the next shift depends on today: staging, bin preparation, merchandising and digital task records that prove the standard was met.',
    deliverables: [
      'Inventory and warehouse management',
      'Order fulfilment and routing',
      'Staging and bin preparation',
      'Scheduling and workflow coordination',
      'Quality assurance and brand compliance',
    ],
  },
  {
    slug: 'service-writing',
    title: 'Automotive service advising',
    short: 'Diagnostics, estimates and shop workflow',
    art: 'cloud',
    intro:
      'Six years running the front of a busy auto shop: booking work, coordinating technician diagnostics and keeping the customer part of every decision.',
    deliverables: [
      'Shop workflow and scheduling',
      'Technician diagnostics coordination',
      'Service estimates and parts',
      'Customer approvals and payments',
      'Post-service follow-up',
    ],
  },
  {
    slug: 'digital-media',
    title: 'Digital media',
    short: 'Websites, print and documents for small teams',
    art: 'knot',
    intro:
      'A volunteer website redesign and migration, Adobe Creative Suite content for web, social and print, and a back catalogue of forms turned into fillable PDFs.',
    deliverables: [
      'Website redesign and migration',
      'Adobe Creative Suite content',
      'Fillable PDF forms',
      'Document management',
      'Digital marketing assets',
    ],
  },
]

export type Role = {
  company: string
  title: string
  location: string
  dates: string
  summary: string
  highlights: string[]
  tags: string[]
  current?: boolean
}

export const EXPERIENCE: Role[] = [
  {
    company: 'Shiftsmart',
    title: 'Retail Support Specialist (Independent Contractor)',
    location: 'Springfield, IL',
    dates: 'September 2025 – Present',
    summary:
      'Staging, stock and merchandising work for a retail site, completed against mobile app instructions and documented digitally as it happens.',
    highlights: [
      'Perform staging, bin preparation and inventory management to ensure next-day operational readiness.',
      'Maintain beverage and cold food displays while completing sanitation, stocking and merchandising tasks in accordance with mobile app instructions.',
      'Digitally document task completion and quality standards to ensure brand compliance.',
    ],
    tags: ['Retail operations', 'Inventory', 'Merchandising'],
    current: true,
  },
  {
    company: 'Bunn-O-Matic Corporation',
    title: 'Technical Services Representative',
    location: 'Springfield, IL',
    dates: 'January 2025 – May 2025',
    summary:
      'Phone support for field technicians working on commercial beverage equipment, from electrical faults to the paperwork that followed.',
    highlights: [
      'Supported field technicians with electrical troubleshooting of commercial beverage equipment.',
      'Interpreted wiring schematics and technical manuals to identify solutions.',
      'Documented cases and resolutions in Salesforce CRM to reduce repeat inquiries and service delays.',
    ],
    tags: ['Electrical troubleshooting', 'Schematics', 'Salesforce'],
  },
  {
    company: '1 Stop Auto Shop, Inc',
    title: 'Automotive Service Advisor',
    location: 'Springfield, IL',
    dates: 'February 2024 – December 2024, and February 2011 – August 2017',
    summary:
      'The front desk of a busy shop: work booked, diagnostics coordinated, estimates approved and every customer called back.',
    highlights: [
      'Managed shop workflow, inventory and scheduling.',
      'Prepared service estimates and coordinated technician diagnostics.',
      'Handled customer communication, approvals, payments and follow-up.',
    ],
    tags: ['Service writing', 'Scheduling', 'Customer approvals'],
  },
  {
    company: 'Star Micronics America, Inc.',
    title: 'Remote Support Specialist',
    location: 'Remote',
    dates: 'February 2023 – December 2023',
    summary:
      'Multi-channel support for small businesses running Star Micronics printers, across four operating systems and the point-of-sale apps on top of them.',
    highlights: [
      'Provided multi-channel technical support to SMB customers using Star Micronics printers.',
      'Troubleshot printer, OS and POS application issues across Windows, macOS, iOS and Android.',
      'Created instructional guides to improve self-service and reduce repeat inquiries.',
    ],
    tags: ['POS systems', 'Printers', 'Windows · macOS · iOS · Android'],
  },
  {
    company: 'Elevate CCIC, Inc.',
    title: 'Multimedia Specialist (Volunteer)',
    location: 'Mattoon, IL',
    dates: 'March 2020 – June 2021',
    summary:
      'A volunteer rebuild of a community organisation’s website and document library, plus the print and social content around it.',
    highlights: [
      'Led a website redesign to improve navigation, consistency and user experience.',
      'Managed a site migration to improve performance, scalability and asset organisation.',
      'Created digital marketing content using Adobe Creative Suite for web, social and print.',
      'Streamlined document management processes by converting all forms to fillable PDFs.',
    ],
    tags: ['Web redesign', 'Adobe Creative Suite', 'Documentation'],
  },
  {
    company: 'Conduent Incorporated & Kelly Services',
    title: 'Technical Support Representative',
    location: 'Remote',
    dates: 'December 2017 – December 2019',
    summary:
      'Phone support in a high-volume virtual call centre, resolving hardware, software and account problems with detailed case notes.',
    highlights: [
      'Provided phone-based technical support in a high-volume virtual call centre.',
      'Troubleshot hardware, software and Apple ID issues.',
      'Guided customers through solutions and maintained detailed case documentation.',
    ],
    tags: ['Help desk', 'Case documentation', 'Customer support'],
  },
  {
    company: 'Rapid Repair',
    title: 'Electronics Repair Technician',
    location: 'Springfield, IL',
    dates: 'June 2015 – December 2017',
    summary:
      'Daily operations of a repair bench: diagnostics, repairs, device testing and training the staff who took over when I was not there.',
    highlights: [
      'Oversaw daily operations, diagnostics, repairs and device testing.',
      'Trained staff on repair procedures, service standards and emerging technologies.',
      'Managed inventory and scheduling to maintain operational efficiency.',
    ],
    tags: ['Device repair', 'Staff training', 'Inventory'],
  },
  {
    company: 'AutoZone, Inc.',
    title: 'Automotive Retail Specialist',
    location: 'Springfield, IL',
    dates: 'October 2007 – March 2008',
    summary:
      'Warehouse and retail operations for a high-volume store, from fulfilment and routing to staffing the counter.',
    highlights: [
      'Supervised warehouse and retail operations, staffing and scheduling.',
      'Managed order fulfilment, inventory, routing and fleet maintenance.',
      'Supported customer service and sales while maintaining high performance and reliability.',
    ],
    tags: ['Warehouse', 'Order fulfilment', 'Staff supervision'],
  },
]

export const TOOLS = [
  'Salesforce CRM',
  'Microsoft 365',
  'Windows',
  'macOS',
  'iOS',
  'Android',
  'Adobe Creative Suite',
  'Point-of-sale systems',
  'Wiring schematics',
  'Fillable PDF forms',
]

export const ABOUT = {
  title: ['Hands-on', 'problem solver'],
  eyebrow: 'About Jack',
  intro:
    'Fifteen years in retail and technical customer service, mostly in Springfield, Illinois. I am the person who reads the manual, works out what actually failed and explains it to the person waiting on the other side of the counter.',
  stats: [
    { value: 15, label: 'Years in service roles' },
    { value: 8, label: 'Roles across retail and tech' },
    { value: 4, label: 'Platforms supported' },
    { value: 2, label: 'Current accreditations' },
  ],
  values: [
    {
      title: 'Fix the cause',
      body: 'A reset that hides the fault just delays the next ticket. I would rather find the loose connection or the driver that broke.',
    },
    {
      title: 'Write it down',
      body: 'Clear case notes and short how-to guides. Repeat enquiries drop when the answer is already written.',
    },
    {
      title: 'Stay with it',
      body: 'Estimates, approvals, payments and callbacks are part of the job, not an afterthought once the repair is done.',
    },
  ],
  education: [
    {
      school: 'Lawrence Education Center',
      programme: 'General Studies (High School)',
      location: 'Springfield, IL',
      dates: 'January 2004 – December 2006',
    },
    {
      school: 'Capital Area Career Center',
      programme: 'Communication & Media (Trade School)',
      location: 'Springfield, IL',
      dates: 'June 2005 – June 2006',
    },
  ],
  certifications: [
    { name: 'Windows Accreditation', dates: '2022 to present' },
    { name: 'Microsoft 365 Accreditation', dates: '2022 to present' },
  ],
}

export const CONTACT = {
  title: ['Get in', 'touch'],
  eyebrow: 'Contact',
  intro:
    'Looking for someone who can take the ticket, calm the customer and document the fix? Email or call, and I will reply the same day.',
  openTo: [
    'Technical support and help desk roles',
    'Retail and service operations',
    'Automotive service advising',
    'Contract and seasonal cover',
  ],
}

export const FOOTER = {
  note: 'Technical support, retail operations and customer service in Springfield, Illinois. Open to full-time and contract work, on site or remote.',
  legal: `© ${new Date().getFullYear()} Jack Vink`,
}
