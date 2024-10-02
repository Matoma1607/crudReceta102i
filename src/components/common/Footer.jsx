import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
    <Container>
      <p>&copy; {new Date().getFullYear()} Blog de Recetas</p>
      <a href="/#" className="text-light mx-2">Política de Privacidad</a>
      <a href="/#" className="text-light mx-2">Términos de Servicio</a>
    </Container>
  </footer>
  );
};

export default Footer;
