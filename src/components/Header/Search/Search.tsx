import classNames from "classnames/bind";

import styles from "./Search.module.scss";
import { FaSearch } from "react-icons/fa";

const cx = classNames.bind(styles);

function Search() {
  return (
    <div className={cx("search")}>
      <input
        className={cx("input")}
        type="text"
        placeholder="Tìm kiếm bài hát..."
      />
      <FaSearch className={cx("icon-search")} />
    </div>
  );
}

export default Search;
