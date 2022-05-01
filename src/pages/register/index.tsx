import React, { useState, ChangeEvent} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Flex, Text,  Box as Boxa } from 'rebass';
import { Title } from '../../components/title';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { cadastroUsuario } from '../../services/Service';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {

  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ phone, setPhone ] = useState('')
  const [ senha, setSenha ] = useState('')
  const [ list, setList ] = useState()
  
 const data = {
  name: name,
  username: email,
  password: senha,
  photo: '',
  about: '',
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>){
    e.preventDefault()
    
    try {
    await cadastroUsuario(`/username/register`, data, setList)
     alert("Usuário cadastrado com sucesso")
     setOpen(false)

  } catch (error) {
    alert("Dados do usuário inconsistentes")
  }
}


  return (
    <div>
      <Text style={{ cursor: 'pointer' }} color='white' onClick={handleOpen}>Não possui conta? Cadastre-se</Text>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <form onSubmit={onSubmit}>
          <Flex justifyContent='center'>
          <Flex width='80%' style={{ gap: '2rem'}} flexDirection='column' justifyContent='space-around' alignItems='center'>
          <Boxa mb='1rem' mt='1rem' ><Title>Cadastro</Title></Boxa>
          <Input width='100%' border placeholder='Nome' onChange={(event: any) => setName(event.target.value)} value={name} />
          <Input width='100%' border placeholder='Email' onChange={(event: any) => setEmail(event.target.value)} value={email}  />
          <Input width='100%' border placeholder='Telefone' onChange={(event: any) => setPhone(event.target.value)} value={phone} />
          <Flex style={{ gap: '4rem'}}>
          <Input border text='Senha' type="password" onChange={(event: any) => setSenha(event.target.value)} value={senha}  />
          <Input border text='Confirmar senha' type="password" />
          </Flex>
          <Button width='300px'> FINALIZAR CADASTRO</Button>
          </Flex>
          </Flex> 
         </form> 
        </Box>
      </Modal>
    </div>
  )
}