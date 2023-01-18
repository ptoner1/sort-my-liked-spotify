import styled from 'styled-components/macro';
import Spotify_Logo_Green from '../images/Spotify_Logo_Green.png'

const StyledLoginContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    height: 100vh;
    width: 100vw;
    padding: 0;

    h1 {
        cursor: default;
        margin-top: -3.5rem;
    }

    h3 {
        font-family: 'Roboto', sans-serif;
        letter-spacing: 1px;
        font-weight: 300;
        cursor: default;
    }

    img {
        position: absolute;
        top: 2.5%;
        right: 50%;
        translate: 50%;
        width: 20rem;

        @media (min-width: 425px) {
            right: 2.5%;
            translate: 0;
        }
    }
`

const StyledLoginButton = styled.a`
background-color: var(--green);
padding: var(--spacing-md) var(--spacing-xxl);
border-radius: var(--border-radius-pill);
display: inline-block;
font-size: var(--fz-lg);

&:hover,
&:focus {
    text-decoration: none;
    filter: brightness(1.1);
}
`

export default function Login() {

    return (
        <StyledLoginContainer>
            <img src={Spotify_Logo_Green} alt="Spotify Logo" />
            <h3>welcome to</h3>
            <h1>Sort My Liked</h1>
            <StyledLoginButton href='http://localhost:8000/login'>
                Log in
            </StyledLoginButton>
        </StyledLoginContainer>
    )
}