import React from 'react';
import { Header, Nav, Ul, LiC } from './StyledCabecalho';

const Cabecalho = () => {
    return ( 
        <Header>
            <Nav>
                <h1>Logo</h1>
                <Ul>
                    <LiC primary>Home</LiC>
                    <LiC>Noticias</LiC>
                    <LiC>Sobre</LiC>
                </Ul>
            </Nav>
        </Header>
    );
}
    
export default Cabecalho;