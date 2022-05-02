import React, { useState, useEffect, ChangeEvent } from 'react';

import { Box, Flex, Text } from 'rebass';
import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/button'
import { Input } from '../../components/input';

import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';

import { CardLogin, MainContainer, Navbar, OrganicInfo } from './styles';

import Logo from '../../assets/images/Logo.png'
import BasicModal from '../register';


export const Login = () => {
	const location = useNavigate();
    const [token, setToken] = useState('token');
    const [userLogin, setUserLogin] = useState<any>([])
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
						location('/home')				

        } catch (error) {
            alert("Dados do usuário inconsistentes")
        }
    }

	return (
		<>
			<Navbar>
				<img src={Logo} />
			</Navbar>
			<MainContainer>
				<Box>
					<OrganicInfo>
						<Text fontWeight='700' mb='2rem' color='#B4FFA8' fontSize='40px'>Organic</Text>
						<Text fontSize='1.5rem' color='#B4FFA8'>
								Aqui você adquire produtos orgânicos, frescos,
								sem agrotóxicos e também comercializa produtos
								de sua prórpia horta residencial através do
								Empreendedorismo Sustentável.
						</Text>
					</OrganicInfo>
				</Box>
				<Box>
					<CardLogin>
						<form onSubmit={onSubmit}>
						<Flex alignItems='center' mb='2rem' flexDirection='column' style={{ gap: '2rem'}}>
						<Input height='62px' width='80%' placeholder='Email' value={userLogin.username} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}id='username'  name='username' />
						<Input height='62px' width='80%' placeholder='Senha' value={userLogin.password} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}id='password'  name='password' />
						<Button width='300px'>Logar</Button>
						</Flex>
						</form>
					<Box textAlign='center'><BasicModal/></Box>
					</CardLogin>
				</Box>
			</MainContainer>
			</>
)
}