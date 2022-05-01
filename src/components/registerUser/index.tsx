import React, { useState, useEffect, ChangeEvent } from 'react';
import { Button } from '../../components/button'
import { useHistory } from 'react-router-dom';
import { cadastroUsuario, login } from '../../services/Service';
import User from '../../models/UserLogin';
import { useDispatch } from 'react-redux';
import { addToken } from "../../store/tokens/actions";
import './styles';
import { Box } from 'rebass';
import Logo from '../../assets/images/Logo.png'
import {  CardFunction, CardRegister, MainContainer } from './styles';

export const Login = () => {

    let history = useHistory()
    const [token, setToken] = useState('token');

    const [user, setUser] = useState<User>(
        {
            id: 0,
            name: '',
            username: '',
            password: '',
            photo: '',
            about: ''
        }
    )

    // useEffect(() => {
    //     if(token !== ""){
    //         history.push('/')
    //     }
    // }, [token])

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value           
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()

        try {
            await cadastroUsuario(`/username/register`, user, setToken)
            alert("Usuário cadastrado com sucesso")

        } catch (error) {
            alert("Dados do usuário inconsistentes")
        }
    }

    return (
        <>

            <MainContainer>
                <div>
                    <CardRegister>
                        <CardFunction>
                            <form onSubmit={onSubmit}>
                                <input></input>
                                <input></input>
                                <input></input>
                                <input></input>
                                <Button>
                                    Cadastrar
                                </Button>
                            </form>

                            <p>Não possui conta? Cadastre-se</p>
                        </CardFunction>
                    </CardRegister>
                </div>
            </MainContainer>
        </>
    )
}