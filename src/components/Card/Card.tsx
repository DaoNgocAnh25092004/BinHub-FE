import React from "react";
import classNames from "classnames/bind";
import styles from "./Card.module.scss";

const cx = classNames.bind(styles);

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "outlined" | "filled";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  size = "md",
  className,
  onClick,
  hover = false,
}) => {
  const cardClass = cx(
    "card",
    `card-${variant}`,
    `card-${size}`,
    {
      "card-hover": hover,
      "card-clickable": onClick,
    },
    className
  );

  return (
    <div className={cardClass} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
