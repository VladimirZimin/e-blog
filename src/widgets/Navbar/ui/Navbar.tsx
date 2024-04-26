import { classNames } from 'shared/lib/classNames/classNames';

import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps = {}) {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ul className={cls.links}>
        <li>
          <AppLink theme={AppLinkTheme.SECONDARY} to="/">
            {t('Головна')}
          </AppLink>
        </li>
        <li>
          <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
            {t('Про нас')}
          </AppLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
