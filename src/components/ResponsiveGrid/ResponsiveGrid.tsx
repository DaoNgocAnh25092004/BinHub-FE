import React from "react";
import classNames from "classnames/bind";
import styles from "./ResponsiveGrid.module.scss";

const cx = classNames.bind(styles);

interface ResponsiveGridProps {
  children: React.ReactNode;
  columns?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  columns = { xs: 1, sm: 2, md: 2, lg: 3, xl: 4 },
  gap = "md",
  className,
}) => {
  const gridClass = cx(
    "responsive-grid",
    `gap-${gap}`,
    `cols-xs-${columns.xs || 1}`,
    `cols-sm-${columns.sm || 2}`,
    `cols-md-${columns.md || 2}`,
    `cols-lg-${columns.lg || 3}`,
    `cols-xl-${columns.xl || 4}`,
    className
  );

  return <div className={gridClass}>{children}</div>;
};

export default ResponsiveGrid;
