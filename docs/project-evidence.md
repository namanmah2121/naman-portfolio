# Portfolio Project Evidence

## Evidence rule

Portfolio claims are derived from the local React Native project source, supplied resume and supplied screens. Package availability alone is not used as a feature claim; features below map to screens, service modules or documented flows.

## Moolyam

Business flow:

Investor
  -> Property detail / gallery
  -> Unit selection
  -> KYC document upload
  -> Checkout
  -> RTGS, IMPS, NEFT, cash or cheque details
  -> Booking confirmation and history

Relationship:

User 1---N Booking
Property 1---N Unit
Booking 1---1 Payment selection
User 1---N KYC document

Implementation evidence:

- PropertyDetailScreen, UnitsScreen, GalleryScreen, ScheduleVisitScreen
- UploadDocument, CheckoutScreen, RTGSDetailsScreen, ChequeDetailsScreen
- BookingConfirmedScreen, BookingScreen, service/rest/property.ts, service/rest/booking.ts

Technology shown in the case study: React Native, TypeScript, React Navigation, Redux Toolkit/Persist, Axios, Razorpay, React Native Maps, Firebase Messaging, Notifee, Socket.IO and i18next.

## G10 Digital Gold Saving

Business flow:

User
  -> Live gold dashboard
  -> Choose quantity
  -> Review cost
  -> Pay
  -> Wallet / transaction history
  -> Sell, withdraw or redeem physical gold

Relationship:

User 1---1 Wallet
Wallet 1---N Transaction
User 1---1 KYC submission
User 1---N Redemption request

Implementation evidence:

- HomeGoldCard, HomeGoldTrend, QuantitySelector, CostSummary
- PaymentMethodSheet, PaymentSuccess, TransactionHistory, Withdraw
- PhysicalGoldRedemption, KycDetails, AadhaarVerification, BankDetails

Technology shown in the case study: React Native, TypeScript, React Navigation, Redux Toolkit/Persist, Zustand, Razorpay, Firebase Messaging, Notifee, Axios and i18next.

## MyWhip

Business flow:

Customer
  -> Add vehicle
  -> Select service and mode
  -> Pick location and slot
  -> Review price
  -> Find vendor
  -> Live service tracking

Vendor
  -> Configure capacity and drivers
  -> Receive or assign job
  -> Confirm pickup/drop
  -> Manage payout

Relationship:

Customer 1---N Vehicle
Customer 1---N Booking
Booking N---1 Vendor
Vendor 1---N Driver
Booking 1---1 Payment

Implementation evidence:

- Customer: SelectVehicleScreen, SelectServiceScreen, ChooseServiceModeScreen, FindingVendorScreen, LiveTrackingScreen
- Vendor: ServicesCapacity, AssignmentApi, DriverPickupJobScreen, DriverInTransitScreen, PayoutMethodsScreen
- Real-time modules: trackingSocket.ts, useTrackingSocket.ts, driverLocation.ts

Technology shown in the case study: React Native, TypeScript, React Navigation, Redux Toolkit/Persist, Zustand, Stripe, Google Maps/Places, Geolocation, Socket.IO, Firebase Messaging, Notifee and i18next.

## Madawatsab

Business flow:

Member
  -> Complete profile and preferences
  -> Discover / filter profiles
  -> Send interest
  -> Match
  -> Chat or manage privacy/reporting

Relationship:

User 1---1 Profile
Profile 1---1 Partner preference
User N---N Match
Match 1---N Message
User 1---N Block/report action

Implementation evidence:

- OnBoardingScreen, profile information and gallery update screens
- DiscoverScreen, SearchScreen, DiscoverFiltersSheet, MatchesScreen
- ChatScreen, MessageScreen, ChatApi, ChatSlice
- BlockedUsersScreen, IdProofUploadScreen, PrivacyProfileScreen, SubscriptionScreen

Technology shown in the case study: React Native, TypeScript, React Navigation, Redux Toolkit/Persist, React Hook Form, Yup, Socket.IO, Razorpay, Firebase Messaging, Notifee, Axios and i18next.

## Mantae

Business flow:

Customer
  -> Choose location
  -> Browse restaurant, food or mart
  -> Add to cart
  -> Pay and confirm
  -> Track, cancel or review order

Partner
  -> Receive order state
  -> Fulfil order
  -> View earnings
  -> Withdraw funds

Relationship:

Customer 1---N Address
Customer 1---N Order
Order N---1 Restaurant / Partner
Order 1---N Order item
Partner 1---N Payout

Implementation evidence:

- Customer: RestaurantDetail, ProductDetailScreen, Cart, OrderSummery, TrackOrderScreen, CouponScreen
- Partner: OrderStatusScreen, OrderSummaryScreen, EarningTab, WithdrawalEarnings, PusherClient
- Maps and address: SelectLoactionScreen, MapComponent, react-native-maps-directions

Technology shown in the case study: React Native, TypeScript, React Navigation, Redux Toolkit/Persist, Razorpay, Google Maps/Directions, Google Places, Firebase Messaging, Notifee, Pusher, Laravel Echo, Axios and i18next.

## Logix

Business flow:

Driver
  -> Find available package
  -> Open pickup/drop route
  -> Start foreground location tracking
  -> Send socket location updates
  -> Complete, cancel or review trip

Relationship:

Driver 1---N Trip
Trip 1---N Pickup/drop stop
Trip 1---N Location update
Driver 1---1 Wallet / lead balance

Implementation evidence:

- HomeScreen, PackageDetailsScreen, RideDetailsScreen
- LocationTracking.ts emits the locationUpdate socket event with reconnect handling
- TripCompletedScreen, TripCanceledScreen, ChatScreen, LeadSubscriptionScreen

Technology shown in the case study: React Native, TypeScript, React Navigation, Redux Toolkit/Persist, Google Maps/Directions, Geolocation, Socket.IO, Razorpay, Firebase Messaging, Notifee, Axios and i18next.

## Panelist

Business flow:

Creator
  -> Top up wallet
  -> Configure response target, deadline and audience
  -> Receive server quote
  -> Reserve budget
  -> Publish only when ready

Respondent
  -> Discover eligible survey
  -> Start/resume session
  -> Save answers and event recovery data
  -> Submit with JWT
  -> Wait for server reward validation

Relationship:

User 1---1 Respondent profile
User 1---1 Respondent wallet
User 1---N KYC submission
Survey 1---N Response
Survey 1---N Reward attempt
Survey session 1---N Response event

Implementation evidence:

- CreatorRewardConfig, CreatorRewardsWallet, CreatorAttentionChecks
- EarnSurveys, RewardSurveyRunner, RewardAttempts, Earnings, Withdrawals, KycForm
- features/respondent/session.ts, features/respondent/telemetry.ts, features/respondent/storage.ts
- Existing application documentation: panelist-survey-react-native/docs/RESPONDENT_REWARDS.md

Technology shown in the case study: React Native, TypeScript, React Navigation, Redux Toolkit/Persist, Razorpay, React Native Keychain, Google Sign-In, Firebase Messaging, Notifee, Axios and i18next.

## Portfolio edge cases

- Case-study text is descriptive only; it exposes no API endpoints, keys, tokens, user data or operational data.
- Screenshots are static evidence, not a live product environment.
- If a project is renamed or a feature is removed, update src/data/projects.js and this document in the same change.
