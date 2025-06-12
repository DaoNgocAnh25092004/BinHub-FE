import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Search from "./Search";
import DarkModeToggle from "./DarkModeToggle";
import { FaBell } from "react-icons/fa";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("header")}>
      <Search />{" "}
      <div className={cx("user-section")}>
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
  );
}

export default Header;
