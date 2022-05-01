import React, { useState, useEffect, ChangeEvent } from 'react';
import { Button } from '../../components/button'
import { useHistory } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import { useDispatch } from 'react-redux';
import { addToken } from "../../store/tokens/actions";
import './styles';
import { Box } from 'rebass';
import Logo from '../../assets/images/Logo.png'
import { CardFunction, CardLogin, Imagem, MainContainer, Navbar, OrganicInfo } from './styles';
import { TextField } from '@material-ui/core';

export const Login = () => {

    let history = useHistory()
    const [token, setToken] = useState('token');

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            name: '',
            username: '',
            password: '',
            photo: '',
            about: '',
            token: ''
        }
    )

    // useEffect(() => {
    //     if(token !== ""){
    //         history.push('/')
    //     }
    // }, [token])

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value           
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()

        try {
            await login(`/username/login`, userLogin, setToken)
            alert("Usuário logado com sucesso")

        } catch (error) {
            alert("Dados do usuário inconsistentes")
        }
    }

    return (
        <>
            <Navbar>
                <Imagem src={Logo} />
            </Navbar>

            <MainContainer>
                <div>

                    <OrganicInfo>
                        <h2>
                            Organic
                        </h2>
                        <p>
                            Aqui você adquire produtos orgânicos, frescos,
                            sem agrotóxicos e também comercializa produtos
                            de sua prórpia horta residencial através do
                            Empreendedorismo Sustentável.
                        </p>
                    </OrganicInfo>
                </div>

                <div>
                    <CardLogin>
                        <CardFunction>
                            <form onSubmit={onSubmit}>
                            <TextField value={userLogin.username} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}id='username' label='username' variant='outlined' name='username' margin='normal'fullWidth />
                            <TextField value={userLogin.password} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}id='password' label='password' variant='outlined' name='password' margin='normal'fullWidth />

                                <Button>
                                    Logar
                                </Button>
                            </form>

                            <p>Não possui conta? Cadastre-se</p>
                        </CardFunction>
                    </CardLogin>
                </div>
            </MainContainer>
        </>
    )
}