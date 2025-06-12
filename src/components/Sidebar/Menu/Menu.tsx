import React, { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

interface MenuProps {
  children: ReactNode;
}

function Menu({ children }: MenuProps) {
  return <nav className={cx("menu")}>{children}</nav>;
}

export default Menu;
