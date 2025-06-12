import styles from "../styles/HomePage.module.scss";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.pageTitle}>Chào mừng đến với Bin Hub</h1>

      <div className={styles.contentGrid}>
        <div className={styles.card}>
          <h3>Khám phá âm nhạc</h3>
          <p>Tìm hiểu những bài hát mới nhất và phổ biến nhất</p>
        </div>

        <div className={styles.card}>
          <h3>Playlist của bạn</h3>
          <p>Quản lý và tạo các playlist yêu thích của riêng bạn</p>
        </div>

        <div className={styles.card}>
          <h3>Gợi ý dành cho bạn</h3>
          <p>Những bài hát được đề xuất dựa trên sở thích của bạn</p>
        </div>

        <div className={styles.card}>
          <h3>Nghệ sĩ nổi bật</h3>
          <p>Khám phá các nghệ sĩ đang thịnh hành</p>
        </div>
      </div>
    </div>
  );
}
