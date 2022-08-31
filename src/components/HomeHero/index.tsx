import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/perfil.webp';

export function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Minha foto" />
    <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Elielson</h2>
        </TextContainer>
        <InfosContainer>
            <CodeItem>
                <span className="comment"> //Minha apresentação </span>
                <span className="purple">Infos</span> {'\u007B'}
                <div>
                    Nome: <span className="blue">Elielson, </span>
                </div>
                <div>
                    Sobrenome: <span className="blue">Francisco </span>
                </div>
                {'\u007D'}
            </CodeItem>

            <CodeItem>
                <span className="purple">Cargo</span> {'\u007B'}
                <div>
                    Função: <span className="blue">Dev Front-end </span>
                </div>
                {'\u007D'}
            </CodeItem>
        </InfosContainer>
    </div>
    </Container>
)
}