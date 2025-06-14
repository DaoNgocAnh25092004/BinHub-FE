import classNames from "classnames/bind";
import { ReactNode, MouseEventHandler, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

/**
 * Interface định nghĩa props cho Button component
 */
export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  /** URL để chuyển hướng trang (sử dụng Next.js Link) */
  to?: string;
  /** URL để mở link external */
  href?: string;
  /** Style primary (màu chính) */
  primary?: boolean;
  /** Style outline (viền) */
  outline?: boolean;
  /** Style text only */
  text?: boolean;
  /** Trạng thái disabled */
  disabled?: boolean;
  /** Bo tròn hoàn toàn */
  rounded?: boolean;
  /** Kích thước nhỏ */
  small?: boolean;
  /** Kích thước lớn */
  large?: boolean;
  /** Chiều rộng 100% */
  widthFull?: boolean;
  /** Class CSS tùy chỉnh */
  className?: string;
  /** Icon bên trái */
  leftIcon?: ReactNode;
  /** Icon bên phải */
  rightIcon?: ReactNode;
  /** Nội dung button */
  children: ReactNode;
  /** Animation class */
  animation?: boolean;
  /** Xử lý sự kiện click */
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

/**
 * Button component tái sử dụng với nhiều variants và styles
 *
 * @param props - Props của Button component
 * @returns JSX Element
 */
function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  disabled = false,
  rounded = false,
  small = false,
  large = false,
  widthFull = false,
  className,
  leftIcon,
  rightIcon,
  children,
  animation,
  onClick,
  ...passProps
}: ButtonProps) {
  // Xác định component sẽ được render (button, a, hoặc Link)
  let Comp: React.ElementType = "button";

  // Tạo props object với type any để xử lý dynamic props
  const props: any = {
    onClick,
    ...passProps,
  };

  // Vô hiệu hóa tất cả event handlers nếu button bị disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });

    // Ngăn chặn navigation khi disabled
    props.to = undefined;
    props.href = undefined;
  } else {
    // Xử lý routing cho Next.js
    if (to) {
      // Sử dụng Next.js Link cho internal routing
      const Link = require("next/link").default;
      props.to = to.startsWith("/") ? to : `/${to}`;
      Comp = Link;
    } else if (href) {
      // Sử dụng thẻ a cho external links
      props.href = href.startsWith("/") ? href : `/${href}`;
      Comp = "a";
    }
  }

  // Tạo class names dựa trên props
  const classes = cx("wrapper", {
    ...(className && { [className]: true }),
    primary,
    outline,
    small,
    widthFull,
    text,
    large,
    disabled,
    rounded,
    animation,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
