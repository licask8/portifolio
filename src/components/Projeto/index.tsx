import Link from 'next/link';
import { SectionTitle } from '../SectionTitle';
import { ProjetoItem } from './ProjetoItem';
import { Container } from './styles';

export function Projetos() {
    return (
        <Container>
            <SectionTitle title='Ultimos Projetos' />

            <section>
                <ProjetoItem 
                title='Projeto 01'
                type='Website'
                img='https://images.unsplash.com/photo-1661890090656-6bf16bbdee4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=437&q=80'
                slug='teste'
                />
                <ProjetoItem 
                title='Projeto 01'
                type='Website'
                img='https://images.unsplash.com/photo-1661890090656-6bf16bbdee4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=437&q=80'
                slug='teste'
                />
                <ProjetoItem 
                title='Projeto 01'
                type='Website'
                img='https://images.unsplash.com/photo-1661890090656-6bf16bbdee4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=437&q=80'
                slug='teste'
                />
            </section>
            <button type='button'>
                <Link href='/projetos'>
                  <a>Ver todos os projetos</a>
                </Link> 
            </button>
        </Container>
    )
}