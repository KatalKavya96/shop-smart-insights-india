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
            
            {/* QA Section moved to top */}
            <section id="qa" className="mb-12">
              <QASection />
            </section>
            
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse h-64 bg-muted rounded-xl"></div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <DataChart
                  title="Market Share Evolution"
                  description="Small shops vs large sellers on major platforms (2018-2024)"
                  data={marketShareData}
                  type="area"
                  isLive={true}
                  updateInterval={1000}
                  maxDataPoints={10}
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
                  isLive={true}
                  updateInterval={1500}
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <DataChart
                  title="Customer Acquisition Cost"
                  description="Cost to acquire new customers by platform type (₹)"
                  data={customerAcquisitionData}
                  type="bar"
                  isLive={true}
                  updateInterval={2000}
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
                  isLive={true}
                  updateInterval={1800}
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
          
          {/* Image placeholders moved to bottom */}
          <section id="diagrams" className="mb-12">
            <DashboardHeader 
              title="Diagram Uploads" 
              subtitle="Upload your business analysis diagrams here" 
            />
            
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse h-64 bg-muted rounded-xl"></div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <ImagePlaceholder 
                  title="BOT Diagram" 
                  description="Business Ownership Transfer loop dynamics affecting small sellers"
                  imageSrc="https://media-hosting.imagekit.io/905645c47c8b4995/BOT.png?Expires=1841245659&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=OK3pEkdaduIBUUmCrUxfS~ZHsRvNGiJk6NUJ1Ltl0RH1xsfPKBrmqdMG4nYYK6G6T1Y4WvNnta6snGTGZnwXPinOACjTZNcqSbQj7~zfv0GY-jwBR4ZPb-kDsFOzDaXTJX9RulsQyTnOqCWYWkr5daB2Tm18c3uyvLiCLyK1u-myZmLnmyHoYIu9y8w8N5CGlHg2BZ-YKyOW2rxJFLnQ70g4f5uVgOPUbnfm2G-WkbqJ1UahYMWcJvqghKDx8kakqQSn~UTK7UmnlYnT9PXSmIchQFiuH-V3D-d2iEZI6RIzk7ThvfSpk~pMJNSquzXEnBMy2JNCehBa6Rp7a1ohlA__"
                  downloadable={true}
                  downloadExtension="jpeg"
                />
               <ImagePlaceholder 
                  title="CLD Diagram" 
                  description="Causal Loop Diagram showing the relationship between factors affecting small sellers"
                  imageSrc="/lovable-uploads/ceabfded-d283-48a8-93ba-8a257f7827c5.png"
                  downloadable={true}
                  downloadExtension="mdl"
                  downloadLink="https://drive.google.com/file/d/1dO4gc2G5ojC9m7QFPejIihKJ2kHwDVAl/view?usp=sharing"
                />
                <ImagePlaceholder 
                
                  title="Stock Flow Diagram" 
                  description="Stock and Flow representation of dynamics in small seller ecosystems"
                  imageSrc="https://media-hosting.imagekit.io/c0dfcb96870b43d0/WhatsApp%20Image%202025-05-07%20at%2010.37.57%20PM.jpeg?Expires=1841245691&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=G6O71JzpAj7Zltw1eF7TKpWz0QfB7mls3QPAUCWL6s249KLsvzDO48zvyKjNS1uXDEZQXHMynsNbudKmjlHc4ZkAovRxkA506i5IkkhQdgkbL9YAxPSMfq2lHjdBUVfItlsPcWK~JWZet-qrWaCCJgWcu5UUospSSl-W639lkhdjXEV8uPFEYLNKoflJmGGv4BaeCAu1Cr0t~eDioPCsJgAmDwD5wJXx5clepp43L8DVj7lqhSL1hZ8Ptm4EkdxIQM0dT3LdUlQSg2xmJbsMcz-ozCTrd8beS4~M1ggD6k76NKO2MhgONb9ACn6HHvLAkiHVkBuDCqY~YkW-p2q7wQ__"
                  downloadable={true}
                  downloadExtension="jpeg"
                />
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
