import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps = {}) => {
  const { t, i18n } = useTranslation();
  const toogle = () => {
    i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
  };

  return (
    <Button className={classNames('', {}, [className])} theme={ThemeButton.CLEAR} onClick={toogle}>
      {t('Мова')}
    </Button>
  );
};

export default LangSwitcher;
