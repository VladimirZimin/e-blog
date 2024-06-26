import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = props => {
  const { to, className, children, theme = AppLinkTheme.PRIMARY } = props;

  return (
    <Link to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])}>
      {children}
    </Link>
  );
};

export default AppLink;
