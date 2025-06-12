"use client";

import classNames from "classnames/bind";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../../../hooks/useTheme";
import styles from "./DarkModeToggle.module.scss";

const cx = classNames.bind(styles);

function DarkModeToggle() {
  const { isDarkMode, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button className={cx("dark-mode-toggle")} disabled>
        <span style={{ width: "24px", height: "24px", display: "block" }} />
      </button>
    );
  }

  return (
    <button
      className={cx("dark-mode-toggle", { active: !isDarkMode })}
      onClick={toggleTheme}
    >
      {isDarkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
    </button>
  );
}

export default DarkModeToggle;
