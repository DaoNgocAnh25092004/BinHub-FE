import classNames from "classnames/bind";

import styles from "./StudyManagement.module.scss";

const cx = classNames.bind(styles);

import { IoBookOutline } from "react-icons/io5";
import { FaPlus, FaRegFileAlt, FaRegLightbulb } from "react-icons/fa";
import { LuSquareCheckBig } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";
import Button from "@/components/Button";

function StudyManagement() {
  // const menuItems = [
  //   { id: "notes" as MenuTab, label: "Ghi chú & To-do", icon: FaStickyNote },
  //   { id: "ai-coach" as MenuTab, label: "AI Study Coach", icon: FaRobot },
  //   { id: "calculator" as MenuTab, label: "Tính điểm", icon: FaCalculator },
  //   { id: "syllabus" as MenuTab, label: "Syllabus", icon: FaBook },
  // ];
  return (
    <div className={cx("container")}>
      {/* Welcome Section */}
      <div className={cx("welcome-section")}>
        <div className={cx("welcome-icon")}>
          <IoBookOutline />
        </div>

        <div className={cx("welcome-content")}>
          <h1 className={cx("welcome-title")}>
            Chào mừng đến với <span className={cx("brand-name")}>Bin Hub!</span>
          </h1>
          <p className={cx("welcome-description")}>
            Để bắt đầu quản lý việc học hiệu quả, hãy thêm môn học đầu tiên của
            bạn. Chúng tôi sẽ giúp bạn tổ chức ghi chú, theo dõi nhiệm vụ và cải
            thiện kết quả học tập.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className={cx("features-section")}>
        <h2 className={cx("features-title")}>Tính năng nổi bật</h2>

        <div className={cx("features-grid")}>
          <div className={cx("feature-card")}>
            <div className={cx("feature-icon", "notes")}>
              <FaRegFileAlt />
            </div>
            <div className={cx("feature-content")}>
              <h3>Quản lý ghi chú</h3>
              <p>Tổ chức ghi chú theo từng môn học một cách khoa học</p>
            </div>
          </div>

          <div className={cx("feature-card")}>
            <div className={cx("feature-icon", "tasks")}>
              <LuSquareCheckBig />
            </div>
            <div className={cx("feature-content")}>
              <h3>Theo dõi nhiệm vụ</h3>
              <p>Không bỏ lỡ deadline và bài tập quan trọng</p>
            </div>
          </div>

          <div className={cx("feature-card")}>
            <div className={cx("feature-icon", "analytics")}>
              <RiGraduationCapLine />
            </div>
            <div className={cx("feature-content")}>
              <h3>Phân tích điểm số</h3>
              <p>Theo dõi tiến độ học tập và cải thiện kết quả</p>
            </div>
          </div>

          <div className={cx("feature-card")}>
            <div className={cx("feature-icon", "ai")}>
              <FaRegLightbulb />
            </div>
            <div className={cx("feature-content")}>
              <h3>AI Study Coach</h3>
              <p>Nhận gợi ý học tập cá nhân hóa từ AI</p>
            </div>
          </div>
        </div>
      </div>

      <Button animation large leftIcon={<FaPlus />} primary>
        Thêm môn học đầu tiên
      </Button>

      {/* Quick Guide Section */}
      <div className={cx("quick-guide")}>
        <div className={cx("guide-header")}>
          <h2>Hướng dẫn nhanh</h2>
          <p>4 bước đơn giản để bắt đầu hành trình học tập hiệu quả</p>
        </div>

        <div className={cx("guide-steps")}>
          <div className={cx("step")}>
            <div className={cx("step-number")}>1</div>
            <div className={cx("step-content")}>
              <h3>Thêm môn học</h3>
              <p>Nhập tên môn học, giảng viên và thông tin cơ bản</p>
              <div className={cx("step-icon")}>
                <FaPlus />
              </div>
            </div>
          </div>

          <div className={cx("step")}>
            <div className={cx("step-number")}>2</div>
            <div className={cx("step-content")}>
              <h3>Tạo ghi chú và nhiệm vụ</h3>
              <p>Ghi lại kiến thức quan trọng và theo dõi deadline</p>
              <div className={cx("step-icon")}>
                <FaRegFileAlt />
              </div>
            </div>
          </div>

          <div className={cx("step")}>
            <div className={cx("step-number")}>3</div>
            <div className={cx("step-content")}>
              <h3>Sử dụng AI Study Coach</h3>
              <p>Nhận lộ trình học tập và gợi ý cá nhân hóa</p>
              <div className={cx("step-icon")}>
                <FaRegLightbulb />
              </div>
            </div>
          </div>

          <div className={cx("step")}>
            <div className={cx("step-number")}>4</div>
            <div className={cx("step-content")}>
              <h3>Phân tích điểm số</h3>
              <p>Theo dõi tiến độ và cải thiện kết quả học tập</p>
              <div className={cx("step-icon")}>
                <RiGraduationCapLine />
              </div>
            </div>
          </div>
        </div>

        <div className={cx("guide-footer")}>
          <p>
            💡 <strong>Mẹo:</strong> Bắt đầu với việc thêm 1-2 môn học quan
            trọng nhất để làm quen với hệ thống
          </p>
        </div>
      </div>
    </div>
  );
}

export default StudyManagement;
