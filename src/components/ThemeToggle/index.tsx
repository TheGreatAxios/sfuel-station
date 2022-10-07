/**
 * @author Sawyer Cutler
 * @copyright 2022. Sawyer Cutler
*/

import { useEffect, useState } from 'react';
import { LightMode, DarkMode } from '@styled-icons/material'
import * as Components from './styles';

const ThemeToggle = () => {

  const [theme, setTheme] = useState<string>('light');

  const toggle = () => {
    if (document.body.hasAttribute("data-theme")) {
      document.body.removeAttribute("data-theme");
      setTheme("light");
    } else {
      document.body.setAttribute("data-theme", "dark");
      setTheme("dark");
    }
  }

  useEffect(() => {
    if (theme === "dark") {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
    }
  }, [])

  return (
    <Components.Container>
      <Components.IconContainer onClick={(e: { preventDefault: () => void }) => {
        e.preventDefault();
        toggle();
      }}>
        {theme === "dark" ? <LightMode size="36" /> : <DarkMode size="36" />}
      </Components.IconContainer>
    </Components.Container>
  );
};

export default ThemeToggle;
