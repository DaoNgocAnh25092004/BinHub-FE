"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { ReactNode } from "react";

const cx = classNames.bind(styles);

interface MenuItemProps {
  title: string;
  to: string;
  icon?: ReactNode;
  iconActive?: ReactNode;
  iconImg?: string;
  iconImgActive?: string;
}

function MenuItem({
  title,
  to,
  icon,
  iconActive,
  iconImg,
  iconImgActive,
}: MenuItemProps) {
  const pathname = usePathname();
  const isActive = pathname === to;

  const renderIcon = () => {
    if (iconImg) {
      const imgToRender = isActive && iconImgActive ? iconImgActive : iconImg;
      return (
        <div className={cx("icon-img")}>
          <Image src={imgToRender} alt={title} width={24} height={24} />
        </div>
      );
    } else {
      const iconToRender = isActive && iconActive ? iconActive : icon;
      return <div className={cx("icon")}>{iconToRender}</div>;
    }
  };

  return (
    <Link href={to} className={cx("menu-item", { active: isActive })}>
      {renderIcon()}
      <span className={cx("title")}>{title}</span>
    </Link>
  );
}

export default MenuItem;
