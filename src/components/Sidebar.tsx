
import { FC, useState } from "react";
import {
  LayoutDashboard,
  ChartBar,
  ArrowRight,
  ChartLineIcon as ChartLine,
} from "lucide-react";
import { cn } from "@/lib/utils";

type SidebarProps = {
  className?: string;
};

type NavItem = {
  name: string;
  icon: React.ElementType;
  href: string;
};

const navItems: NavItem[] = [
  { name: "Dashboard", icon: LayoutDashboard, href: "#dashboard" },
  { name: "Market Analysis", icon: ChartLine, href: "#market-analysis" },
  { name: "Comparisons", icon: ChartBar, href: "#comparisons" },
  { name: "Q&A Assistant", icon: ArrowRight, href: "#qa" },
];

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "sidebar bg-sidebar text-sidebar-foreground h-screen flex flex-col transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="p-4 flex items-center justify-between">
        {!collapsed && (
          <h1 className="text-xl font-bold text-sidebar-foreground">
            ShopInsights
          </h1>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg bg-sidebar-accent/30 text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
        >
          <ArrowRight
            className={cn(
              "h-4 w-4 transition-transform",
              collapsed ? "rotate-180" : ""
            )}
          />
        </button>
      </div>
      <nav className="flex-1 p-2">
        <ul className="space-y-1">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-sidebar-accent/20 transition-colors"
              >
                <item.icon className="h-5 w-5 text-sidebar-primary" />
                {!collapsed && <span>{item.name}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto p-4">
        {!collapsed && (
          <div className="text-xs text-sidebar-foreground/70">
            <p>ShopInsights Data Panel v1.0</p>
            <p className="mt-1">© 2025 Small Shop Research</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
