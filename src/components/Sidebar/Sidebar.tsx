import Link from "next/link";
import classNames from "classnames/bind";
import { MdHome } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";

import styles from "./Sidebar.module.scss";
import Menu, { MenuItem } from "./Menu";

const cx = classNames.bind(styles);

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  return (
    <>
      <aside className={cx("sidebar", { open: isOpen })}>
        <Link href="/">
          <div className={cx("logo")}>Bin Hub</div>
        </Link>

        <Menu>
          <MenuItem title="Trang chủ" to="/" icon={<MdHome />} />

          <MenuItem
            title="Quản lý học tập"
            to="/study-management"
            icon={<IoLibrary />}
          />
        </Menu>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className={cx("sidebarOverlay", { open: isOpen })}
          onClick={onClose}
        />
      )}
    </>
  );
}

export default Sidebar;
