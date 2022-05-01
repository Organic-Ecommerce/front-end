import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { Flex } from "rebass";
import Category from "../../../models/Category";
import Product from "../../../models/Product";
import Username from "../../../models/User";
import { busca, buscaId, post, put } from "../../../services/Service";
import { UserState } from "../../../store/tokens/tokensReducer";
import { Input } from "../../input";
import { Textarea } from "../../textarea";
import { Title } from "../../title";

export const ProductRegister = () => {
    /**
     *    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [categorys, setCategorys] = useState<Category[]>([])
    const userId = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );
    
    const token = useSelector<UserState, UserState ["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")

        }
    }, [token])

    const [category, setCategory] = useState<Category>(
        {
            id: 0,
            category: ''
        })

        const [username, setUsername] = useState<Username>({
            id: +userId,    
            name: '',
            username: '',
            password: '',
            photo: '',
            about: ''
        })

    const [product, setProduct] = useState<Product>({

        id: 0,
        title: '',
        description: '',
        photo: '',
        price: 0,
        category: null,
        username: null,

    })

    useEffect(() => {
        setProduct({
            ...product,
            category: category,
            username: username
        })
    }, [category, username])

    useEffect(() => {
        getCategory()
        if (id !== undefined) {
            findByIdProduct(id)
        }
    }, [id])

    async function getCategory() {
        await busca("/category", setCategorys, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdProduct(id: string) {
        await buscaId(`product/${id}`, setProduct, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduct(e: ChangeEvent<HTMLInputElement>) {

        setProduct({
            ...product,
            [e.target.name]: e.target.value,
            category: category,
            username: username,
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/product`, product, setProduct, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Produtos atualizada com sucesso');
        } else {
            post(`/product`, product, setProduct, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Produtos cadastrada com sucesso');
        }
        back()

    }

    function back() {
        history.push('/product')
    }

     */

    return (
        <Flex justifyContent='center' >
        <Flex width='80%' justifyContent='space-between'>
        <Flex flexDirection='column'>
            <Title size="20px">Meu Perfil</Title>
            <Title size="20px">Meus Pedidos</Title>
            <Title size="20px">Cadastrar Produtos</Title>
            <Title size="20px">Meus Produtos Cadastrados</Title>
        </Flex>
        <Flex height='400px' justifyContent='space-around' width='30%' flexDirection='column'>
            <Input placeholder="Nome do produto" />
            <Input placeholder="Valor R$" />
            <Textarea placeholder="Descrição do produto"></Textarea>
            <Textarea placeholder="Como guardar " ></Textarea>
        </Flex>
        </Flex>
        </Flex>
    )
}