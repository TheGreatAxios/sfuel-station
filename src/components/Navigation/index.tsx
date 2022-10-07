import ThemeToggle from '../ThemeToggle';
import * as Component from './styles';

const Navigation = () => {
  return (
    <Component.Container>
      <Component.Title>
        sFUEL Station
      </Component.Title>
      <ThemeToggle />
    </Component.Container>
  );
}

export default Navigation;
