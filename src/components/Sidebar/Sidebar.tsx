import Link from "next/link";
import classNames from "classnames/bind";
import { MdHome } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";

import styles from "./Sidebar.module.scss";
import Menu, { MenuItem } from "./Menu";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("sidebar")}>
      <Link href="/">
        <div className={cx("logo")}>Bin Hub</div>
      </Link>

      <Menu>
        <MenuItem title="Dashboard" to="/" icon={<MdHome />} />

        <MenuItem
          title="Study Management"
          to="/study-management"
          icon={<IoLibrary />}
        />
      </Menu>
    </aside>
  );
}

export default Sidebar;
