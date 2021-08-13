import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: center;
    background: blueviolet;
`
export const Nav = styled.nav`
    /* Posição e medidas*/
    display: flex;
    justify-content: space-between;
    width: 80%;

    /*Estilo*/
    background: yellow;
`
export const Ul = styled.ul`
    /* Posição e medidas*/
    display: flex;
    align-items: center;
    
    /*Estilo*/
    background: red;
    list-style: none;
  
`
export const LiC = styled.li`
    /* Posição e medidas*/
    padding: 0 10px 0 10px;
    margin: 0 2px 0 2px;

    /*Estilo*/
    background: ${props => props.primary ? "palevioletred" : "blue"};
`