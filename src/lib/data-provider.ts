
// This file simulates an API service for our dashboard data
// In a production app, these functions would make actual API calls

// Mock data for small shops vs. large sellers market share
export const getMarketShareData = () => {
  return [
    { year: "2018", smallShops: 32, largeSellers: 68 },
    { year: "2019", smallShops: 28, largeSellers: 72 },
    { year: "2020", smallShops: 22, largeSellers: 78 },
    { year: "2021", smallShops: 18, largeSellers: 82 },
    { year: "2022", smallShops: 15, largeSellers: 85 },
    { year: "2023", smallShops: 12, largeSellers: 88 },
    { year: "2024", smallShops: 10, largeSellers: 90 },
  ];
};

// Mock data for revenue comparison
export const getRevenueComparisonData = () => {
  return [
    {
      month: "Jan",
      smallShop: 15000,
      mediumSeller: 45000,
      largeSeller: 150000,
    },
    {
      month: "Feb",
      smallShop: 18000,
      mediumSeller: 48000,
      largeSeller: 165000,
    },
    {
      month: "Mar",
      smallShop: 16000,
      mediumSeller: 52000,
      largeSeller: 180000,
    },
    {
      month: "Apr",
      smallShop: 19000,
      mediumSeller: 55000,
      largeSeller: 195000,
    },
    {
      month: "May",
      smallShop: 21000,
      mediumSeller: 58000,
      largeSeller: 210000,
    },
    {
      month: "Jun",
      smallShop: 17000,
      mediumSeller: 54000,
      largeSeller: 205000,
    },
  ];
};

// Mock data for customer acquisition cost
export const getCustomerAcquisitionCostData = () => {
  return [
    { platform: "Amazon", smallShop: 1200, largeSeller: 320 },
    { platform: "Flipkart", smallShop: 950, largeSeller: 280 },
    { platform: "Meesho", smallShop: 480, largeSeller: 190 },
    { platform: "JioMart", smallShop: 680, largeSeller: 210 },
    { platform: "Own Website", smallShop: 320, largeSeller: 450 },
  ];
};

// Mock data for platform fee comparison
export const getPlatformFeeData = () => {
  return [
    { platform: "Amazon", percentageOfRevenue: 30 },
    { platform: "Flipkart", percentageOfRevenue: 25 },
    { platform: "Meesho", percentageOfRevenue: 18 },
    { platform: "JioMart", percentageOfRevenue: 12 },
    { platform: "ONDC Network", percentageOfRevenue: 8 },
  ];
};

// Key challenges for small shops
export const getChallengesData = () => {
  return [
    { 
      id: 1, 
      title: "High Platform Fees", 
      description: "Major e-commerce platforms charge between 15-30% commission on each sale, significantly reducing profit margins for small sellers.",
      impact: "High"
    },
    { 
      id: 2, 
      title: "Complex Fulfillment Requirements", 
      description: "Platforms have strict packaging, delivery time, and fulfillment standards that are difficult for small operations to consistently meet.",
      impact: "High"
    },
    { 
      id: 3, 
      title: "Algorithm Bias", 
      description: "Search algorithms tend to favor established sellers with large sales volumes and advertising budgets, making new or small sellers less visible.",
      impact: "Medium"
    },
    { 
      id: 4, 
      title: "Return Policy Burden", 
      description: "Liberal return policies on platforms disproportionately affect small sellers who must absorb the costs of returns, often without clear justification.",
      impact: "Medium"
    },
    { 
      id: 5, 
      title: "Payment Cycles", 
      description: "Many platforms have extended payment settlement periods (14-21 days), creating cash flow challenges for small businesses.",
      impact: "Medium"
    },
  ];
};

// Opportunity insights data
export const getOpportunitiesData = () => {
  return [
    { 
      id: 1, 
      title: "Niche Specialization", 
      description: "Small shops can compete by focusing on specialized product categories where large sellers have less presence.",
    },
    { 
      id: 2, 
      title: "ONDC Initiative", 
      description: "India's Open Network for Digital Commerce aims to democratize e-commerce and reduce dependency on large platforms.",
    },
    { 
      id: 3, 
      title: "Direct-to-Consumer Channels", 
      description: "Building brand presence through social media and direct selling can reduce platform dependence.",
    },
    { 
      id: 4, 
      title: "Local Commerce Apps", 
      description: "Apps focusing on hyperlocal delivery are creating opportunities for small shops to serve nearby customers efficiently.",
    },
  ];
};
