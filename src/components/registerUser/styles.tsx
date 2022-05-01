import styled from "styled-components"


export const MainContainer = styled.div`
background-image: url('/background_blur_pic.png');
background-size: cover;
background-position: center;
height: 100vh;

display: flex;
justify-content: space-between; //vertical distribuition
align-items: center;
`

export const CardRegister = styled.div`
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


