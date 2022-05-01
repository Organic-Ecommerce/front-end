import styled from "styled-components"

export const Navbar = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: #606C38;
90;
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

export const CardFunction = styled.div`

text-align: center;

form{
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
}

Button{
    margin-top: 5%;
    width: 45%;
    padding: 1.5%;
    color: #fff !important;
    box-shadow: #151d24 2px 2px 2px;

}

input {
    width: 90%;
    border-radius: 2px;
    border-color: none;
    background-color: white;
    font-size:1.2em;
    padding: 2%;
    margin-top: 5%;
}

p{
    margin-top: 5%;
    color: white;
    font-size: 1.5em;
    text-shadow: 1px 1px 2px black;
}

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


