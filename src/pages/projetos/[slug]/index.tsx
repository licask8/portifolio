import { BannerProjeto } from '../../../components/BannerProjeto'
import { Header } from '../../../components/Header'
import { ProjetoContainer } from '../../../styles/ProjetoContainer'

export default function Projeto() {
    return (
        <ProjetoContainer>
            <Header />
            <BannerProjeto 
            title='Coffe-delivery'
            type='Website'
            imgUrl='https://images.unsplash.com/photo-1661890090656-6bf16bbdee4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=437&q=80'
            />

            <main>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor facilis veritatis et dolorem beatae odit in sit, aliquid saepe. Qui in architecto inventore minus quibusdam accusantium expedita modi repellat blanditiis.</p>
                <button type='button'>
                    <a href='#'>Ver projeto online</a>
                </button>
            </main>
        </ProjetoContainer>
    )
}