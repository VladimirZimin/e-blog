import { classNames } from 'shared/lib/classNames/classNames';

import { useTheme, Theme } from 'app/providers/ThemeProvider';

import Button, { ThemeButton } from 'shared/ui/Button/Button';

import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps = {}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? (
        <DarkIcon width={50} height={50} />
      ) : (
        <LightIcon width={50} height={50} />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
