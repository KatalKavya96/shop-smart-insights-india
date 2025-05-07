
import { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

type InfoCardProps = {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  gradient?: "insight" | "visual" | "compare" | "none";
};

const InfoCard: FC<InfoCardProps> = ({
  title,
  icon,
  children,
  className,
  gradient = "none",
}) => {
  const gradientClass = 
    gradient === "insight" 
    ? "insight-gradient" 
    : gradient === "visual" 
    ? "visual-gradient" 
    : gradient === "compare" 
    ? "compare-gradient" 
    : "bg-card";

  return (
    <div className={cn(
      "rounded-xl shadow-md overflow-hidden h-full", 
      gradientClass,
      className
    )}>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          {icon && <div className="text-primary">{icon}</div>}
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default InfoCard;
