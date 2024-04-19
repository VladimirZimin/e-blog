import { useState } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";

import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps = {}) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>TOOGLE</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};

export default Sidebar;
