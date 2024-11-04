import { FaBalanceScale, FaExchangeAlt, FaFileContract, FaLock, FaShieldAlt, FaUserCheck } from "react-icons/fa";

export const AML_FEATURES = [
  "Advanced KYC/KYB procedures",
  "Real-time transaction monitoring",
  "Risk-based approach to customer due diligence",
  "Ongoing screening against global watchlists",
  "Suspicious activity reporting",
];


export const COMPLIANCE_FEATURES = [
  {
    icon: FaShieldAlt,
    title: "Advanced Security",
    description:
      "Multi-layer security system with advanced encryption protocols",
  },
  {
    icon: FaUserCheck,
    title: "KYC Verification",
    description: "Robust identity verification process for all users",
  },
  {
    icon: FaFileContract,
    title: "Regulatory Compliance",
    description:
      "Full compliance with international cryptocurrency regulations",
  },
  {
    icon: FaBalanceScale,
    title: "Risk Management",
    description: "Comprehensive risk assessment and monitoring systems",
  },
];

export const PROCESS_STEPS = [
  {
    icon: FaUserCheck,
    title: "Register",
    description: "Create an account and complete the KYC process.",
  },
  {
    icon: FaExchangeAlt,
    title: "Trade",
    description: "Start trading cryptocurrencies with ease and security.",
  },
  {
    icon: FaLock,
    title: "Secure",
    description: "Enjoy peace of mind with our top-notch security measures.",
  },
];

export const OTC_FEATURES = [
  {
    title: "Deep Liquidity",
    description: "Access to extensive liquidity pools for large-volume trades",
    icon: "💧",
  },
  {
    title: "Competitive Pricing",
    description:
      "Best-in-class pricing for bulk transactions with minimal slippage",
    icon: "💎",
  },
  {
    title: "Personal Service",
    description: "Dedicated account managers available 24/7",
    icon: "👤",
  },
  {
    title: "Secure Settlement",
    description: "Guaranteed settlement through escrow services",
    icon: "🔒",
  },
];

export const AD_FEATURES = [
  {
    title: "Active Users",
    value: 100,
    unit: "+",
    description: "Registered users worldwide",
    icon: "👥",
  },
  {
    title: "Liquidity",
    value: 5000000,
    unit: "Upto $",
    description: "Liquidity pool",
    icon: "💧",
  },
  {
    title: "Fast Settlement",
    value: 99,
    unit: "%",
    description: "Transaction success rate",
    icon: "💎",
  },
];
