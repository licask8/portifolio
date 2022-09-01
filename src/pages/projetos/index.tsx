import { Header } from '../../components/Header';
import { ProjetoItem } from '../../components/ProjetoItem';
import { ProjetoContainer } from '../../styles/ProjetoStyles';

export default function Projetos() {
    return (
        <ProjetoContainer>
            <Header />
            <main className='container'>
                <ProjetoItem
                title='Projeto 01'
                type='Website'
                slug='Teste'
                imgUrl='https://images.unsplash.com/photo-1661890090656-6bf16bbdee4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=437&q=80'
                />
                <ProjetoItem
                title='Projeto 01'
                type='Website'
                slug='Teste'
                imgUrl='https://images.unsplash.com/photo-1662017047218-680df61eab71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                />
                <ProjetoItem
                title='Projeto 01'
                type='Website'
                slug='Teste'
                imgUrl='https://images.unsplash.com/photo-1662017047218-680df61eab71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                />
                <ProjetoItem
                title='Projeto 01'
                type='Website'
                slug='Teste'
                imgUrl='https://images.unsplash.com/photo-1662017047218-680df61eab71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                />
                <ProjetoItem
                title='Projeto 01'
                type='Website'
                slug='Teste'
                imgUrl='https://images.unsplash.com/photo-1662017047218-680df61eab71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                />
            </main>
        </ProjetoContainer>
    )
}