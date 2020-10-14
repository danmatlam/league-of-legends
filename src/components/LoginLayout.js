import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';

const LoginLayout = () => {
    return (
        <Container>
            <FormSide>

                <Block>
                    <Logo src="/images/logo.svg"/>
                    <h1>Sign in</h1>
                    <LoginForm/>
                </Block>

                <Block>
                    <a>Can't sing in ? </a>
                    <a>Create account </a>
                </Block>
                
          
            </FormSide>
            <ImagesSide>
                <Background src="/images/background-1.jpg"/>
            </ImagesSide>
        </Container>
    )
}

export default LoginLayout;

//MAIN CONTAINER
const Container = styled.div`
    background-color:#cacaca;
    height:100vh;
    width:100vw;
    display:flex;
    flex-direction:row;
    @media screen and (max-width:800px){
        flex-direction:column-reverse;
        align-items:center;
    }
`

// LADO A
const FormSide = styled.div`
    background:#ffffff;
    flex:4;

    @media screen and (max-width:800px){
        width:80vw;
        margin:-15em 0 3em 0;
        border-radius:9pt;
        z-index:1;
    }
    @media screen and (max-width:600px){
        width:100vw;
        margin:0;
        border-radius:0;
    }

`
const Logo = styled.img`
    height:3em;
    width:3em;
`
const Block = styled.div`
    padding:3em 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    
    h1 {
        font-size:1.5em;
    }

    a {
        color:#cacaca;
        text-transform:uppercase;
        font-size:.69em;
        margin:.3em;
    }

`



// LADO B
const ImagesSide = styled.div`
    background:#232f3e;
    flex:8;
    @media screen and (max-width:800px){
        max-height:45vh;
    }
    @media screen and (max-width:600px){
        max-height:24vh;
    }

`;

const Background = styled.img`
    height:100vh;
    width:100%;
    object-fit:cover;
    @media screen and (max-width:800px){
        max-height:45vh;
    }
    @media screen and (max-width:600px){
        max-height:24vh;
    }
`