import styled from "styled-components"

export const Navbar = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: #606C38;

;

`
export const Imagem = styled.img`
height: 90px;

`

export const MainContainer = styled.div`
background-image: url('/background_blur_pic.png');
background-size: cover;
background-position: center;
height: 100vh;

display: flex;
justify-content: space-between; //vertical distribuition
align-items: center;
`

export const CardLogin = styled.div`
width: 50vw;
padding: 50px;

`

export const OrganicInfo = styled.div`
width: 40vw;
padding: 50px;

h2{
color: white;
font-size: 3em;
margin-bottom: 5%;
text-shadow: 1px 1px 2px black;

}
p{
    color: white;
    font-size: 1.9em;
    text-shadow: 1px 1px 2px black;
}

`


