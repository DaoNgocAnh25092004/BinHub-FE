import Image from "next/image";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Search from "./Search";
import DarkModeToggle from "./DarkModeToggle";
import { FaBell, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { useState } from "react";

const cx = classNames.bind(styles);

interface HeaderProps {
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
}

function Header({ onToggleSidebar, isSidebarOpen = false }: HeaderProps = {}) {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
  };
  return (
    <>
      <header className={cx("header")}>
        {/* Left Section - Mobile Menu + Logo */}
        <div className={cx("header-left")}>
          {/* Mobile Menu Toggle */}
          <button
            className={cx("mobile-menu-toggle")}
            onClick={onToggleSidebar}
            title={isSidebarOpen ? "Đóng menu" : "Mở menu"}
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Logo - Visible on mobile */}
          <Link href="/" className={cx("logo")}>
            <span className={cx("logo-text")}>Bin Hub</span>
          </Link>
        </div>

        {/* Center Section - Search */}
        <div className={cx("search-wrapper")}>
          <Search />
        </div>

        {/* Right Section - User Actions */}
        <div className={cx("user-section")}>
          {/* Mobile Search Button - Show only on very small screens */}
          <button
            className={cx("mobile-search-toggle")}
            onClick={toggleMobileSearch}
            title="Tìm kiếm"
          >
            <FaSearch />
          </button>

          <button className={cx("notify")} title="Thông báo">
            <FaBell />
          </button>
          <DarkModeToggle />
          <div className={cx("avatar")}>
            <Image
              src="/images/no-user.png"
              alt="User Avatar"
              width={40}
              height={40}
              className={cx("avatar-img")}
            />
          </div>
        </div>
      </header>

      {/* Mobile Search Overlay */}
      {showMobileSearch && (
        <div className={cx("mobile-search-overlay")}>
          <div className={cx("mobile-search-header")}>
            <h3>Tìm kiếm</h3>
            <button
              className={cx("mobile-search-close")}
              onClick={toggleMobileSearch}
            >
              <FaTimes />
            </button>
          </div>
          <div className={cx("mobile-search-content")}>
            <Search />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
