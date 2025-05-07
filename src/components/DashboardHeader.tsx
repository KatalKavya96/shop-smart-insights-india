
import { FC } from "react";

type DashboardHeaderProps = {
  title: string;
  subtitle?: string;
};

const DashboardHeader: FC<DashboardHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && (
        <p className="text-muted-foreground mt-2">{subtitle}</p>
      )}
    </div>
  );
};

export default DashboardHeader;
