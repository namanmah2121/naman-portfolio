export const projects = [
  {
    id: 'moolyam',
    number: '01',
    name: 'Moolyam',
    category: 'Real estate booking platform',
    role: 'React Native Developer',
    description:
      'A property discovery and reservation experience for plots and real-estate investments, built around clear availability, booking and payment flows.',
    details:
      'Built property reservation, KYC verification and payment workflows for RTGS, IMPS, NEFT and cheque payments. The product also covers investor onboarding and booking history.',
    stack: ['React Native', 'KYC', 'Payments', 'Property booking', 'REST APIs'],
    images: ['/work/moolyam-home.png', '/work/moolyam-bookings.png'],
    accent: 'lime'
  },
  {
    id: 'gold-jar',
    number: '02',
    name: 'Gold Jar',
    category: 'Digital gold investment',
    role: 'React Native Developer',
    description:
      'A mobile product for buying, selling and tracking digital gold with a focused wallet and investment experience.',
    details:
      'Delivered wallet, payments, buy/sell, gold trends, transactions, withdrawals, bank details, mandates, physical-gold redemption, multilingual support and notifications.',
    stack: ['React Native', 'Wallet', 'Razorpay', 'Transactions', 'Notifications'],
    images: ['/work/gold-jar-home.png', '/work/gold-jar-buy.png'],
    accent: 'gold'
  },
  {
    id: 'mywhip',
    number: '03',
    name: 'MyWhip',
    category: 'Mobile car-wash platform',
    role: 'React Native Developer',
    description:
      'A customer and operator platform for booking, delivering and tracking car-wash services.',
    details:
      'Built customer and vendor flows for service booking, payments, nearby-centre discovery, booking status, driver tracking, job assignment, pickup/drop proof, payouts and activity.',
    stack: ['React Native', 'Bookings', 'Payments', 'Driver tracking', 'Vendor tools'],
    images: ['/work/mywhip-home.png', '/work/mywhip-partner.png'],
    accent: 'blue'
  },
  {
    id: 'madawatsab',
    number: '04',
    name: 'Madawatsab',
    category: 'Matchmaking and social discovery',
    role: 'React Native Developer',
    description:
      'A thoughtful matchmaking experience designed around discovery, profile confidence and safer connections.',
    details:
      'Created profile, preferences, discovery, chat, privacy, verification and ID-proof, block/report, account, language, support and payment-history flows.',
    stack: ['React Native', 'Discovery', 'Chat', 'Verification', 'Privacy'],
    images: ['/work/madawatsab-discover.png', '/work/madawatsab-onboarding.png'],
    accent: 'sand'
  },
  {
    id: 'mantae',
    number: '05',
    name: 'Mantae',
    category: 'Food ordering and vendor operations',
    role: 'React Native Developer',
    description:
      'A customer and vendor experience for browsing food, placing orders and managing fulfillment.',
    details:
      'Built responsive order, product catalogue and inventory workflows, plus vendor order management, invoice export, image uploads and REST API integration.',
    stack: ['React Native', 'Catalogues', 'Inventory', 'Order management', 'PDF export'],
    images: ['/work/mantae-customer.png', '/work/mantae-vendor.png'],
    accent: 'green'
  },
  {
    id: 'logix',
    number: '06',
    name: 'Logix',
    category: 'Goods and logistics delivery',
    role: 'React Native Developer',
    description:
      'A logistics delivery product that makes booking, live tracking and delivery status easy to understand.',
    details:
      'Developed shipment booking, live tracking, secure payments and real-time order management with Google Maps, WebSocket, Razorpay and REST APIs.',
    stack: ['React Native', 'Google Maps', 'WebSocket', 'Razorpay', 'Live tracking'],
    images: ['/work/logix-tracking.png', '/work/logix-orders.png'],
    accent: 'orange'
  },
  {
    id: 'panelist',
    number: '07',
    name: 'Panelist',
    category: 'Survey and rewards platform',
    role: 'React Native Developer',
    description:
      'A survey platform that supports both respondent discovery and creator-driven research workflows.',
    details:
      'Supported survey discovery, KYC, profiles and rewards. Enabled survey creators to use varied questions, logic, randomisation, waves, geo targeting, response review and AI insights.',
    stack: ['React Native', 'Surveys', 'KYC', 'Rewards', 'AI insights'],
    images: ['/work/panelist-surveys.png', '/work/panelist-management.png'],
    accent: 'sage'
  }
];

export const skillGroups = [
  {
    label: 'Languages',
    items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3']
  },
  {
    label: 'Frameworks',
    items: ['React Native', 'React.js', 'Redux', 'Zustand', 'Context API']
  },
  {
    label: 'Mobile systems',
    items: ['React Navigation', 'Formik', 'Yup', 'Push notifications', 'Deep linking']
  },
  {
    label: 'Product integrations',
    items: ['REST APIs', 'Google Maps', 'WebSocket', 'Razorpay', 'Stripe', 'Agora SDK']
  }
];

export const experience = [
  {
    period: 'May 2025 — Present',
    company: 'WebSenor Private Limited',
    title: 'React Native Developer',
    location: 'Udaipur, Rajasthan',
    bullets: [
      'Built Logix, a goods and logistics delivery application with live tracking, secure payments and real-time order management.',
      'Built Moolyam, a real-estate booking platform with reservation, KYC and multi-method payment workflows.',
      'Integrated REST APIs, authentication, role-based access and responsive mobile UI across Android and iOS.'
    ]
  },
  {
    period: 'Feb 2024 — May 2025',
    company: 'WebSenor Private Limited',
    title: 'React Native Intern',
    location: 'Udaipur, Rajasthan',
    bullets: [
      'Built vendor-side product catalogue, inventory and order-management flows for Mantae.',
      'Implemented product CRUD, PDF and Excel invoice generation, Blob file downloads, image uploads and REST APIs.',
      'Delivered responsive mobile interfaces for Android and iOS.'
    ]
  }
];
