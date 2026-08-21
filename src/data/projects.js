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
    capabilities: [
      {
        title: 'Investor journey',
        items: ['Property discovery and detailed availability', 'Unit selection, gallery and scheduled site visits', 'Booking confirmation and booking-history views']
      },
      {
        title: 'Verification and payment',
        items: ['KYC document upload and bank details', 'Checkout flows for RTGS, IMPS, NEFT, cash and cheque', 'Notifications and real-time socket integration']
      }
    ],
    flow: ['Explore property', 'Select unit or plot', 'Verify KYC', 'Choose payment method', 'Confirm booking'],
    technologies: ['React Native', 'TypeScript', 'React Navigation', 'Redux Toolkit + Persist', 'Axios', 'Razorpay', 'React Native Maps', 'Firebase Messaging + Notifee', 'Socket.IO', 'i18next'],
    evidence: ['PropertyDetailScreen', 'UnitsScreen', 'CheckoutScreen', 'UploadDocument', 'BookingConfirmedScreen'],
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
    capabilities: [
      {
        title: 'Gold investment',
        items: ['Live gold-price dashboard and trend presentation', 'Buy quantity, cost summary and payment confirmation', 'Sell review and success flow']
      },
      {
        title: 'Wallet and compliance',
        items: ['Add money, transaction history, withdrawal and auto-mandate settings', 'Aadhaar, document and bank-detail KYC steps', 'Physical-gold redemption and profile controls']
      }
    ],
    flow: ['Check live gold price', 'Choose quantity', 'Review cost', 'Pay securely', 'Track wallet and holdings'],
    technologies: ['React Native', 'TypeScript', 'React Navigation', 'Redux Toolkit + Persist', 'Zustand', 'Razorpay', 'Firebase Messaging + Notifee', 'Axios', 'i18next'],
    evidence: ['InvestScreen', 'QuantitySelector', 'CostSummary', 'PaymentMethodSheet', 'PhysicalGoldRedemption', 'KycDetails'],
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
    capabilities: [
      {
        title: 'Customer booking',
        items: ['Vehicle and service selection', 'Pickup address, date/time and price breakdown', 'Vendor matching, booking confirmation and live tracking']
      },
      {
        title: 'Vendor and driver operations',
        items: ['Job assignment, service capacity and driver management', 'Pickup/drop confirmation and proof-aware job states', 'Payout methods, booking history and notifications']
      }
    ],
    flow: ['Add vehicle', 'Choose service', 'Set pickup and slot', 'Match vendor', 'Track service completion'],
    technologies: ['React Native', 'TypeScript', 'React Navigation', 'Redux Toolkit + Persist', 'Zustand', 'Stripe', 'Google Maps + Places', 'Geolocation', 'Socket.IO', 'Firebase Messaging + Notifee', 'i18next'],
    evidence: ['SelectVehicleScreen', 'ChooseServiceModeScreen', 'FindingVendorScreen', 'LiveTrackingScreen', 'DriverPickupJobScreen', 'AssignmentApi'],
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
    capabilities: [
      {
        title: 'Discovery and matching',
        items: ['Detailed multi-step profile and partner-preference onboarding', 'Discover feed, search, filters, interests and matches', 'Connection, recommendation, visit and shortlist activity']
      },
      {
        title: 'Safer communication',
        items: ['Chat rooms and message views', 'ID proof, privacy settings and contact preferences', 'Block/report controls, subscriptions and payment history']
      }
    ],
    flow: ['Complete profile', 'Set partner preferences', 'Discover and filter', 'Send interest', 'Match and chat safely'],
    technologies: ['React Native', 'TypeScript', 'React Navigation', 'Redux Toolkit + Persist', 'React Hook Form + Yup', 'Socket.IO', 'Razorpay', 'Firebase Messaging + Notifee', 'Axios', 'i18next'],
    evidence: ['OnBoardingScreen', 'DiscoverScreen', 'SearchScreen', 'ChatScreen', 'BlockedUsersScreen', 'IdProofUploadScreen'],
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
    capabilities: [
      {
        title: 'Customer ordering',
        items: ['Food, mart, restaurant and product discovery', 'Cart, address, coupons, payment and order confirmation', 'Order tracking, cancellation, reviews and wishlist']
      },
      {
        title: 'Partner operations',
        items: ['Order status, delivery and notification views', 'Earnings, transactions, withdrawals and reviews', 'Partner document, bank and profile-management flows']
      }
    ],
    flow: ['Choose location', 'Browse products', 'Add to cart', 'Pay and confirm', 'Track order and delivery'],
    technologies: ['React Native', 'TypeScript', 'React Navigation', 'Redux Toolkit + Persist', 'Razorpay', 'Google Maps + Directions', 'Google Places', 'Firebase Messaging + Notifee', 'Pusher + Laravel Echo', 'Axios', 'i18next'],
    evidence: ['RestaurantDetail', 'Cart', 'OrderSummery', 'TrackOrderScreen', 'OrderStatusScreen', 'WithdrawalEarnings', 'PusherClient'],
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
    capabilities: [
      {
        title: 'Driver workflow',
        items: ['Available package and task discovery', 'Pickup/drop package details and route context', 'Trip completion, cancellation, ratings and chat']
      },
      {
        title: 'Real-time operations',
        items: ['Foreground GPS tracking with location-update socket events', 'Reconnect handling and latest-location resend', 'Wallet, lead subscription and notification flows']
      }
    ],
    flow: ['Review available task', 'Open package route', 'Start pickup/drop trip', 'Share live location', 'Complete and review trip'],
    technologies: ['React Native', 'TypeScript', 'React Navigation', 'Redux Toolkit + Persist', 'Google Maps + Directions', 'Geolocation', 'Socket.IO', 'Razorpay', 'Firebase Messaging + Notifee', 'Axios', 'i18next'],
    evidence: ['HomeScreen', 'PackageDetailsScreen', 'LocationTracking', 'TripCompletedScreen', 'ChatScreen', 'LeadSubscriptionScreen'],
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
    capabilities: [
      {
        title: 'Creator research tools',
        items: ['Creator wallet top-up and server-verified Razorpay payment', 'Reward budget, response target, deadline and audience targeting', 'Survey readiness checks before publish']
      },
      {
        title: 'Respondent rewards',
        items: ['Matched survey discovery, native runner, answer drafts and event recovery', 'Profile, KYC, earnings, withdrawals and reward-attempt views', 'Server-owned reward validation and retry-safe submission']
      }
    ],
    flow: ['Discover matched survey', 'Start or resume session', 'Save answers and activity', 'Submit securely', 'Track pending reward validation'],
    technologies: ['React Native', 'TypeScript', 'React Navigation', 'Redux Toolkit + Persist', 'Razorpay', 'React Native Keychain', 'Google Sign-In', 'Firebase Messaging + Notifee', 'Axios', 'i18next'],
    evidence: ['CreatorRewardConfig', 'CreatorRewardsWallet', 'EarnSurveys', 'RewardSurveyRunner', 'KycForm', 'Withdrawals', 'features/respondent/session'],
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
