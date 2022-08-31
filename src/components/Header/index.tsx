import NavLink from './NavLink';
import { Container } from './styles';

// interface HeaderProps {
//   title: string;
//   path: string;
// }

export function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" />
      </ul>
    </Container>
  );
}
