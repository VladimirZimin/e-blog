import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps = {}) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      className={classNames(cls.button, {}, [cls[theme || ""], className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
