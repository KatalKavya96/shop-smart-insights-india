
import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import InfoCard from "@/components/InfoCard";
import DataChart from "@/components/DataChart";
import QASection from "@/components/QASection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { 
  ChartBarIcon as ChartBar,
  Layout,
  LayoutDashboard, 
  ArrowRight, 
} from "lucide-react";

import {
  getMarketShareData,
  getRevenueComparisonData,
  getCustomerAcquisitionCostData,
  getPlatformFeeData,
  getChallengesData,
  getOpportunitiesData,
} from "@/lib/data-provider";

const Index = () => {
  const [marketShareData, setMarketShareData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);
  const [customerAcquisitionData, setCustomerAcquisitionData] = useState([]);
  const [platformFeeData, setPlatformFeeData] = useState([]);
  const [challenges, setChallenges] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API data loading
    setTimeout(() => {
      setMarketShareData(getMarketShareData());
      setRevenueData(getRevenueComparisonData());
      setCustomerAcquisitionData(getCustomerAcquisitionCostData());
      setPlatformFeeData(getPlatformFeeData());
      setChallenges(getChallengesData());
      setOpportunities(getOpportunitiesData());
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-6">
        <div className="container mx-auto">
          <section id="dashboard" className="mb-12">
            <DashboardHeader 
              title="Small Shop Insights Dashboard" 
              subtitle="Analyzing why small shops struggle on major e-commerce platforms in India's digital market" 
            />
            
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse h-64 bg-muted rounded-xl"></div>
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <ImagePlaceholder 
                    title="BOT Diagram" 
                    description="Upload your Business Ownership Transfer diagram here" 
                  />
                  <ImagePlaceholder 
                    title="CLD Diagram" 
                    description="Upload your Causal Loop Diagram here" 
                  />
                  <ImagePlaceholder 
                    title="Stock Flow Diagram" 
                    description="Upload your Stock and Flow diagram here" 
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  <DataChart
                    title="Market Share Evolution"
                    description="Small shops vs large sellers on major platforms (2018-2024)"
                    data={marketShareData}
                    type="area"
                    dataKeys={{
                      xAxis: "year",
                      bars: [
                        { key: "smallShops", color: "#0ea5e9" },
                        { key: "largeSellers", color: "#f59e0b" },
                      ],
                      areas: [
                        { key: "smallShops", color: "#0ea5e9" },
                        { key: "largeSellers", color: "#f59e0b" },
                      ],
                      lines: [
                        { key: "smallShops", color: "#0ea5e9" },
                        { key: "largeSellers", color: "#f59e0b" },
                      ],
                    }}
                  />
                  <DataChart
                    title="Monthly Revenue Comparison"
                    description="Average revenue by seller size (Last 6 months)"
                    data={revenueData}
                    type="bar"
                    dataKeys={{
                      xAxis: "month",
                      bars: [
                        { key: "smallShop", color: "#0ea5e9" },
                        { key: "mediumSeller", color: "#14b8a6" },
                        { key: "largeSeller", color: "#f59e0b" },
                      ],
                      lines: [
                        { key: "smallShop", color: "#0ea5e9" },
                        { key: "mediumSeller", color: "#14b8a6" },
                        { key: "largeSeller", color: "#f59e0b" },
                      ],
                      areas: [
                        { key: "smallShop", color: "#0ea5e9" },
                        { key: "mediumSeller", color: "#14b8a6" },
                        { key: "largeSeller", color: "#f59e0b" },
                      ],
                    }}
                  />
                </div>
              </>
            )}
          </section>

          <section id="market-analysis" className="mb-12">
            <DashboardHeader 
              title="Market Analysis" 
              subtitle="Key metrics and insights about small shops in e-commerce" 
            />
            
            {loading ? (
              <div className="animate-pulse h-64 bg-muted rounded-xl mb-6"></div>
            ) : (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  <DataChart
                    title="Customer Acquisition Cost"
                    description="Cost to acquire new customers by platform type (₹)"
                    data={customerAcquisitionData}
                    type="bar"
                    dataKeys={{
                      xAxis: "platform",
                      bars: [
                        { key: "smallShop", color: "#0ea5e9" },
                        { key: "largeSeller", color: "#f59e0b" },
                      ],
                      lines: [
                        { key: "smallShop", color: "#0ea5e9" },
                        { key: "largeSeller", color: "#f59e0b" },
                      ],
                      areas: [
                        { key: "smallShop", color: "#0ea5e9" },
                        { key: "largeSeller", color: "#f59e0b" },
                      ],
                    }}
                  />
                  <DataChart
                    title="Platform Fee Comparison"
                    description="Average fees as percentage of revenue"
                    data={platformFeeData}
                    type="bar"
                    dataKeys={{
                      xAxis: "platform",
                      bars: [
                        { key: "percentageOfRevenue", color: "#f59e0b" },
                      ],
                      lines: [
                        { key: "percentageOfRevenue", color: "#f59e0b" },
                      ],
                      areas: [
                        { key: "percentageOfRevenue", color: "#f59e0b" },
                      ],
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <InfoCard 
                    title="Key Challenges" 
                    icon={<LayoutDashboard className="h-5 w-5" />}
                    gradient="insight"
                  >
                    <ul className="space-y-3">
                      {challenges.map((challenge: any) => (
                        <li key={challenge.id} className="flex gap-2">
                          <div>
                            <span className={`inline-block w-2 h-2 rounded-full mt-2 ${
                              challenge.impact === "High" 
                                ? "bg-red-500" 
                                : challenge.impact === "Medium" 
                                ? "bg-yellow-500" 
                                : "bg-green-500"
                            }`}></span>
                          </div>
                          <div>
                            <h4 className="font-medium">{challenge.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {challenge.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </InfoCard>
                  
                  <InfoCard 
                    title="Opportunities" 
                    icon={<Layout className="h-5 w-5" />}
                    gradient="visual"
                  >
                    <ul className="space-y-3">
                      {opportunities.map((opportunity: any) => (
                        <li key={opportunity.id} className="flex gap-2 items-start">
                          <ArrowRight className="h-4 w-4 mt-1 text-visual-600" />
                          <div>
                            <h4 className="font-medium">{opportunity.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {opportunity.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </InfoCard>
                </div>
              </>
            )}
          </section>

          <section id="comparisons" className="mb-12">
            <DashboardHeader 
              title="Market Comparisons" 
              subtitle="Direct comparisons between small shops and large sellers" 
            />
            
            {loading ? (
              <div className="animate-pulse h-64 bg-muted rounded-xl mb-6"></div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <InfoCard 
                  title="Small Shop Experience" 
                  icon={<ChartBar className="h-5 w-5" />}
                  gradient="compare"
                >
                  <div className="space-y-3">
                    <div className="border-b pb-2">
                      <span className="text-sm font-medium">Visibility on Platform</span>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div className="bg-compare-600 h-2.5 rounded-full w-[25%]"></div>
                      </div>
                    </div>
                    <div className="border-b pb-2">
                      <span className="text-sm font-medium">Profit Margin</span>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div className="bg-compare-600 h-2.5 rounded-full w-[20%]"></div>
                      </div>
                    </div>
                    <div className="border-b pb-2">
                      <span className="text-sm font-medium">Platform Negotiation Power</span>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div className="bg-compare-600 h-2.5 rounded-full w-[15%]"></div>
                      </div>
                    </div>
                    <div className="border-b pb-2">
                      <span className="text-sm font-medium">Logistics Support</span>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div className="bg-compare-600 h-2.5 rounded-full w-[30%]"></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Customer Trust</span>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div className="bg-compare-600 h-2.5 rounded-full w-[35%]"></div>
                      </div>
                    </div>
                  </div>
                </InfoCard>

                <InfoCard 
                  title="Large Seller Experience" 
                  icon={<ChartBar className="h-5 w-5" />}
                  gradient="insight"
                >
                  <div className="space-y-3">
                    <div className="border-b pb-2">
                      <span className="text-sm font-medium">Visibility on Platform</span>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div className="bg-insight-600 h-2.5 rounded-full w-[85%]"></div>
                      </div>
                    </div>
                    <div className="border-b pb-2">
                      <span className="text-sm font-medium">Profit Margin</span>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div className="bg-insight-600 h-2.5 rounded-full w-[65%]"></div>
                      </div>
                    </div>
                    <div className="border-b pb-2">
                      <span className="text-sm font-medium">Platform Negotiation Power</span>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div className="bg-insight-600 h-2.5 rounded-full w-[80%]"></div>
                      </div>
                    </div>
                    <div className="border-b pb-2">
                      <span className="text-sm font-medium">Logistics Support</span>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div className="bg-insight-600 h-2.5 rounded-full w-[90%]"></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Customer Trust</span>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div className="bg-insight-600 h-2.5 rounded-full w-[75%]"></div>
                      </div>
                    </div>
                  </div>
                </InfoCard>
              </div>
            )}
          </section>

          <section id="qa" className="mb-12">
            <DashboardHeader 
              title="Ask a Question" 
              subtitle="Get insights about small shops and e-commerce challenges in India" 
            />
            <QASection />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
