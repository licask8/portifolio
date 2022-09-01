import { Container } from './styles';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

export function Footer() {

    function handleRedirect(url: string) {
      window.open(url)
    }

    function handleScrollTop() {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }

    return (
        <Container>
            <div className='container'>
                <button type="button" onClick={handleScrollTop}>
                    Voltar ao topo
                </button>
                <section>
                    <AiFillLinkedin
                      onClick={() => handleRedirect("https://www.linkedin.com/in/elielson-silva-70634913b/")}
                    />
                    <AiOutlineGithub
                      onClick={() => handleRedirect("https://github.com/licask8")}
                    />
                </section>
            </div>
        </Container>
    )
}